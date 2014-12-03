---
layout: post
title: Travel Agency Booking Analysis API - total per agency
excerpt: Total number of booked passengers for the agency, the competition and the whole market
categories: api-travel_agency-booking_analysis
---

Total number of booked passengers for the agency, the competition and the whole market during to a booking or a departure period of time.

This API shares the same parameters with the different [booking-analysis APIs](/api-travel_agency-booking_analysis/2013/12/06/booking-analysis.html).

The output is given in a JSON-stat dataset `total_per_agency_type`, with number of bookings for the following dimensions :
* `agency_type`
* `booking_period` or `departure_period` (same order as given in the corresponding parameter)

Example:

    $ curl -v ".../booking_agency_totals?booking_period=2012-02,2013-02" \
      -H 'Accept: application/json' \
      -H 'Authorization: Token 2TqLvAPc1HZMnUQVybko'

    {"total_per_agency_type": {
        "value": [1457007, 1491602, 2768338, 2990514, 60792828, 59408411],
        "status": [],
        "dimension": {
          "id": ["booking", "agency_type", "booking_period"],
          "size": [1, 3, 2],
          "role": {"metric": ["booking"], "time": ["booking_period"]},
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
          "booking_period": {
            "category": {
              "index": {
                "2012-02": 0,
                "2013-02": 1
              }
            }
          }
        }
      }
    }