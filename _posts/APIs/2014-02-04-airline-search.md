---
layout: post
title: Airline search API
excerpt: Search tool for airlines
categories: api-reference_data
---

Retrieves a list of airlines from a string input according to their name or IATA code.
This API implements relation `q_airline_search_hits`.

The API takes the following parameters:
* `q`: string (optional). Input string for the search. Prefixing its value by `code:` or `name:` will restrict search respectively to IATA code or name.
* `limit`: integer (optional). Maximum number of results. If `q` is given, the number of results is limited to 10, otherwise all the values are returned.

The output is a [JSON-api](http://jsonapi.org/format/) object with the following structure :

    {
      "airline_search_hits": [<hit entry>],
      "linked": {
        "airlines": [<airline entry>]
       }
    }

Where `<hit entry>` represents a search result :

    {
      "id": <integer>,
      "score": <float>,
      "links": {
        "airline": <IATA code>
       }
    }

The entries inside `linked` provide a description of the retrieved airlines.
An `<airline entry>` has the following format:

    {
      "id": <IATA code>,
      "name": <string>
    }


Example:

    $ curl -v ".../airline_searches?q=iberia&limit=3" \
      -H 'Accept: application/json' \
      -H 'Authorization: Token 2TqLvAPc1HZMnUQVybko'

    {
        "airline_search_hits": [
            {
                "id": 0,
                "score": 0.5,
                "links": {
                    "airline": "I2"
                }
            },
            {
                "id": 1,
                "score": 0.5,
                "links": {
                    "airline": "IB"
                }
            },
            {
                "id": 2,
                "score": 0.5,
                "links": {
                    "airline": "S7"
                }
            }
        ],
        "linked": {
            "airlines": [
                {
                    "id": "I2",
                    "name": "Iberia Express"
                },
                {
                    "id": "IB",
                    "name": "Iberia"
                },
                {
                    "id": "S7",
                    "name": "Siberia Airlines"
                }
            ]
        }
    }

