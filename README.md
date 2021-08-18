# flat-weather-data

Project to collect weather data over time. Goal is to understand how forecasts accuracy varies over time.

## GIST of the Approach

1. Get data from NWS API for a few locations on a regular basis (leveraging the [Flat Data Project](https://octo.github.com/projects/flat-data))
2. Post process the data to create a dataset organized to have a historical view
3. Create a set of pages that allow a user to explore the history over time

## Motivation for the Project

* Understand how to leverage some of the capabilities of github
* General curiosity of how forecasts vary as we get closer to the actual time window
  * Does the accuracy improve as you go from 3 to 2 to 1 days out?
  * How does that accuracy vary over time? Are our forecasts getting more accurate over time or less accurate? Why?
