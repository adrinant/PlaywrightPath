import { test, expect, type Page } from '@playwright/test';
import exp from 'constants';

test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/'); //open the browser

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/); //assertions
});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});


/**
 * 1. Open the page
 * 2. Click at Get Started
 * 3. Mouse hover the language dropdown
 * 4. Click at Java
 * 5. Check the URL
 * 6. Check the h1 Installation
 * 7. Check the text "Installing Playwright" is not being displayed
 * 8. Check the text below is displayed
 * 
 * Playwright is distributed as a set of Maven modules. The easiest way to use it is to add one dependency to your project's pom.xml as described below.
 * 
 */

test('check Java page', async ({page}) => {
  await page.goto('https://playwright.dev/');
  await page.getByRole('link', {name: 'Get started'}).click();
  await page.getByRole('button', {name: 'Node.js'}).hover();
  await page.getByText('Java', {exact:true}).click();

  await expect(page).toHaveURL('https://playwright.dev/java/docs/intro');
  await expect(page.getByRole('heading', {name: 'Installation'})).toBeVisible();
  expect(page.getByText('Installing Playwright', { exact: true })).not.toBeVisible();
  
  const javaDesc = "Playwright is distributed as a set of Maven modules. The easiest way to use it is to add one dependency to your project's pom.xml as described below.";
  await expect(page.getByText(javaDesc)).toBeVisible();
});