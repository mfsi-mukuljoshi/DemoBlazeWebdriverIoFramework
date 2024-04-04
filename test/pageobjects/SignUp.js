class SignUp {
   
    get usn() { return $('#sign-username'); }
    get SignUpLink() { return $('=Sign up'); }
    get SignUsername() { return $('#sign-username'); }
    get SignPassword() { return $('#sign-password'); }
    get SignupBtn() { return $('#signInModal > div > div > div.modal-footer > button.btn.btn-primary'); }

    async Signup(username, password) {
        await this.SignUpLink.click();
        await browser.pause(1000);
        await this.SignUsername.setValue(username);
        await this.SignPassword.setValue(password);
        await this.SignupBtn.click();
        await browser.pause(2000);
        console.log(await browser.getAlertText());
        await browser.acceptAlert();
        
    }
}

module.exports = new SignUp();
