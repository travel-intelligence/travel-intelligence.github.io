---
layout: post
title: Travel Agency Booking Analysis API - top countries
excerpt:  Top point of sale countries according to the number of booked passengers
---

Top 20 point of sale countries according to the number of booked passengers by the agency type given in `sort_by` (`travel agency` by default).

This API shares the same parameters with the different [booking-analysis APIs](/2013/12/06/booking-analysis.html#parameters).

The output is given in a JSON-stat dataset `total_per_agency_type`, with number of bookings for the following dimensions :
* `pos_country`
* `agency_type`
* `booking_period` or `departure_period`

Example:

    $ curl -v ".../travel_agency_bookings_top_countries?booking_period=2012-02" \
      -H 'Accept: application/json' \
      -H 'Authorization: Token 2TqLvAPc1HZMnUQVybko'

    {"travel_agency_bookings_top_countries": {
        "top_pos_countries": {
          "value": [307, 184, 173, ... ],
          "dimension": {
            "id": ["booking", "pos_country", "agency_type", "booking_period"],
            "size": [1, 20, 3, 1],
            "role": {"metric": ["booking"],"geo": ["pos_country"], "time": ["booking_period"]},
            "booking": {"category": {"unit": {"ond_booking": {"type": "count"}}}},
            "pos_country": {
              "category": {
                "index": {
                  "FR": 0,
                  "GB": 1,
                  "AU": 2,
                  ...
                },
                "label": {
                  "FR": "France",
                  "GB": "United Kingdom",
                  "AU": "Australia",
                  ...
                },
                "coordinates": {
                  "FR": [48.8567, 2.35083],
                  "GB": [51.5, -0.116667],
                  "AU": [-35.308, 149.133],
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
