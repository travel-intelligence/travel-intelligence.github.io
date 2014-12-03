---
layout: post
title: Travel Agency Booking Analysis API - evolution
excerpt: Timeserie of the number of booked passengers
categories: api-travel_agency-booking_analysis
---

Timeserie of the number of booked passengers for the agency, the competition and the whole market.
The step is one month for a selected period of a year and a day otherwise. The corresponding dimension names are respectively `booking_month` and `booking_date` (or `departure_month` and `departure_date` if a departure period is selected)

This API shares the same parameters with the different [booking-analysis APIs](/api-travel_agency-booking_analysis/2013/12/06/booking-analysis.html), with the restriction that `booking_period` and `departure_period` can take only one value.

The output is given in a JSON-stat dataset `booking_evolution`, with number of bookings for the following dimensions :
* `agency_type`
* `booking_date`, `booking_month`, `departure_date` or `departure_month` the steps of the timeseries

Example:

    $ curl -v ".../booking_agency_evolutions?booking_period=2012-02" \
      -H 'Accept: application/json' \
      -H 'Authorization: Token 2TqLvAPc1HZMnUQVybko'

    {"booking_evolution": {
        "value": [61713, 119220, 2668604, ... ],
        "status": [],
        "dimension": {
          "id": ["booking", "agency_type", "booking_date"],
          "size": [1, 3, 29],
          "role": {"metric": ["booking"], "time": ["booking_date"]},
          "booking": {
            label: "booking",
            category: {
              label: { ond_booking: "ond_booking" },
              unit:{ ond_booking: {type: "count"} }
            }
          },
          "agency_type": {
            "category": {
              "index": {
                "travel_agency": 0,
                "competition": 1,
                "market": 2
              },
              "label": {
                "travel_agency": "travel agency",
                "competition": "competition",
                "market": "market"
              }
            }
          },
          "booking_date": {
            "category": {
              "index": {
                "2012-02-01": 0,
                "2012-02-02": 1,
                ...
                "2012-02-29": 28
              }
            }
          }
        }
      }
    }