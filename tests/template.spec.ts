import {test, expect} from '@playwright/test';

///AAA Pattern

// [Arrange]
// [Act]
// [Assert]

const password = process.env.PASSWORD;

test.beforeAll(async ({playwright}) => {
    test.skip(
        !!process.env.PROD,
        'Test intentionally skipped in production due to data dependency.'
    );
    // start a server
    // create a db connection
    // reuse a sign in state
});

test.beforeEach(async ({page}, testInfo) => {
    console.log(`Running ${testInfo.title}`);
    // open a URL
    // clean up the DB
    // create a page object
    // dismiss a modal
    // load params
});

test.afterAll(async ({page}, testInfo) => {
    console.log('Test file completed');
    // colse a DB connection
});

test.afterEach(async ({page}, testInfo) => {
    console.log(`Finished ${testInfo.title} with status ${testInfo.status}`);

    if(testInfo.status !== testInfo.expectedStatus)
        console.log(`Did not run as expected, ended up at ${page.url()}`);
    // clean up all the data we created for this test through API calls
});

test.describe.skip('Test Scenario', () => { //Test Scenario Name
    test('Test Case One', async ({page}) => { // Test Case Name
        await test.step('Step One', async () => {
            // ...
        });
        await test.step('Step One', async () => {
            // ...
        });
    });

    test('Test Case Two', async ({page}) => { // Test Case Name
        await test.step('Step One', async () => {
            // ...
        });
        await test.step('Step One', async () => {
            // ...
        });
    });

    // test.only('Test Scenario Three', async({page}) => {
    //     // Arrange
    //     // Act
    //     // Assert
    // });

    // test.skip('Test Scenario Four', async({page}) => {
    //     // Arrange
    //     // Act
    //     // Assert
    // });
    
});