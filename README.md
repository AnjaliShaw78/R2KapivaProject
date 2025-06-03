# WDIO Test Script for Product Functionality Validation

## Introduction to WebdriverIO (WDIO)

WebdriverIO (WDIO) is a powerful, flexible test automation framework built on top of the WebDriver protocol. It allows you to write automated tests for web and mobile applications with easy-to-read syntax and supports integration with tools like Appium for mobile automation.

Key features of WDIO:
- Supports multiple browsers and mobile platforms
- Easy asynchronous commands handling with async/await
- Supports behavior-driven development (BDD) and test-driven development (TDD)
- Rich ecosystem with plugins for reporting, services, and frameworks

---

## Overview of This Test Script

This WDIO test script automates the validation of product-related functionality in an Android app, focusing on categories like Men, Skin Care, Blood, and Sugar.

## Test Steps

- Waits for and clicks on the **"Continue as Guest"** button
- Navigates to the **"Gym Foods"** section and performs navigation actions
- Scrolls to product **"Shilajit Gold New Arrival"**
- Clicks on **Skin Care** category
- Scrolls to and interacts with **Hair Care Juice + VCO**
- Selects **Neem Juice 1L** product, adds it to cart, and verifies the product details
- Proceeds to the checkout screen

## Key Commands Used

- `waitForDisplayed({ timeout })`: Waits until an element is displayed on screen before proceeding
- `click()`: Clicks an element
- `driver.back()`: Navigates back in the app
- `scrollTextIntoView("text")`: Scrolls until the given text appears
- `expect(element).toHaveText("text")`: Assertion to verify UI text content

## Running the Test

1. Set up WDIO with Appium and configure your environment.
2. Connect your Android device or emulator.
3. Run the test using:

```bash
npx wdio run wdio.conf.js
