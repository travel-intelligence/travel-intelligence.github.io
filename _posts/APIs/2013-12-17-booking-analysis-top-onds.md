---
layout: post
title: Travel Agency Booking Analysis API - top O&Ds
excerpt: Top origin-destination pairs according to the number of booked passengers
categories: api-travel_agency-booking_analysis
---

Top 50 origin-destination airport pairs according to the number of booked passengers by the agency type given in `sort_by` (`travel agency` by default) on the last period given in `booking_period` or `departure_period`.

This API shares the same parameters with the different [booking-analysis APIs](/api-travel_agency-booking_analysis/2013/12/06/booking-analysis.html).

The output is given in a JSON-stat dataset `top_onds`, with number of bookings for the following dimensions :
* `origin-destination` pair (IATA airport codes)
* `agency_type`
* `booking_period` or `departure_period` (same order as given in the corresponding parameter)

Example:

    $ curl -v ".../booking_agency_onds?booking_period=2012-02,2012-03" \
      -H 'Accept: application/json' \
      -H 'Authorization: Token 2TqLvAPc1HZMnUQVybko'

    {"top_onds": {
        "value": [5106, 943, 2394, ... ],
        "status": [],
        "dimension": {
          "id": ["booking", "origin_destination", "agency_type", "booking_period"],
          "size": [1, 50, 3, 2],
          "role": {"metric": ["booking"], "time": ["booking_period"]},
          "booking": {
            label: "booking",
            category: {
              label: { ond_booking: "ond_booking" },
              unit:{ ond_booking: {type: "count"} }
            }
          },
          "origin_destination": {
            "category": {
              "index": {
                "BKK-CDG":0,
                "BCN-MAD":1,
                "CDG-BKK":2,
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
                "2012-02": 0,
                "2013-02": 1
              }
            }
          }
        }
      }
    }