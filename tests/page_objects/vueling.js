var moment = require("moment");

var vuelingCommands = {
  nextWeekXpathSelector: function() {
    var now = moment();
    var nextWeekDate = this.getNextWeek(now);
    var month = this.isSameMonth(now, nextWeekDate) ? 1 : 2;
    var dayOfMonth = nextWeekDate.date();
    var xPathSelector =
      "//div[contains(@class, 'searchbar-datepicker')]" +
      "//td[@data-month='" +
      month +
      "']" +
      "//a[contains(@class, 'ui-state-default') and text()='" +
      dayOfMonth +
      "']";

    return xPathSelector;
  },
  getNextWeek: function(date) {
    return date.add(7, "days");
  },
  getNextWeekFormated: function() {
    return this.getNextWeek(moment()).format('DD/MM/YYYY');
  },
  isSameMonth(dateA, dateB) {
    return moment(dateA).isSame(dateB, 'month'); 
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
      selector: ".searchbar-datepicker"
    },
    searchSubmit: {
      selector: "#btnSubmitHomeSearcher"
    },
    citiesOriginSugestion: {
      selector: "#origin-sugestion-popup"
    },
    citiesDestinationSugestion: {
      selector: "#destinationInput-sugestion-popup"
    },
    resultsElement: {
      selector: "#research"
    }
  }
};

