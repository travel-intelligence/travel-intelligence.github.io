---
layout: post
title: Schedule Analysis API - Capacities
excerpt: capacity by month & airline
categories: api-airline-schedule_analysis
---

capacity by month & airline

The API understands the following parameters:
<ul>
<li>`destination`: string IATA airport/city code</li>
<li>`level`: string either 'city' (default) or 'airp'</li>
<li>`origin`: string IATA airport/city code</li>
</ul>

Example:

    api/capacities?origin=MAD&destination=FRA&level=city

    {
    "capacities": [
        {
            "airline_capacities": [
                {
                    "carrier": "FR", 
                    "data": [
                        3213, 
                        3024
                    ]
                }, 
                {
                    "carrier": "UX", 
                    "data": [
                        0, 
                        0
                    ]
                }
            ], 
            "capacities": [
                54532, 
                56628
            ], 
            "destination": "FRA", 
            "end_month": 201801, 
            "id": "MAD_FRA_city", 
            "level": "city", 
            "origin": "MAD", 
            "start_month": 201001
        }
    ]
}
