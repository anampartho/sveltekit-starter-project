import { expect, test } from '@playwright/test';

test('index page has expected anchor tag', async ({ page }) => {
	await page.goto('/');
	await expect(page.getByRole('link', { name: 'Listd' })).toBeVisible();
});
