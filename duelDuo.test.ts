
const { Builder, Capabilities, By } = require("selenium-webdriver")

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeEach(async () => {
    driver.get('http://localhost:3000/')
})

afterAll(async () => {
    driver.quit()
})

describe('Duel duo tests', () => {
    test('Title shows up when page loads', async () => {
        const title = await driver.findElement(By.id('title'))
        const displayed = await title.isDisplayed()
        expect(displayed).toBe(true)
    })
    
    test('Draw button displays choices div', async () => {
        await driver.findElement(By.id('draw')).click();
        await driver.sleep(3000);
    
        const div = await driver.findElement(By.id('choices'))
        const displayed = await div.isDisplayed()
        expect(displayed).toBe(true);
    })
    
    test('Add to duo button displays player-id div', async () => {
        await driver.findElement(By.id('draw')).click();
        await driver.sleep(3000);
    
        await driver.findElement(By.className('bot-btn')).click();
        await driver.sleep(3000);
    
        const div = await driver.findElement(By.id('player-id'))
        const displayed = await div.isDisplayed()
        expect(displayed).toBe(true);
    })
})
