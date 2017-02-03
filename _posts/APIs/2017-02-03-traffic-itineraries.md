---
layout: post
title: Traffic Analysis API - Airline Connections
excerpt: Traffic Analytics - Airline Connections
categories: api-airline-traffic_analysis
---

Traffic Analytics - Airline Connections

The API understands the following parameters:
* `carrier`: string Airline code (mandatory)
* `month`: string Departure year and month, format YYYY-MM (mandatory)

Example:

    api/itineraries?carrier=LH&month=2016-12

    {
    "itineraries": [
        {
            "alliance": [
                406097, 
                199347
            ], 
            "alliance_name": "Star Alliance", 
            "carrier": "LH", 
            "direct": 1644381, 
            "id": "LH_2016-12", 
            "inline": [
                1137789, 
                4335
            ], 
            "interline": [
                78019, 
                25260
            ], 
            "month": "2016-12"
        }
    ]
}

