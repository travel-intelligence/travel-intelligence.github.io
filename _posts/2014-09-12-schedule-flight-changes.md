---
layout: post
title: Schedule Analysis API - Flight Changes
excerpt: Compare two periods according to the number of flights, ASK and total number of seats
---

Compare two periods according to the number of flights, ASK and total number of seats

The API understands the following parameters:
* `arrival_airport`: string IATA airport code
* `departure_airport`: string IATA airport code
* `end1`: integer last date (YYYYMMDD) of first period
* `end2`: integer last date (YYYYMMDD) of second period
* `start1`: integer first date (YYYYMMDD) of first period
* `start2`: integer first date (YYYYMMDD) of second period

Example:

    api/flight_changes?arrival_airport=FRA&departure_airport=NCE&start1=20141124&end1=20141130&start2=20141124&end2=20141130

    {
    "flight_changes": [
        {
            "items": [
                {
                    "airline": [
                        "LH"
                    ], 
                    "alliance": [
                        "*A"
                    ], 
                    "arrival_airport": [
                        "FRA"
                    ], 
                    "arrival_city": "FRA", 
                    "arrival_country": [
                        "DE"
                    ], 
                    "arrival_region": [
                        4
                    ], 
                    "arrival_subregion": [
                        44
                    ], 
                    "ask_1": 2366100, 
                    "ask_2": 2366100, 
                    "ask_diff": 0, 
                    "departure_airport": [
                        "NCE"
                    ], 
                    "departure_city": "NCE", 
                    "departure_country": [
                        "FR"
                    ], 
                    "departure_region": [
                        4
                    ], 
                    "departure_subregion": [
                        44
                    ], 
                    "seats_1": 3300, 
                    "seats_2": 3300, 
                    "seats_diff": 0, 
                    "sum_flights_1": 21, 
                    "sum_flights_2": 21, 
                    "sum_flights_diff": 0
                }
            ], 
            "totals": {}
        }
    ], 
    "meta": {
        "export_links": {
            "csv": "..api/flight_changes?arrival_airport=FRA&departure_airport=NCE&start1=20141124&end1=20141130&start2=20141124&end2=20141130&export=csv"
        }, 
        "pagination": {
            "page": 1, 
            "page_size": 100, 
            "total": 1
        }
    }
}
