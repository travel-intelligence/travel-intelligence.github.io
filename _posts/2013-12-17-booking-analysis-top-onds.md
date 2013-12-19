---
layout: post
title: Travel Agency Booking Analysis API - top O&Ds
excerpt: Top origin-destination pairs according to the number of booked passengers
---

Top 50 origin-destination pairs according to the number of booked passengers by the agency type given in `sort_by` (`travel agency` by default).

This API shares the same parameters with the different [booking-analysis APIs](/2013/12/06/booking-analysis.html#parameters).

The output is given in a JSON-stat dataset `total_per_agency_type`, with number of bookings for the following dimensions :
* `origin-destination` pair
* `agency_type`
* `booking_period` or `departure_period`

Example:

    $ curl -v ".../travel_agency_bookings_top_onds?booking_period=2012-02" \
      -H 'Accept: application/json' \
      -H 'Authorization: Token 2TqLvAPc1HZMnUQVybko'

    {"travel_agency_bookings_top_onds": {
        "top_onds": {
          "value": [413, 116, 547, 267, 595, 275, ... ],
          "dimension": {
            "id": ["booking", "origin_destination", "agency_type", "booking_period"],
            "size": [1, 50, 3, 1],
            "role": {"metric": ["booking"], "time": ["booking_period"]},
            "booking": {"category": {"unit": {"ond_booking": {"type": "count"}}}},
            "origin_destination": {
              "category": {
                "index": {
                  "NCE-SYD": 0,
                  "MRS-MEX": 1,
                  "IST-SIN": 2,
                  ...
                },
                "label": {
                  "NCE-SYD": "Nice to Sydney",
                  "MRS-MEX": "Marseille to Mexico City",
                  "IST-SIN": "İstanbul to Singapore",
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
    }
