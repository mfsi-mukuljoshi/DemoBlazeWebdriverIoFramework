const Login = require('../pageobjects/Login')
const Buy = require('../pageobjects/Buy')
describe("Buying Product", () => {
    it("opening demoblaze", async () => {
        browser.url("https://www.demoblaze.com/");
        browser.maximizeWindow()
    })
    it('should buy an item', async () => {

        await Login.LoggingIn("mfsi", "password");

        await browser.pause(4000);
        await Buy.chooseCategory("mobile")
        await Buy.chooseProduct("Samsung galaxy s6");
        await Buy.checkOut("Mukul", "India", "Kotdwar");
    });
})