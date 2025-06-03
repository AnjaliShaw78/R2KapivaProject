describe('To validate the functionality of products from Men, Skin, Blood and Sugar option', () => {
    it('Mens', async () => {
    //     // Log for confirmation
    // Wait for the "Continue as Guest" button to appear
    const allowBtn = await $('//android.view.View[@content-desc="Continue as Guest"]');
    await allowBtn.waitForDisplayed({ timeout: 30000 });
    await allowBtn.click();
    await $('android=new UiSelector().className("android.view.View")').click();

    // Click on the element with description "Gym Foods"
    // const gymFoods = await $('android=new UiSelector().description("Gym Foods")');
    // await gymFoods.click();

    // Log for confirmation
    console.log('Successfully clicked on Gym Foods');
    await driver.back();
    await $('//android.widget.ImageView[@content-desc="Gym Foods"]').click(); // to click on gym food

    await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollTextIntoView("Shilajit Gold New Arrival")'); // for scrolling 

    
    await driver.back();
    await $('//android.widget.ScrollView/android.view.View[3]').click(); // to click on arrow button

    await $('//android.widget.ImageView[@content-desc="Skin Care"]').click();// to click on skin care option

    await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollTextIntoView("Hair Care Juice + VCO")'); // for scrolling in that page

    await $('//android.view.View[@content-desc="3.5/5 14% OFF Neem Juice 1L ₹ 299 349 Earn 14 coins"]/android.widget.ImageView[1]').click();
    
    await $('//android.view.View[@content-desc="3.5/5 14% OFF Neem Juice 1L ₹ 299 349 Earn 14 coins"]/android.widget.ImageView[3]').click()
        await $('android.widget.ImageView[@content-desc="Cart"]').click();
        const product = await $('//android.widget.ImageView[@content-desc="Neem Juice 1L Pack of 1(15 days): ₹299 @14% off ₹299.00 ₹349.00 1"]');
        await expect(product).toHaveText('Neem Juice 1L');


        await $('//android.view.View[@content-desc="CHECKOUT"]').click();

    });

});



