import { test, expect } from "@playwright/test";

test.describe("Axiom Portfolio E2E", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });

  test("hero section is visible with title", async ({ page }) => {
    const title = page.locator("h1");
    await expect(title).toContainText("high-velocity digital ecosystems");
  });

  test("scroll reveals service cards", async ({ page }) => {
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
    await page.waitForTimeout(1000);

    const serviceCards = page.locator(".service-card");
    const count = await serviceCards.count();
    expect(count).toBeGreaterThanOrEqual(3);
  });

  test("project cards are visible after scrolling", async ({ page }) => {
    await page.locator("#projects").scrollIntoViewIfNeeded();
    await page.waitForTimeout(500);

    const projectNodes = page.locator(".project-node");
    const count = await projectNodes.count();
    expect(count).toBe(3);

    const firstProject = projectNodes.first();
    await expect(firstProject).toBeVisible();
    await expect(firstProject).toContainText("Savanah Dwelling");
  });

  test("WhatsApp link has correct href", async ({ page }) => {
    await page.locator(".cta-container").scrollIntoViewIfNeeded();
    await page.waitForTimeout(500);

    const waLink = page.locator('a[href*="wa.me"]');
    await expect(waLink).toBeVisible();
    const href = await waLink.getAttribute("href");
    expect(href).toContain("wa.me/25424436338");
  });

  test("phone link has correct tel href", async ({ page }) => {
    await page.locator(".cta-container").scrollIntoViewIfNeeded();
    await page.waitForTimeout(500);

    const phoneLink = page.locator('a[href*="tel:"]');
    await expect(phoneLink).toBeVisible();
    const href = await phoneLink.getAttribute("href");
    expect(href).toBe("tel:+25424436338");
  });

  test("project links open in new tab with security attributes", async ({
    page,
  }) => {
    await page.locator("#projects").scrollIntoViewIfNeeded();
    await page.waitForTimeout(500);

    const externalLink = page
      .locator(".project-node")
      .first()
      .locator('a[target="_blank"]');
    await expect(externalLink).toBeVisible();

    const rel = await externalLink.getAttribute("rel");
    expect(rel).toContain("noopener");
    expect(rel).toContain("noreferrer");
  });

  test("metrics counters are present", async ({ page }) => {
    const counters = page.locator(".counter-val");
    const count = await counters.count();
    expect(count).toBe(3);
  });
});
