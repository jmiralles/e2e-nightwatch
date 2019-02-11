module.exports = {
  "Search flight": function(browser) {
    var vueling = browser.page.vueling();
    var nextWeekXpath = vueling.selectNextWeek();

    vueling
      .navigate()
      .waitForElementVisible("@originInput")
      .click("@originInput")
      .waitForElementVisible("@citiesOriginSugestion")
      .useXpath()
      .click("//*[contains(@class, 'list-item') and text()='Alicante']")
      .waitForElementVisible("@citiesDestinationSugestion")
      .click(
        "//div[@id='destinationInput-sugestion-popup']//*[contains(@class, 'list-item') and text()='Almería']"
      )
      .waitForElementVisible("@dateRangeInput")
      .click(nextWeekXpath);

    vueling.pause(100000);

    browser.end();
  }
};
