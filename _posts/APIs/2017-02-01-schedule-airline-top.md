---
layout: post
title: Schedule Analysis API - Airline_Top
excerpt: Top flight segments by capacity
categories: api-airline-schedule_analysis
---

Top flight segments by capacity

The API understands the following parameters:
* `airline`: string IATA/ICAO airline code
* `arrival_airport`: integer IATA airport code of arrival
* `arrival_city`: integer IATA city code of arrival
* `arrival_country`: integer IATA country code of arrival
* `arrival_region`: integer UNWTO region code of arrival
* `arrival_subregion`: integer UNWTO subregion code of arrival
* `departure_airport`: integer IATA airport code of departure
* `departure_city`: integer IATA city code of departure
* `departure_country`: integer IATA country code of departure
* `departure_region`: integer UNWTO region code of departure
* `departure_subregion`: integer UNWTO subregion code of departure
* `directional.`: integer Either 'O' (non-directional) or '1' (directional)
* `end`: integer last date (YYYYMMDD) of requested period
* `level`: string aggregation level. one of 'city', 'airport', 'country'
* `limit`: integer limits the number of results, defaults to 40
* `start`: integer first date (YYYYMMDD) of requested period
* `week`: integer (YYYY-Www) of requested period (alternative to start/end)

Example:

    api/airline_top?airline=LH&start=20141124&end=20141130&limit=2

    {
    "airline_top": [
        {
            "competitors": [
                {
                    "airline": "LH", 
                    "seats": 19460
                }
            ], 
            "destination": "HAM", 
            "origin": "FRA", 
            "seats": 19460
        }, 
        {
            "competitors": [
                {
                    "airline": "AB", 
                    "seats": 7984
                }, 
                {
                    "airline": "LH", 
                    "seats": 19460
                }
            ], 
            "destination": "TXL", 
            "origin": "FRA", 
            "seats": 19460
        }
    ]
}
