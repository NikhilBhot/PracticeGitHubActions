import { test, expect } from "@playwright/test";

test("Verify SauceDemo URL and Title 1", async ({ page }) => {
  await page.goto("https://www.saucedemo.com/");

  // Verify URL
  await expect(page).toHaveURL("https://www.saucedemo.com/");

  console.log("URL verified successfully");

  // Verify title
  await expect(page).toHaveTitle("Swag Labs");

  console.log("Title verified successfully");
});

test("Verify SauceDemo URL and Title 2", async ({ page }) => {
  await page.goto("https://www.saucedemo.com/");

  // Verify URL
  await expect(page).toHaveURL("https://www.saucedemo.com/");

  console.log("URL verified successfully");

  // Verify title
  await expect(page).toHaveTitle("Swag Labs Wrong ");

  console.log("Title verified successfully");
});

test("Verify SauceDemo URL and Title 3", async ({ page }) => {
  await page.goto("https://www.saucedemo.com/");

  // Verify URL
  await expect(page).toHaveURL("https://www.saucedemo.com/");

  console.log("URL verified successfully");

  // Verify title
  await expect(page).toHaveTitle("Swag Labs");

  console.log("Title verified successfully");
});

test.describe("Practice Test", async () => {
  test("Verify SauceDemo URL and Title 4", async ({ page }) => {
    await page.goto("https://www.saucedemo.com/");

    // Verify URL
    await expect(page).toHaveURL("https://www.saucedemo.com/");

    console.log("URL verified successfully");

    // Verify title
    await expect(page).toHaveTitle("Swag Labs");

    console.log("Title verified successfully");
  });

  test("Verify SauceDemo URL and Title 5", async ({ page }) => {
    await page.goto("https://www.saucedemo.com/");

    // Verify URL
    await expect(page).toHaveURL("https://www.saucedemo.com/");

    console.log("URL verified successfully");

    // Verify title
    await expect(page).toHaveTitle("Swag Labs");

    console.log("Title verified successfully");
  });

  test("Verify SauceDemo URL and Title 6", async ({ page }) => {
    await page.goto("https://www.saucedemo.com/");

    // Verify URL
    await expect(page).toHaveURL("https://www.saucedemo.com/");

    console.log("URL verified successfully");

    // Verify title
    await expect(page).toHaveTitle("Swag Labs");

    console.log("Title verified successfully");
  });

});

test("Verify SauceDemo URL and Title 6", async ({ page }) => {
    await page.goto("https://www.saucedemo.com/");

    // Verify URL
    await expect(page).toHaveURL("https://www.saucedemo.com/");

    console.log("URL verified successfully");

    // Verify title
    await expect(page).toHaveTitle("Swag Labs");

    console.log("Title verified successfully");
  });