const HomePage = require('../pageobjects/Home')
describe("Opening Demoblaze Home Page",()=>{
    it("opening demoblaze",async()=>{
        browser.url("https://www.demoblaze.com/");
        browser.maximizeWindow()
    })
    it("verifying Links", async ()=>{
        console.log(await browser.getTitle());
        await HomePage.verifyHometags()
    })
    it('verifying about us',async()=>{
        await HomePage.verifyAboutUS()
    })

})