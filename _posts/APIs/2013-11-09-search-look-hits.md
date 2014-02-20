---
layout: post
title: Search hits by look date API
excerpt: Querying top-N and distributions of search hits by look date
categories: api-search_analysis
---

The URL of the number of search hits by look date is given by the `q_search_look`
relation type in the inventory of `analyses` given by the API entry point.

The `q_search_look` relation type expects the following query parameters:
* `market`: 2-letter IATA country code of the point of sale
* `month`: month of look date formatted as YYYY-MM
* `origin`: 3-letter IATA code of the departure city (**optional**)
* `destination`: 3-letter IATA code of the arrival city (**optional**)

Different aggregation levels are returned depending on the presence of neither,
either or both of the origin and destination parameters.

Five datasets are represented by this resource:
* `total`: total number of hits.
* `top_onds`: top 50 *origin and destination* pairs of cities.
* `top_destinations`: top 50 destination cities.
* `advance_search`: distribution of look dates in weeks prior to departure.
* `duration`: distribution of stay durations in days.

Example:

    $ curl -v ".../search_look_hits?market=FR&month=2012-01&origin=NCE" \
      -H 'Accept: application/json' \
      -H 'Authorization: Token 2TqLvAPc1HZMnUQVybko'

    {
      "search_look_hits": {
        "total": {
          "value": [4301888],
          "dimension": {
            "id": ["hit", "month", "origin"],
            "size": [1, 1, 1],
            "role": {
              "geo": ["origin"],
              "time": ["month"],
              "metric": ["hit"]
            },
            "hit": { "category": { "unit": { "hit": { "type": "count" }}}},
            "month": { "category": {"index": { "2012-01": 0 }}},
            "origin": {
              "category": {
                "index": { "NCE": 0 },
                "label": { "NCE": "Nice" },
                "coordinates": { "NCE": [7.26608, 43.70313] }
              },
              "links": {
                "dim": "https://demo.travel-intelligence.com/api/v1/dimensions/city"
              }
            }
          }
        },
        "top_onds": {
          "value": [293860, 265520, 258844, 183935, 114853, ... ],
          "dimension": {
            "id": ["hit", "month", "origin_destination"],
            "size": [1, 1, 50],
            "role": {...},
            "hit": {...},
            "month": {...},
            "origin_destination": {
              "category": {
                "index": {
                  "NCE-NYC": 0,
                  "NCE-BKK": 1,
                  "NCE-PAR": 2,
                  "NCE-ASU": 3,
                  "NCE-KUL": 4,
                  ...
                },
                "label": {
                  "NCE-NYC": "Nice to New York City",
                  "NCE-BKK": "Nice to Bangkok",
                  "NCE-PAR": "Nice to Paris",
                  "NCE-ASU": "Nice to Asuncion / Aeropuerto",
                  "NCE-KUL": "Nice to Kuala Lumpur",
                  ...
                },
              }
            }
          }
        },
        "top_destinations": {
          "value": [293860, 265520, 258844, 183935, 114853, ... ],
          "dimension": {
            "id": ["hit", "month", "destination"],
            "size": [1, 1, 50],
            "role": {...},
            "hit": {...},
            "month": {...},
            "destination": {
              "category": {
                "index": {
                  "NYC": 0,
                  "BKK": 1,
                  "PAR": 2,
                  "ASU": 3,
                  "KUL": 4,
                  ...
                },
                "label": {
                  "NYC": "New York City",
                  "BKK": "Bangkok",
                  "PAR": "Paris",
                  "ASU": "Asuncion / Aeropuerto",
                  "KUL": "Kuala Lumpur",
                  ...
                },
                "coordinates": {
                  "NYC": [-73.97, 40.78],
                  "BKK": [100.50144, 13.75398],
                  "PAR": [2.3488, 48.85341],
                  "ASU": [-57.519133, -25.23985],
                  "KUL": [101.68653, 3.1412],
                  ...
                }
              },
              "links": {
                "dim": "https://demo.travel-intelligence.com/api/v1/dimensions/city"
              }
            }
          }
        },
        "advance_search": {
          "value": [409479, 465867, 313760, 264242, 270688, ... ],
          "dimension": {
            "id": ["hit", "month", "week"],
            "size": [1, 1, 52],
            "role": {...},
            "hit": {...},
            "month": {...},
            "week": {
              "category": {
                "index": {
                  "0": 0,
                  "1": 1,
                  "2": 2,
                  "3": 3,
                  "4": 4,
                  ...
                }
              }
            }
          }
        },
        "duration": {
          "value": [60872, 108948, 287783, 259665, 190597, ... ],
          "dimension": {
            "id": ["hit", "month", "day"],
            "size": [1, 1, 360],
            "role": {...},
            "hit": {...},
            "month": {...},
            "day": {
              "category": {
                "index": {
                  "0": 0,
                  "1": 1,
                  "2": 2,
                  "3": 3,
                  "4": 4,
                  ...
                }
              }
            }
          }
        }
      }
    }