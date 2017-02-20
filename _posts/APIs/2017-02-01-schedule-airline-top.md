---
layout: post
title: Schedule Analysis API - Airline_Top
excerpt: Top flight segments by capacity
categories: api-airline-schedule_analysis
---

Top flight segments by capacity

The API understands the following parameters:
<ul>
<li>`airline`: string IATA/ICAO airline code</li>
<li>`arrival_airport`: integer IATA airport code of arrival</li>
<li>`arrival_city`: integer IATA city code of arrival</li>
<li>`arrival_country`: integer IATA country code of arrival</li>
<li>`arrival_region`: integer UNWTO region code of arrival</li>
<li>`arrival_subregion`: integer UNWTO subregion code of arrival</li>
<li>`departure_airport`: integer IATA airport code of departure</li>
<li>`departure_city`: integer IATA city code of departure</li>
<li>`departure_country`: integer IATA country code of departure</li>
<li>`departure_region`: integer UNWTO region code of departure</li>
<li>`departure_subregion`: integer UNWTO subregion code of departure</li>
<li>`directional`: boolean either '0' (non-directional) or '1' (directional)</li>
<li>`end`: integer last date (YYYYMMDD) of requested period</li>
<li>`international`: boolean either '0' (domestic) or '1' (international)</li>
<li>`level`: string aggregation level. one of 'city', 'airport', 'country'</li>
<li>`limit`: integer limits the number of results, defaults to 40</li>
<li>`start`: integer first date (YYYYMMDD) of requested period</li>
<li>`week`: integer (YYYY-Www) of requested period (alternative to start/end)</li>
</ul>

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
