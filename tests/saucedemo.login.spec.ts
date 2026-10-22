import { test,expect } from "@playwright/test";
import { loginPage } from "../page/loginPage";
import { BASE_URL,USER_NAME,PASSWORD } from "../utils/envConfig";

test("verified login POM", async ({ page }) => {
  const loginpage11 = new loginPage(page);
  await page.goto(BASE_URL);
  await loginpage11.login(USER_NAME,PASSWORD);
  await page.pause();
  await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html");
})

//username = await page.locators("#user-name").click();

