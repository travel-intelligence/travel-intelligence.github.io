---
layout: post
title: Airport Reference API
excerpt: Retrieve Airport Reference Data by IATA code.
categories: api-reference_data
---
Retrieve airport information based on the IATA code. All airports are listed if no code is specified. 

Query options:
* The airport code serves as ID for the REST objects (e.g. airports/`JFK`). 
* Multiple codes can be loded through a `codes` parameter (e.g. airports?codes=JFK,EWR,LGA)
* All airports are listed if neither ID and nor the `codes` parameter is specified.


Example (unique airport by id/code):

    $ curl -v ".../airports/JFK" \
      -H 'Accept: application/json' \
      -H 'Authorization: Token 2TqLvAPc1HZMnUQVybko'

    {
        "airport": {
            "id": "JFK",
            "code": "JFK",
            "name": "John F Kennedy International Airport",
            "latitude": 40.639751,
            "longitude": -73.778925,
            "city": {
                "id": "NYC",
                "code": "NYC",
                "name": "New York City",
                "latitude": 40.71427,
                "longitude": -74.00597,
                "country": {
                    "id": "US",
                    "code": "US",
                    "name": "United Stated USA",
                    "region": "23"
                }
            },
            "country": {
                "id": "US",
                "code": "US",
                "name": "United Stated USA",
                "region": "23"
            }
        }
    }

Example (two airports by id/code):

    $ curl -v ".../airports?codes=JFK,LGA" \
      -H 'Accept: application/json' \
      -H 'Authorization: Token 2TqLvAPc1HZMnUQVybko'
    {
        "airports": [
            {
                "id": "JFK",
                "code": "JFK",
                "name": "John F Kennedy International Airport",
                "latitude": 40.639751,
                "longitude": -73.778925,
                "city": {
                    "id": "NYC",
                    "code": "NYC",
                    "name": "New York City",
                    "latitude": 40.71427,
                    "longitude": -74.00597,
                    "country": {
                        "id": "US",
                        "code": "US",
                        "name": "United Stated USA",
                        "region": "23"
                    }
                },
                "country": {
                    "id": "US",
                    "code": "US",
                    "name": "United Stated USA",
                    "region": "23"
                }
            },
            {
                "id": "LGA",
                "code": "LGA",
                "name": "La Guardia Airport",
                "latitude": 40.77607,
                "longitude": -73.87269,
                "city": {
                    "id": "NYC",
                    "code": "NYC",
                    "name": "New York City",
                    "latitude": 40.71427,
                    "longitude": -74.00597,
                    "country": {
                        "id": "US",
                        "code": "US",
                        "name": "United Stated USA",
                        "region": "23"
                    }
                },
                "country": {
                    "id": "US",
                    "code": "US",
                    "name": "United Stated USA",
                    "region": "23"
                }
            }
        ]
    }
