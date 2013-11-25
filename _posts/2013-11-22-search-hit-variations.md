---
layout: post
title: Search hit variations API
excerpt: Querying top-N variations of search hits between two months
---

The URL of the top-N relative variations of search hits between two months is
given by the `q_search_variation` relation type in the inventory of `analyses`
represented by the API entry point.

The `q_search_variation` relation type expects the following query parameters:
* `market`: 2-letter IATA country code of the point of sale
* `month_a`: month of interest for the travel date, formatted as YYYY-MM
* `month_b`: month to be compared with, as travel date formatted as YYYY-MM

Four datasets are represented by this resource:
* `top_up_destinations`: top 50 destination cities with greatest relative increase.
* `top_down_destinations`: top 50 destination cities with greatest relative decrease.
* `top_up_onds`: top 50 *origin and destination* pairs of cities with greatest relative increase.
* `top_down_onds`: top 50 *origin and destination* pairs of cities with greatest relative decrease.

Example:

    $ curl -v ".../search_hit_variations?market=FR&month_a=2012-02&month_b=2012-01" \
      -H 'Accept: application/json' \
      -H 'Authorization: Token 2TqLvAPc1HZMnUQVybko'

    {
      "search_hit_variations": {
        "top_up_destinations": {
          "value": [380744, 271398, 775540, 615459, 33502, 27822, ... ],
          "dimension": {
            "id": ["hit", "destination", "month"],
            "size": [1, 50, 2],
            "role": {"geo": ["destination"], "time": ["month"], "metric": ["hit"]},
            "hit": {"category": {"unit": {"hit": {"type": "count"}}}},
            "destination": {
              "category": {
                "index": {
                  "YTO": 0,
                  "ASU": 1,
                  "VAR": 2,
                  ...
                },
                "label": {
                  "YTO": "Toronto",
                  "ASU": "Asuncion / Aeropuerto",
                  "VAR": "Varna",
                  ...
                },
                "coordinates": {
                  "YTO": [-79.4163, 43.70011],
                  "ASU": [-57.519133, -25.23985],
                  "VAR": [27.91667, 43.21667],
                  ...
                }
              },
              "links": {
                "dim": "https://staging.travel-intelligence.com/api/v1/dimensions/city"
              }
            },
            "month": {
              "category": {
                "index": {
                  "2012-02": 0,
                  "2012-01": 1
                }
              }
            }
          }
        },
        "top_down_destinations": {
          "value": [17573, 34207, 15084, 28459, 33874, 60947, ... ],
          "dimension": {
            "id": ["hit", "destination", "month"],
            "size": [1, 50, 2],
            "role": {"geo": ["destination"], "time": ["month"], "metric": ["hit"]},
            "hit": {"category": {"unit": {"hit": {"type": "count"}}}},
            "destination": {
              "category": {
                "index": {
                  "DAC": 0,
                  "BAH": 1,
                  "GOI": 2,
                  ...
                },
                "label": {
                  "DAC": "Dhaka",
                  "BAH": "Bahrain International Airport",
                  "GOI": "Goa",
                  ...
                },
                "coordinates": {
                  "DAC": [90.40744, 23.7104],
                  "BAH": [50.63361, 26.270834],
                  "GOI": [73.91009, 15.50195],
                  ...
                }
              },
              "links": {
                "dim": "https://staging.travel-intelligence.com/api/v1/dimensions/city"
              }
            },
            "month": {
              "category": {
                "index": {
                  "2012-02": 0,
                  "2012-01": 1
                }
              }
            }
          }
        },
        "top_up_onds": {
          "value": [48413, 16816, 54047, 21267, 56295, 23575, ... ],
          "dimension": {
            "id": ["hit", "origin_destination", "month"],
            "size": [1, 50, 2],
            "role": {"time": ["month"], "metric": ["hit"]},
            "hit": {"category": {"unit": {"hit": {"type": "count"}}}},
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
            "month": {
              "category": {
                "index": {
                  "2012-02": 0,
                  "2012-01": 1
                }
              }
            }
          }
        },
        "top_down_onds": {
          "value": [23844, 55760, 34150, 71307, 43896, 86967, ... ],
          "dimension": {
            "id": ["hit", "origin_destination", "month"],
            "size": [1, 50, 2],
            "role": {"time": ["month"], "metric": ["hit"]},
            "hit": {"category": {"unit": {"hit": {"type": "count"}}}},
            "origin_destination": {
              "category": {
                "index": {
                  "TLS-DKR": 0,
                  "MRS-DKR": 1,
                  "LYS-DKR": 2,
                  ...
                },
                "label": {
                  "TLS-DKR": "Toulouse to Dakar",
                  "MRS-DKR": "Marseille to Dakar",
                  "LYS-DKR": "Lyon to Dakar",
                  ...
                }
              }
            },
            "month": {
              "category": {
                "index": {
                  "2012-02": 0,
                  "2012-01": 1
                }
              }
            }
          }
        }
      }
    }
