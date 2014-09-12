---
layout: post
title: Schedule Analysis API - Flights
excerpt: Detailed flight schedule information on flight segment over specific time periods
---

Detailed flight schedule information on flight segment over specific time periods

The API understands the following parameters:
* `end`: integer last date (YYYYMMDD) of requested period
* `start`: integer first date (YYYYMMDD) of requested period

Besides those, the Flights API allows to filter, sort and group by any parameter.

Filter example: departure_city=FRA&arrival_country=US&airline==LH&destination_terminal=1
Sort example: sort_by=seats,airline
Group example: group_by=airline,departure_country


Example:

    api/flights?start=20141124&end=20141130&hub=NCE&group_by=airline

    {
    "flights": [
        {
            "items": [
                {
                    "aircraft": [
                        "319", 
                        "32A"
                    ], 
                    "aircraft_bodytype": [
                        "N"
                    ], 
                    "aircraft_family": [
                        "32S"
                    ], 
                    "airline": "4U", 
                    "alliance": [
                        ""
                    ], 
                    "arr_day": [
                        5, 
                        7
                    ], 
                    "arr_time": [
                        1430, 
                        1610
                    ], 
                    "arrival_airport": [
                        "DUS", 
                        "CGN"
                    ], 
                    "arrival_city": [
                        "DUS", 
                        "CGN"
                    ], 
                    "arrival_country": [
                        "DE", 
                        "FR"
                    ], 
                    "arrival_region": [
                        4
                    ], 
                    "arrival_subregion": [
                        44
                    ], 
                    "ask": 1007046, 
                    "block_time": 102.5, 
                    "business_seats": 2.0, 
                    "codeshares": [
                        "", 
                        "LH5044"
                    ], 
                    "date": [
                        "2014-11-28", 
                        "2014-11-30"
                    ], 
                    "dep_day": [
                        5, 
                        7
                    ], 
                    "dep_day1": 0, 
                    "dep_day2": 0, 
                    "dep_day3": 0, 
                    "dep_day4": 0, 
                    "dep_day5": 4, 
                    "dep_day6": 0, 
                    "dep_day7": 4, 
                    "dep_time": [
                        1255, 
                        1435
                    ], 
                    "departure_airport": [
                        "NCE", 
                        "DUS"
                    ], 
                    "departure_city": [
                        "NCE", 
                        "DUS"
                    ], 
                    "departure_country": [
                        "FR", 
                        "DE"
                    ], 
                    "departure_region": [
                        4
                    ], 
                    "departure_subregion": [
                        44
                    ], 
                    "destination_terminal": [
                        "0", 
                        "1"
                    ], 
                    "distance": 825.0, 
                    "eco_seats": 1220.0, 
                    "first_seats": 0.0, 
                    "flight_number": [
                        9421, 
                        425
                    ], 
                    "mobile_curtain": [
                        1.0, 
                        0.0
                    ], 
                    "month": [
                        11
                    ], 
                    "origin_terminal": [
                        "1", 
                        "0"
                    ], 
                    "seats": 1222, 
                    "stops": [
                        0
                    ], 
                    "sum_flights": 8, 
                    "traffic_restriction": [
                        0
                    ], 
                    "week": [
                        48
                    ], 
                    "year": [
                        2014
                    ]
                }, 
                {
                    "aircraft": [
                        "CRJ", 
                        "CR7"
                    ], 
                    "aircraft_bodytype": [
                        "N"
                    ], 
                    "aircraft_family": [
                        "CRJ", 
                        "ERJ"
                    ], 
                    "airline": "A5", 
                    "alliance": [
                        ""
                    ], 
                    "arr_day": [
                        7, 
                        6
                    ], 
                    "arr_time": [
                        1720, 
                        1415
                    ], 
                    "arrival_airport": [
                        "ETZ", 
                        "RNS"
                    ], 
                    "arrival_city": [
                        "ETZ", 
                        "RNS"
                    ], 
                    "arrival_country": [
                        "FR"
                    ], 
                    "arrival_region": [
                        4
                    ], 
                    "arrival_subregion": [
                        44
                    ], 
                    "ask": 3184648, 
                    "block_time": 83.72, 
                    "business_seats": 12.0, 
                    "codeshares": [
                        "XK3493", 
                        "XK3193"
                    ], 
                    "date": [
                        "2014-11-30", 
                        "2014-11-29"
                    ], 
                    "dep_day": [
                        7, 
                        6
                    ], 
                    "dep_day1": 16, 
                    "dep_day2": 12, 
                    "dep_day3": 12, 
                    "dep_day4": 14, 
                    "dep_day5": 16, 
                    "dep_day6": 8, 
                    "dep_day7": 12, 
                    "dep_time": [
                        1600, 
                        1255
                    ], 
                    "departure_airport": [
                        "NCE", 
                        "ETZ"
                    ], 
                    "departure_city": [
                        "NCE", 
                        "ETZ"
                    ], 
                    "departure_country": [
                        "FR"
                    ], 
                    "departure_region": [
                        4
                    ], 
                    "departure_subregion": [
                        44
                    ], 
                    "destination_terminal": [
                        "0", 
                        "A"
                    ], 
                    "distance": 585.18, 
                    "eco_seats": 5326.0, 
                    "first_seats": 156.0, 
                    "flight_number": [
                        3493, 
                        3193
                    ], 
                    "mobile_curtain": [
                        0.0
                    ], 
                    "month": [
                        11
                    ], 
                    "origin_terminal": [
                        "2", 
                        "0"
                    ], 
                    "seats": 5494, 
                    "stops": [
                        0
                    ], 
                    "sum_flights": 90, 
                    "traffic_restriction": [
                        0
                    ], 
                    "week": [
                        48
                    ], 
                    "year": [
                        2014
                    ]
                }
            ], 
            "totals": {
                "ask": 209236040, 
                "dep_day1": 241, 
                "dep_day2": 191, 
                "dep_day3": 190, 
                "dep_day4": 226, 
                "dep_day5": 256, 
                "dep_day6": 177, 
                "dep_day7": 242, 
                "seats": 211613, 
                "sum_flights": 1523
            }
        }
    ], 
    "meta": {
        "export_links": {
            "csv": "..api/flights?start=20141124&end=20141130&hub=NCE&group_by=airline&export=csv"
        }, 
        "pagination": {
            "page": 1, 
            "page_size": 100, 
            "total": 28
        }
    }
}
