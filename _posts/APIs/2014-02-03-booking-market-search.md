---
layout: post
title: Booking Market search API
excerpt: Search tool for booking markets.
categories: api-travel_agency-booking_analysis
---

Retrieves a list of booking markets from a string input according to their name or market code.
This API implements relation `q_booking_market_search_hits`.

The API takes the following parameters:
* `q`: string (optional). Input string for the search. Prefixing its value by `code:` or `name:` will restrict search respectively to IATA_code or name.
* `limit`: integer (optional). Maximum number of results. If `q` is given, the number of results is limited to 10, otherwise all the values are returned.

The output is a [JSON-api](http://jsonapi.org/format/) object with the following structure :

    {
      "booking_market_search_hits": [<hit entry>],
      "linked": {
        "booking_markets": [<booking market entry>],
        "countries": [<country entry>]
       }
    }

Where `<hit entry>` represents a search result :

    {
      "id": <integer>,
      "score": <float>,
      "links": {
        "booking_market": <market code>
       }
    }

The entries inside `linked` describe the results of the search and the location related.
A `<booking market entry>` has the following format:

    {
      "id": <market code>,
      "name": <string>,
      "links": {
        "country": <country IATA_code>
      }
    }


`<country entry>` has the same format as in [por search API](/2014/01/28/por-search.html).

Example:

    $ curl -v ".../booking_market_searches?q=name:france&limit=2" \
      -H 'Accept: application/json' \
      -H 'Authorization: Token 2TqLvAPc1HZMnUQVybko'

    {
        "booking_market_search_hits": [
            {
                "id": 0,
                "score": 1,
                "links": {
                    "booking_market": "FR"
                }
            }
        ],
        "linked": {
            "booking_markets": [
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
