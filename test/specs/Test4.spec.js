const Login = require('../pageobjects/Login')
describe("User signup",()=>{
    it("opening demoblaze",async()=>{
        browser.url("https://www.demoblaze.com/");
        browser.maximizeWindow()
    })
    it('should login a user, verify login, and logout', async () => {
        
        await Login.LoggingIn("mfsi", "password");
        await Login.verifyLogin();
        await Login.Logout();
    });
})