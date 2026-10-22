import { locators } from "../locators/locators";

import { Page } from "@playwright/test";
export class  loginPage 
{
    readonly username: any;
    readonly password:  any;
    readonly logingbtn : any;
    constructor(private page:  Page)
    {
        this.page = page;
this.username =  page.locator(locators.username);
this.password = page.locator(locators.password);
this.logingbtn = page.locator(locators.loginBtn);
    }
    async goto()
    {
        await this.page.goto("https://www.saucedemo.com");

    }
    async login(username: string,password: string)
    {
        await this.username.fill(username);
        await this.password.fill(password);
        await this.logingbtn.click();
    }

}