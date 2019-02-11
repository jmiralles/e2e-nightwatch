# e2e-nightwatch

Project example for e2e nightwatch enviroment.
TEST: Searching for a flight in vueling.com/es:

Scenario: Initial search

Given I'm in the main page

When I try to find a flight
| From | Destination | Outbound | passengers |
| -------- | :---------: | :-------: | :--------: |
| Alicante | Almería | NEXT_WEEK | 1 |

Then I get available flight

## Instructions

```
npm install
npm run nightwatch
```

Tests will run in chrome and when finished a html report should automatically open in browser.

## Troublesooting

Sometimes npm run nightwatch fails. Trying again should do the trick.

7432 port should be free to use for selenium.

## TODO

Add cucumber (gherkin) implementation
