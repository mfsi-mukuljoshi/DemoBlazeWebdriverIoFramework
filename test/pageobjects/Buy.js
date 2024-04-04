class Buy {
    

    get mobCat() { return $('//a[text()="Phones"]') }
    get lapCat() { return $('//a[text()="Laptops"]') }
    get monCat() { return $('//a[text()="Monitors"]') }
    get Name() { return $('#name') }
    get Country() { return $('#country') }
    get City() { return $('#city') }
    get Card() { return $('#card')}
    get Month() { return $('#month') }
    get Year() { return $('#year') }

    async chooseCategory(category) {
        if (category === "mobile") {
            await this.mobCat.click();
        } else if (category === "laptop") {
            await this.lapCat.click();
        } else {
            await this.monCat.click();
        }
    }

    async chooseProduct(name) {
        const prod = $(`//a[text()='${name}']`);
        await prod.click();
        await $('//a[text()="Add to cart"]').click();
        await browser.pause(2000);
        console.log(await browser.getAlertText() + " " + name);
        await browser.acceptAlert();
        await $('//a[text()="Home "]').click();
    }

    async checkOut(name, country, city) {
        await $('=Cart').click();
        await browser.pause(5000)
        console.log("Total bill " + await $('#totalp').getText());
        await $('//button[text()="Place Order"]').click();
       
        await this.Name.waitForEnabled({timeout:5000, interval:1000})
        await this.Name.setValue(name);
        await this.Country.setValue(country);
        await this.City.setValue(city);
        await this.Card.setValue("12312345678");
        await this.Month.setValue("12");
        await this.Year.setValue("2018");

        await $('//button[text()="Purchase"]').click();

        console.log(await $('body > div.sweet-alert.showSweetAlert.visible > p').getText());

        await $('//button[text()="OK"]').click();
    }
}

module.exports = new Buy();
