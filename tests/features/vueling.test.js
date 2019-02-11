module.exports = {
  "Search flight": function(browser) {
    var vueling = browser.page.vueling();
    var nextWeekXpath = vueling.nextWeekXpathSelector();
    var nextWeekDateExpected = vueling.getNextWeekFormated();
    
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
      .click(nextWeekXpath)
      .click("@searchSubmit")
      .waitForElementVisible("@resultsElement")
      .useCss()
      .assert.containsText('#research h3.floatLeft', 'Tu búsqueda:')
      .assert.containsText('#research .details > p strong', 'Alicante (ALC) - Almería (LEI)')
      .assert.containsText('#research .details #outboundDate', nextWeekDateExpected)
      
      
    browser.end();
  }
};
