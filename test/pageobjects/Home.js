class Home {
    

    get ABtusBtn() { return $('//html/body/div[4]/div/div/div[3]/button'); }

    async verifyTitle() {
        await expect(browser).toHaveTitle('STORE');
    }

    async verifyHometags() {
        console.log(await $('//a[text()="Home "]').getText());
        await expect($('//a[text()="Home "]')).toBeDisplayed();
        await expect($('=Contact')).toHaveText('Contact');
        await expect($('=About us')).toHaveText('About us');
        await expect($('=Cart')).toHaveText('Cart');
        await expect($('=Log in')).toHaveText('Log in');
        await expect($('=Sign up')).toHaveText('Sign up');
    }

    async verifyAboutUS() {
        const abtus = $('=About us');
        await abtus.click();
        await browser.pause(1000);
        await this.ABtusBtn.click();
    }
}

module.exports = new Home();
