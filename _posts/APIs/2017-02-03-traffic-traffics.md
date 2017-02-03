---
layout: post
title: Traffic Analysis API - Traffic Evolution
excerpt: Traffic Analytics - Comparisons and Trends
categories: api-airline-traffic_analysis
---

Traffic Analytics - Comparisons and Trends

The API understands the following parameters:
* `destination`: string City or airport 3-letter IATA code (mandatory)
* `level`: string 'city' or 'airp' [optional, default='city']
* `origin`: string City or airport 3-letter IATA code (mandatory)

Example:

    api/traffics?origin=MAD&destination=FRA&level=airp

    {
    "traffics": [
        {
            "airline_traffics": [
                {
                    "carrier": "FR", 
                    "data": [
                        0, 
                        0
                    ]
                }, 
                {
                    "carrier": "JL", 
                    "data": [
                        0, 
                        0
                    ]
                }
            ], 
            "destination": "FRA", 
            "id": "MAD_FRA_airp", 
            "level": "airp", 
            "origin": "MAD", 
            "traffics": [
                27247, 
                27028
            ]
        }
    ]
}

Where:
* airline_traffics contains a timeserie of capacity (array ''data'') per airline on the specified leg.
* traffics contains a timeserie of the global capacity on the leg (total over all airlines).
