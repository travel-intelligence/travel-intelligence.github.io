---
layout: post
title: Search hit evolutions API
excerpt: Querying time series of search hits by look and travel dates
---

The URL of the time series of search hits by look and travel dates is given
by the `q_search_evolution` relation type in the inventory of `analyses`
given by the API entry point.

The `q_search_evolution` relation type expects the following query parameters:
* `market`: 2-letter IATA country code of the point of sale
* `origin`: 3-letter IATA code of the departure city (**optional**)
* `destination`: 3-letter IATA code of the arrival city (**optional**)

Two datasets are represented by this resource:
* `look_date`: time series of number of hits by look date.
* `travel_date`: time series of number of hits by travel date.
* `look_weekday`: distribution of hits by day of week of look date.
* `travel_weekday`: distribution of hits by day of week of travel date.

Example:

    $ curl -v ".../search_hit_evolutions?market=FR&origin=NCE" \
      -H 'Accept: application/json' \
      -H 'Authorization: Token 2TqLvAPc1HZMnUQVybko'

    {
      "search_hit_evolutions": {
        "look_date": {
          "value": [76119, 90779, 105690, 105257, 112045, ... ],
          "dimension": {
            "id": ["hit", "origin", "date"],
            "size": [1, 1, 730],
            "role": {"time": ["date"], "metric": ["hit"], "geo": ["origin"]},
            "hit": {"category": {"unit": {"hit": {"type": "count"}}}},
            "date": {
              "category": {
                "index": {
                  "2011-10-01": 0,
                  "2011-10-02": 1,
                  "2011-10-03": 2,
                  "2011-10-04": 3,
                  "2011-10-05": 4,
                  ...
                }
              }
            },
            "origin": {
              "category": {
                "index": {"NCE": 0},
                "label": {"NCE": "Nice"},
                "coordinates": {"NCE": [7.26608, 43.70313]}
              },
              "links": {
                "dim": "https://staging.travel-intelligence.com/api/v1/dimensions/city"
              }
            }
          }
        },
        "travel_date": {
          "value": [526, 1478, 3046, 4812, 7095, ... ],
          "dimension": {
            "id": ["hit", "origin", "date"],
            "size": [1, 1, 730],
            "role": {"time": ["date"], "metric": ["hit"], "geo": ["origin"]},
            "hit": {"category": {"unit": {"hit": {"type": "count"}}}},
            "date": {
              "category": {
                "index": {
                  "2011-10-01": 0,
                  "2011-10-02": 1,
                  "2011-10-03": 2,
                  "2011-10-04": 3,
                  "2011-10-05": 4,
                  ...
                }
              }
            },
            "origin": {
              "category": {
                "index": {"NCE": 0},
                "label": {"NCE": "Nice"},
                "coordinates": {"NCE": [7.26608, 43.70313]}
              },
              "links": {
                "dim": "https://staging.travel-intelligence.com/api/v1/dimensions/city"
              }
            }
          }
        },
        "look_weekday": {
          "value": [
            14163657,
            14790299,
            14265870,
            13906838,
            13437797,
            12708514,
            11690989,
            105,
            105,
            104,
            104,
            104,
            104,
            104
          ],
          "dimension": {
            "id": ["concept", "origin", "weekday"],
            "size": [2, 1, 7],
            "role": {"metric": ["concept"], "geo": ["origin"]},
            "concept": {
              "category": {
                "index": {
                  "hit": 0,
                  "day": 1
                },
                "unit": {
                  "hit": { "type": "count", "base": "hit" },
                  "day": { "type": "count", "base": "day" }
                }
              }
            },
            "weekday": {
              "category": {
                "index": {
                  "Sun": 0,
                  "Mon": 1,
                  "Tue": 2,
                  "Wed": 3,
                  "Thu": 4,
                  "Fri": 5,
                  "Sat": 6
                }
              }
            },
            "origin": {
              "category": {
                "index": {"NCE": 0},
                "label": {"NCE": "Nice"},
                "coordinates": {"NCE": [7.26608, 43.70313]}
              },
              "links": {
                "dim": "https://staging.travel-intelligence.com/api/v1/dimensions/city"
              }
            }
          }
        },
        "travel_weekday": {
          "value": [
            11348390,
            13166826,
            10094463,
            11079195,
            13228679,
            18722993,
            17323418,
            105,
            105,
            104,
            104,
            104,
            104,
            104
          ],
          "dimension": {
            "id": ["concept", "origin", "weekday"],
            "size": [2, 1, 7],
            "role": {"metric": ["concept"], "geo": ["origin"]},
            "concept": {
              "category": {
                "index": {
                  "hit": 0,
                  "day": 1
                },
                "unit": {
                  "hit": { "type": "count", "base": "hit" },
                  "day": { "type": "count", "base": "day" }
                }
              }
            },
            "weekday": {
              "category": {
                "index": {
                  "Sun": 0,
                  "Mon": 1,
                  "Tue": 2,
                  "Wed": 3,
                  "Thu": 4,
                  "Fri": 5,
                  "Sat": 6
                }
              }
            },
            "origin": {
              "category": {
                "index": {"NCE": 0},
                "label": {"NCE": "Nice"},
                "coordinates": {"NCE": [7.26608, 43.70313]}
              },
              "links": {
                "dim": "https://staging.travel-intelligence.com/api/v1/dimensions/city"
              }
            }
          }
        }
      }
    }
