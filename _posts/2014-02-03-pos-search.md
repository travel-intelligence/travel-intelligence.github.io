---
layout: post
title: Point of Sales search API
excerpt: Search tool for points of sales (pos) offices.
---

Retrieves a set of Point of Sales from a string input according to its name or office id.
This API implements relation `q_pos_search_hits`.

The API takes the following parameters:
* `q`: string (optional). Input string for the search. Prefixing its value by `code:` or `name:` will restrict search respectivelly to office_id or name.
* `limit`: integer (optional). Maximum number of results. If `q` is given, the number of results is limited to 10, otherwise all the values are returned.

The output is a [JSON-api](http://jsonapi.org/format/) object with the following structure :

    {
      "pos_search_hits": [<hit entry>],
      "linked": {
        "pos": [<pos entry>],
        "cities": [<city entry>],
        "countries": [<country entry>]
       }
    }

Where `<hit entry>` represents a search result :

    {
      "id": <integer>,
      "score": <float>,
      "links": {
        "pos": <office id>
       }
    }

The entries inside `linked` describe the results of the search or the related locations (eg. city and country and airport is located in).
A `<pos entry>` has the following format:

    {
      "id": <Office id>,
      "name": <string>,
      "iata_code": <string>,
      "links": {
        "city": <IATA code>,
        "country": <IATA code>
       }
    }

`<city entry>` and `<country entry>` have the same format as in [por search API](/2014/01/28/por-search.html).


Example:

    $ curl -v ".../pos_searches?q=name:opodo&limit=2" \
      -H 'Accept: application/json' \
      -H 'Authorization: Token 2TqLvAPc1HZMnUQVybko'

    {
        "pos_search_hits": [
            {
                "id": 0,
                "score": 1,
                "links": {
                    "pos": "PARVI38ZZ"
                }
            },
            {
                "id": 1,
                "score": 1,
                "links": {
                    "pos": "BEROP38AW"
                }
            }
        ],
        "linked": {
            "pos": [
                {
                    "id": "PARVI38ZZ",
                    "name": "OPODO LTD",
                    "iata_code": "20246730",
                    "links": {
                        "city": "PAR",
                        "country": "FR"
                    }
                },
                {
                    "id": "BEROP38AW",
                    "name": "OPODO LTD.",
                    "iata_code": "23255514",
                    "links": {
                        "city": "BER",
                        "country": "DE"
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
                    "id": "BER",
                    "name": "Berlin",
                    "links": {
                        "country": "DE"
                    }
                }
            ],
            "countries": [
                {
                    "id": "FR",
                    "name": "France"
                },
                {
                    "id": "DE",
                    "name": "Germany"
                }
            ]
        }
    }
