---
layout: post
title: Market search API
excerpt: Search tool for markets.
---

Retrieves a list of markets from a string input according to their name or market code.
This API implements relation `q_market_search_hits`.

The API takes the following parameters:
* `q`: string (optional). Input string for the search. Prefixing its value by `code:` or `name:` will restrict search respectively to IATA_code or name.
* `limit`: integer (optional). Maximum number of results. If `q` is given, the number of results is limited to 10, otherwise all the values are returned.

The output is a [JSON-api](http://jsonapi.org/format/) object with the following structure :

    {
      "market_search_hits": [<hit entry>],
      "linked": {
        "markets": [<market entry>],
        "cities": [<city entry>],
        "countries": [<country entry>]
       }
    }

Where `<hit entry>` represents a search result :

    {
      "id": <integer>,
      "score": <float>,
      "links": {
        "market": <market code>
       }
    }

The entries inside `linked` describe the results of the search and the location related.
A market can refer to a country or to a set of cities.
A `<market entry>` has on of the following formats:

    {
      "id": <market code>,
      "name": <string>,
      "links": {
        "country": <country IATA_code>
      }
    }

    {
      "id": <market code>,
      "name": <string>,
      "links": {
        "cities": [<city IATA_code>]
      }
    }

`<city entry>` and `<country entry>` have the same format as in [por search API](/2014/01/28/por-search.html).

Example:

    $ curl -v ".../market_searches?q=name:france&limit=2" \
      -H 'Accept: application/json' \
      -H 'Authorization: Token 2TqLvAPc1HZMnUQVybko'

    {
        "market_search_hits": [
            {
                "id": 0,
                "score": 1,
                "links": {
                    "market": "FR"
                }
            }
        ],
        "linked": {
            "markets": [
                {
                    "id": "FR",
                    "name": "France"
                    "links": {
                      "country": "FR"
                    }
                }
            ],
            "countries": [
                {
                    "id": "FR",
                    "name": "France"
                }
            ]
        }
    }
