---
layout: post
title: Travel Agency Booking Analysis API - top countries
excerpt:  Top point of sale countries according to the number of booked passengers
categories: api-travel_agency-booking_analysis
---

Top 20 point of sale countries according to the number of booked passengers by the agency type given in `sort_by` (`travel agency` by default) on the last period given in `booking_period` or `departure_period`.

This API shares the same parameters with the different [booking-analysis APIs](/api-travel_agency-booking_analysis/2013/12/06/booking-analysis.html).

The output is given in a JSON-stat dataset `top_pos_countries`, with number of bookings for the following dimensions :
* `pos_country`
* `agency_type`
* `booking_period` or `departure_period` (same order as given in the corresponding parameter)

Example:

    $ curl -v ".../booking_agency_countries?booking_period=2012-02,2012-03" \
      -H 'Accept: application/json' \
      -H 'Authorization: Token 2TqLvAPc1HZMnUQVybko'

    {"top_pos_countries": {
        "value": [624663, 240771, 174381, ... ],
        "dimension": {
          "id": ["booking", "pos_country", "agency_type", "booking_period"],
          "size": [1, 20, 3, 2],
          "role": {"metric": ["booking"],"geo": ["pos_country"], "time": ["booking_period"]},
          "booking": {
            label: "booking",
            category: {
              label: { ond_booking: "ond_booking" },
              unit:{ ond_booking: {type: "count"} }
            }
          },
          "pos_country": {
            "category": {
              "index": {
                "FR":0,
                "DE":1,
                "ES":2,
                ...
              },
              "label": {
                "FR": "France",
                "DE": "Germany",
                "ES": "Spain",
                ...
              },
              "coordinates": {
                "FR": [48.8567, 2.35083],
                "DE": [52.516666, 13.383333],
                "ES": [40.433334, -3.7],
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