---
layout: post
title: Travel Agency Booking Analysis API - total per agency
excerpt: Total number of booked passengers for the agency, the competition and the whole market
---

Total number of booked passengers for the agency, the competition and the whole market during to a booking or a departure period of time.

This API shares the same parameters with the different [booking-analysis APIs](/2013/12/06/booking-analysis.html#parameters).

The output is given in a JSON-stat dataset `total_per_agency_type`, with number of bookings for the following dimensions :
* `agency_type`
* `booking_period` or `departure_period`

Example:

    $ curl -v ".../travel_agency_bookings_total?booking_period=2012-02" \
      -H 'Accept: application/json' \
      -H 'Authorization: Token 2TqLvAPc1HZMnUQVybko'

    {"travel_agency_bookings_total": {
        "total_per_agency_type": {
          "value": [2610 , 6105, 12500],
          "dimension": {
            "id": ["booking", "agency_type", 'booking_period'],
            "size": [1, 3, 1],
            "role": {"metric": ["booking"], "time": ["booking_period"]},
            "booking": {"category": {"unit": {"ond_booking": {"type": "count"}}}},
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
    }
