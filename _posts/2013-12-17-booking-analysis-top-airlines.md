---
layout: post
title: Travel Agency Booking Analysis API - top airlines
excerpt: Top marketing carriers according to the number of booked passengers
---

Top 50 marketing carriers according to the number of booked passengers by the agency type given in `sort_by` (`travel agency` by default).

This API shares the same parameters with the different [booking-analysis APIs](/2013/12/06/booking-analysis.html#parameters).

The output is given in a JSON-stat dataset `top_airlines`, with number of bookings for the following dimensions :
* `marketing_carrier`
* `agency_type`
* `booking_period` or `departure_period`

Example:

    $ curl -v ".../booking_agency_airlines?booking_period=2012-02" \
      -H 'Accept: application/json' \
      -H 'Authorization: Token 2TqLvAPc1HZMnUQVybko'

    {"top_airlines": {
        "value": [181354, 245590, 2243773, ... ],
        "dimension": {
          "id": ["booking", "marketing_carrier", "agency_type", "booking_period"],
          "size": [1, 50, 3, 1],
          "role": {"metric": ["booking"], "time": ["booking_period"]},
          "booking": {"category": {"unit": {"ond_booking": {"type": "count"}}}},
          "marketing_carrier": {
            "category": {
              "index": {
                "LH":0,
                "AF":1,
                "IB":2,
                ...
              },
              "label": {
                "LH": "Lufthansa",
                "AF": "Air France",
                "IB": "Iberia",
                ...
              }
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
          "booking_period": {
            "category": {
              "index": {
                "2012-02": 0
              }
            }
          }
        }
      }
    }
