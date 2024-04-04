class Login {
    

    get Loginlink() { return $('=Log in'); }
    get LoginUser() { return $('#loginusername'); }
    get LoginPassword() { return $('#loginpassword'); }
    get LoginBtn() { return $('#logInModal > div > div > div.modal-footer > button.btn.btn-primary'); }

    async LoggingIn(username, password) {
        await this.Loginlink.click();
        await browser.pause(2000); 
        await this.LoginUser.setValue(username);
        await this.LoginPassword.setValue(password);
        await this.LoginBtn.click();
    }

    async verifyLogin() {
        await browser.pause(5000); 
        await expect($('=Log out')).toBeDisplayed();
    }

    async Logout() {
        await $('=Log out').click();
    }
}

module.exports = new Login();
