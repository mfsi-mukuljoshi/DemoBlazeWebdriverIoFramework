const SignUp = require('../pageobjects/SignUp')
describe("User signup",()=>{
    it("opening demoblaze",async()=>{
        browser.url("https://www.demoblaze.com/");
        browser.maximizeWindow()
    })
    it('should sign up a user', async () => {
       
        await SignUp.Signup("jmukul", "password");
    });
})