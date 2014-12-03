---
layout: post
title: Schedule Analysis API - Airline_Top
excerpt: Top flight segments by capacity
categories: api-airline-schedule_analysis
---

Top flight segments by capacity

The API understands the following parameters:
* `airline`: string IATA airline code
* `end`: integer last date (YYYYMMDD) of requested period
* `level`: string aggregation level. one of 'city', 'airport', 'country'
* `limit`: integer limits the number of results, defaults to 40
* `start`: integer first date (YYYYMMDD) of requested period

Example:

    api/airline_top?airline=LH&start=20141124&end=20141130&limit=2

    {
    "airline_top": [
        {
            "competitors": [
                {
                    "airline": "AB", 
                    "seats": 5971
                }, 
                {
                    "airline": "LH", 
                    "seats": 21800
                }
            ], 
            "destination": "TXL", 
            "origin": "FRA", 
            "seats": 21800
        }, 
        {
            "competitors": [
                {
                    "airline": "AB", 
                    "seats": 5971
                }, 
                {
                    "airline": "LH", 
                    "seats": 21800
                }
            ], 
            "destination": "FRA", 
            "origin": "TXL", 
            "seats": 21800
        }
    ]
}