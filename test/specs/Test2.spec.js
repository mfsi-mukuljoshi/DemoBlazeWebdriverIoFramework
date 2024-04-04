const ContactUs = require("../pageobjects/ContactUs");

describe("",()=>{
    it("opening demoblaze",async()=>{
        browser.url("https://www.demoblaze.com/");
        browser.maximizeWindow()
    })
    it('should submit contact form', async () => {
        await ContactUs.Contact("test@gmail.com", "Mukul", "Hi I want contact");
    });
})