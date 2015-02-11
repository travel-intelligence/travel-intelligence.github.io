---
layout: post
title: Country Reference API
excerpt: Retrieve Country Reference Data by IATA code.
categories: api-reference_data
---
Retrieve country information based on the IATA code. All countries are listed if no code is specified. 

Query options:
* The country code serves as ID for the REST objects (e.g. countries/`CN`). 
* All countries are listed if neither ID and nor the `codes` parameter is specified.


Example (unique country by id/code):

    $ curl -v ".../countries/CN" \
      -H 'Accept: application/json' \
      -H 'Authorization: Token 2TqLvAPc1HZMnUQVybko'

    {
        "country": {
            "id": "CN",
            "code": "CN",
            "name": "China",
            "region": "32"
        }
    }
