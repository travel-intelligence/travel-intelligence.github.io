---
layout: post
title: Airline Reference API
excerpt: Retrieve Airline Reference Data by IATA/ICAO code.
categories: api-reference_data
---
Retrieve airline information based on the IATA or ICAO code. All airlines are listed if no code is specified. 

The API takes the following parameters:

* `code`: string (optional). 2-letter IATA or 3-letter ICAO code. Multiple codes can queried using a `,` as seperator (e.g. `LH,AF`)

Example:

    $ curl -v ".../airlines?code=NH" \
      -H 'Accept: application/json' \
      -H 'Authorization: Token 2TqLvAPc1HZMnUQVybko'

    {
        "airlines": [
            {
                "id": "air-all-nippon-airways",
                "unified_code": "air-all-nippon-airways",
                "icao_code": "ANA",
                "iata_code": "NH",
                "numeric_code": 205,
                "name": "All Nippon Airways",
                "name2": "All Nippon",
                "alliance_code": "Star Alliance",
                "alliance_status": "Member",
                "type_code": ""
            }
        ]
    }
