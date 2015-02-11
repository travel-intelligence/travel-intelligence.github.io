---
layout: post
title: City Reference API
excerpt: Retrieve City Reference Data by IATA code.
categories: api-reference_data
---
Retrieve city information based on the IATA code. All cities are listed if no code is specified. 

Query options:
* The city code serves as ID for the REST objects (e.g. cities/`MOW`). 
* Multiple codes can be loded through a `codes` parameter (e.g. cities?codes=NYC,PAR,TYO)
* All cities are listed if neither ID and nor the `codes` parameter is specified.


Example (unique city by id/code):

    $ curl -v ".../cities/TYO" \
      -H 'Accept: application/json' \
      -H 'Authorization: Token 2TqLvAPc1HZMnUQVybko'

    {
        "city": {
            "id": "TYO",
            "code": "TYO",
            "name": "Tokyo",
            "latitude": 35.6895,
            "longitude": 139.69171,
            "country": {
                "id": "JP",
                "code": "JP",
                "name": "Japan",
                "region": "32"
            }
        }
    }

Example (two cities by id/code):

    $ curl -v ".../cities?codes=PAR,LON" \
      -H 'Accept: application/json' \
      -H 'Authorization: Token 2TqLvAPc1HZMnUQVybko'

    {
        "cities": [
            {
                "id": "PAR",
                "code": "PAR",
                "name": "Paris",
                "latitude": 48.85341,
                "longitude": 2.3488,
                "country": {
                    "id": "FR",
                    "code": "FR",
                    "name": "France",
                    "region": "44"
                }
            },
            {
                "id": "LON",
                "code": "LON",
                "name": "London",
                "latitude": 51.5,
                "longitude": -0.1667,
                "country": {
                    "id": "GB",
                    "code": "GB",
                    "name": "United Kingdom UK",
                    "region": "42"
                }
            }
        ]
    }

