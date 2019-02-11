var vuelingCommands = {
  selectNextWeek: function() {
    var nextWeekDate = nextweek();
    var month = 1;
    var dayOfWeek = nextWeekDate.getDate();

    if (!isSameMonth(nextWeekDate)) {
      month = 2;
    }
    var xPathSelector =
      "//div[@id='ui-datepicker-div']" +
      "//td[@data-month='" +
      month +
      "']" +
      "//a[contains(@class, 'ui-state-default') and text()='" +
      dayOfWeek +
      "']";

    return xPathSelector;
  }
};

module.exports = {
  url: "https://www.vueling.com/es",
  commands: [vuelingCommands],
  elements: {
    originInput: {
      selector: ".origin input"
    },
    destinationInput: {
      selector: ".destination input"
    },
    passengersInput: {
      selector: "#passengers-input"
    },
    dateRangeInput: {
      selector: ".date-range input"
    },
    searchSubmit: {
      selector: "#btnSubmitHomeSearcher"
    },
    citiesOriginSugestion: {
      selector: "#origin-sugestion-popup"
    },
    citiesDestinationSugestion: {
      selector: "#destinationInput-sugestion-popup"
    }
  }
};

function nextweek() {
  var today = new Date();
  var nextweek = new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate() + 7
  );
  return nextweek;
}

function isSameMonth(nextWeekDate) {
  const now = new Date();
  return now.getMonth() === nextWeekDate.getMonth();
}
