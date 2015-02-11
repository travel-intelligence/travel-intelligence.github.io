---
layout: post
title: Aircraft Reference API
excerpt: Retrieve Aircraft Reference Data by IATA code.
categories: api-reference_data
---
Retrieve aircraft information based on the IATA code. All aircrafts are listed if no code is specified. 

Query options:
* The aircraft code serves as ID for the REST objects (e.g. aircraft/`777`). 
* Multiple codes can be loded through a `codes` parameter (e.g. aircraft?codes=777,320)
* All aircrafts are listed if neither ID and nor the `codes` parameter is specified.


Example (unique aircraft by id/code):

    $ curl -v ".../aircraft/380" \
      -H 'Accept: application/json' \
      -H 'Authorization: Token 2TqLvAPc1HZMnUQVybko'

    {
        "aircraft": {
            "id": "380",
            "code": "380",
            "manufacturer": "Airbus",
            "name": "A380"
        }
    }

Example (two aircrafts by id/code):

    $ curl -v ".../aircraft?codes=777,320" \
      -H 'Accept: application/json' \
      -H 'Authorization: Token 2TqLvAPc1HZMnUQVybko'

    {
        "aircraft": [
            {
                "id": "777",
                "code": "777",
                "manufacturer": "Boeing",
                "name": "777"
            },
            {
                "id": "320",
                "code": "320",
                "manufacturer": "Airbus",
                "name": "A320-100/200"
            }
        ]
    }
