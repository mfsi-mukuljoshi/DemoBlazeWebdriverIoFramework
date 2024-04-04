class ContactUS {
    

    get CtctLink() { return $('=Contact'); }
    get CtctEmail() { return $('#recipient-email'); }
    get CtctName() { return $('#recipient-name'); }
    get CtctMessage() { return $('#message-text'); }
    get CtctUsSend() { return $('#exampleModal > div > div > div.modal-footer > button.btn.btn-primary'); }

    async Contact(email, name, message) {
        await this.CtctLink.click();
        await browser.pause(1000);
        await this.CtctEmail.setValue(email);
        await this.CtctName.setValue(name);
        await this.CtctMessage.setValue(message);
        await this.CtctUsSend.click();
        console.log(await browser.getAlertText());
        await browser.acceptAlert();
    }
}

module.exports = new ContactUS();
