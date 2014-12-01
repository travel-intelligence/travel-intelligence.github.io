---
layout: post
title: Point of Reference search API
excerpt: Search tool for points of reference (por), ie. Airports, Cities and Countries
categories: api-reference_data
---

Retrieves a set of locations from a string input according to its name or IATA code.
This API implements relation `q_por_search_hits`.

The API takes the following parameters:
* `q`: string (optional). Input string for the search. Prefixing its value by `code:` or `name:` will restrict search respectivelly to IATA code or name.
* `limit`: integer (optional). Maximum number of results. If `q` is given, the number of results is limited to 10, otherwise all the values are returned.
* `types`: comma separated subset of (`airport`, `city` and `country`) (optional). Restriction on the types of results returned.  If no value if given, returns results of all types.

The output is a [JSON-api](http://jsonapi.org/format/) object with the following structure :

    {
      "por_search_hits": [<hit entry>],
      "linked": {
        "airports": [<airport entry>],
        "cities": [<city entry>],
        "countries": [<country entry>]
       }
    }

Where `<hit entry>` represents a search result :

    {
      "id": <integer>,
      "score": <float>,
      "links": {
        <por type>: <IATA code>
       }
    }

`<por type>` being `"airport"`, `"city"` or `"country"` according to the type of the result.

The entries inside `linked` describe the results of the search or the related locations (eg. city and country and airport is located in).
An `<airport entry>` has the following format:

    {
      "id": <IATA code>,
      "name": <string>,
      "links": {
        "city": <IATA code>,
        "country": <IATA code>
       }
    }

A `<city entry>` is similar without the `city` entry in `links`, `<country entry>` has only `id` and `name` fields.


Example:

    $ curl -v ".../por_searches?q=name:orl&types=airport&limit=2" \
      -H 'Accept: application/json' \
      -H 'Authorization: Token 2TqLvAPc1HZMnUQVybko'

    {
        "por_search_hits": [
            {
                "id": 0,
                "score": 0.272466623894,
                "links": {
                    "airport": "ORY"
                }
            },
            {
                "id": 1,
                "score": 0.160637272582,
                "links": {
                    "airport": "MCO"
                }
            }
        ],
        "linked": {
            "airports": [
                {
                    "id": "ORY",
                    "name": "Paris–Orly Airport",
                    "links": {
                        "city": "PAR",
                        "country": "FR"
                    }
                },
                {
                    "id": "MCO",
                    "name": "Orlando International Airport",
                    "links": {
                        "city": "ORL",
                        "country": "US"
                    }
                }
            ],
            "cities": [
                {
                    "id": "PAR",
                    "name": "Paris",
                    "links": {
                        "country": "FR"
                    }
                },
                {
                    "id": "ORL",
                    "name": "Orlando",
                    "links": {
                        "country": "US"
                    }
                }
            ],
            "countries": [
                {
                    "id": "FR",
                    "name": "France"
                },
                {
                    "id": "US",
                    "name": "United States"
                }
            ]
        }
    }

