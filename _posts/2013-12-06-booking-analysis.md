---
layout: post
title: Travel Agency Booking Analysis API
excerpt: Number of booked passengers during to a booking or a departure period of time
---

Number of booked passengers, according either on the date the booking was performed or on the departure date.
One of the two following query parameters are expected:
* `booking_period`: period of interest for bookings, can be either a year (yyyy), a month (yyyy-mm) or a week (yyyy-Www, eg. 2012-W42)
* `departure_period`: period of interest for departures, can be either a year (yyyy), a month (yyyy-mm), a week (yyyy-Www, eg. 2012-W42) or a day (yyyy-mm-dd)

The following optional parameters can be specified to filter the search:
* `origin-city`, `origin-port`, `origin-country`: 3-letter IATA city (resp. airport, country) code departure of the O&D
* `destination-city`, `destination-port`, `destination-country` : 3-letter IATA city (resp. airport, country) code arrival of the O&D
* `pos_oid`: point of sale office id
* `pos_country`: point of sale country
* `marketing_carrier`: 2-letter IATA code
* `cabin_class`: 1-letter code
* `sort_by`: agency types taken as sort criterion for `top_onds` and `top_airlines`. It is one of the agency types (ie. either `travel_agency`, `competition` or `market`), default value is `travel_agency`.

Five datasets are represented by this resource:
* `total_per_agency_type`: total number of booked passengers for the agency, the competition and the whole market
* `evolution`: timeserie of the number of booked passengers for the agency. The step is one month for a selected period of a year and a day otherwise. The corresponding dimension names are respectively `month` and `date`.
* `top_onds`: top 50 origin-destination pairs according to the number of booked passengers for the agency type given in `sort_by`
* `top_airlines`: top 50 marketing carriers according to the number of booked passengers for the agency type given in `sort_by`
* `top_pos_countries`: top 20 point of sale countries according to the number of booked passengers for the `market`

Example:

    $ curl -v ".../bookings_ta?booking_period=2012-02  " \
      -H 'Accept: application/json' \
      -H 'Authorization: Token 2TqLvAPc1HZMnUQVybko'

    {"bookings_ta": {
        "total_per_agency_type": {
          "value": [2610 , 6105, 12500],
          "dimension": {
            "id": ["bookings", "agency_type"],
            "size": [1, 3],
            "role": {"metric": ["bookings"]},
            "bookings": {"category": {"unit": {"booked_passengers": {"type": "count"}}}},
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
            }
          }
        },
        "evolution": {
          "value": [173, 307, 184, 259, 374, 647, ... ],
          "dimension": {
            "id": ["bookings", "agency_type", "date"],
            "size": [1, 3, 29],
            "role": {"time": ["date"], "metric": ["bookings"]},
            "bookings": {"category": {"unit": {"booked_passengers": {"type": "count"}}}},
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
            "date": {
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
        },
        "top_onds": {
          "value": [413, 116, 547, 267, 595, 275, ... ],
          "dimension": {
            "id": ["bookings", "origin_destination", "agency_type"],
            "size": [1, 50, 3],
            "role": {"metric": ["bookings"]},
            "bookings": {"category": {"unit": {"booked_passengers": {"type": "count"}}}},
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
            }
          }
        },
        "top_airlines": {
          "value": [413, 116, 547, 267, 595, 275, ... ],
          "dimension": {
            "id": ["bookings", "marketing_carrier", "agency_type"],
            "size": [1, 50, 3],
            "role": {"metric": ["bookings"]},
            "bookings": {"category": {"unit": {"booked_passengers": {"type": "count"}}}},
            "marketing_carrier": {
              "category": {
                "index": {
                  "AF": 0,
                  "BA": 1,
                  "QF": 3,
                  ...
                },
                "label": {
                  "AF": "Air France",
                  "BA": "British Airways",
                  "QF": "Qantas",
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
            }
          }
        },
        "top_pos_countries": {
          "value": [307, 184, 173, ... ],
          "dimension": {
            "id": ["bookings", "pos_country"],
            "size": [1, 20],
            "role": {"geo": ["pos_country"], "metric": ["bookings"]},
            "bookings": {"category": {"unit": {"booked_passengers": {"type": "count"}}}},
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
            }
          }
        }
      }
    }
