---
layout: post
title: Search hits API
excerpt: Querying search hits by look date 
---

The representation of all datasets follows the
[JSON-stat](http://json-stat.org/) standard.
The only exception is the ability to refer to dimension descriptions through
[JSONAPI](http://jsonapi.org/) `links` instead of `uri` attributes.

One example of such a dataset resource is the number of search hits by look date
(versus hits by departure date), whose URL is given by the `q_search_look`
relation type in the inventory of `analyses` given by the API entry point..

The `q_search_look` relation type expects the following query parameters:
* `origin`: 3-letter IATA code of the departure city
* `destination`: 3-letter IATA code of the arrival city
* `market`: 2-letter IATA country code of the point of sale
* `month`: month of look date formatted as YYYY-MM

Example:

    $ curl -v ".../search_look_hits?origin=NCE&destination=PAR&market=FR&month=2013-01" \
      -H 'Accept: application/json' \
      -H 'Authorization: Token 2TqLvAPc1HZMnUQVybko'

    {
      "search_look_hits": {
        "dataset": {
          "value": [295137],
          "dimension": {
            "id": ["hits", "origin", "destination", "month"],
            "size": [1, 1, 1, 1],
            "role": {
              "geo": ["origin", "destination"],
              "time": ["month"],
              "metric": ["hits"]
            },
            "hits": {
              "category": { "unit": { "hits": { "type": "count" } } }
            },
            "origin": {
              "category": {
                "label": { "NCE": "Nice" },
                "long": { "NCE": 7.26608 },
                "lat": { "NCE": 43.70313 }
              },
              "links": {
                "dim": "https://..."
              }
            },
            "destination": {
              "category": {
                "label": { "PAR": "Paris" },
                "long": { "PAR": 2.3488 },
                "lat": { "PAR": 48.85341 }
              },
              "links": {
                "dim": "https://..."
              }
            },
            "month": { "category": { "index": { "2013-01": 0 } } }
          }
        }
      }
    }
