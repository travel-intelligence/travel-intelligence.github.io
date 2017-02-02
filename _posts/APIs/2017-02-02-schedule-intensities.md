---
layout: post
title: Schedule Analysis API - Competition intensity
excerpt: Competition intensity
categories: api-airline-schedule_analysis
---

Competition intensity

The API takes no parameters.

It is called on adresses <code>api/intensities/&lt;key&gt;</code> where <code>&lt;key&gt;</code> must have the following structure: \[airline\]_\[period\]_\[level\] with: 
* \[airline\] is an airline 2-letter IATA code (or 3-letter ICAO code if no IATA available)
* \[period\] is a string representation of a departure month (YYYY-MM)
* \[level\] is either 'city' or 'airp'

Example:

    api/intensities/IB_2017-02_city

    {
    "intensity": {
        "carrier": "IB", 
        "id": "IB_2017-2_city", 
        "legs": [
            {
                "airline_id": "air-iberia", 
                "airline_label": "Iberia (IB/IBE)", 
                "capacity": 4608, 
                "capacity_share": 26, 
                "competition": 1, 
                "destination": "SAL", 
                "frequence": 16, 
                "frequence_share": 14, 
                "origin": "GUA"
            }, 
            {
                "airline_id": "air-iberia", 
                "airline_label": "Iberia (IB/IBE)", 
                "capacity": 7792, 
                "capacity_share": 73, 
                "competition": 1, 
                "destination": "LYS", 
                "frequence": 68, 
                "frequence_share": 79, 
                "origin": "MAD"
            }
        ], 
        "level": "city", 
        "month": "2017-2"
    }
}
