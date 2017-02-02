---
layout: post
title: Schedule Analysis API - Flights
excerpt: Detailed flight schedule information on flight segment over specific time periods
categories: api-airline-schedule_analysis
---

Detailed flight schedule information on flight segment over specific time periods

The API understands the following parameters:
* `aircraft`: string (output dimension, groupable, sortable)
* `aircraft_bodytype`: string either 'W' (wide) or 'N' (narrow) (output dimension, groupable, sortable)
* `aircraft_family`: string (output dimension, groupable, sortable)
* `airline`: string 2-letter IATA code, or if not available ICAO code (output dimension, groupable, sortable)
* `airline_id`: string internal persistent id (output dimension, groupable, sortable)
* `airline_label`: string label associated label (output dimension, groupable, sortable)
* `alliance`: string (output dimension, groupable, sortable)
* `arr_date`: string (output dimension, groupable, sortable)
* `arr_time`: integer (output dimension, groupable, sortable)
* `arrival_airport`: string (output dimension, groupable, sortable)
* `arrival_city`: string (output dimension, groupable, sortable)
* `arrival_country`: string (output dimension, groupable, sortable)
* `arrival_region`: integer (output dimension, groupable, sortable)
* `arrival_subregion`: integer (output dimension, groupable, sortable)
* `ask`: integer (output dimension, summed, sortable)
* `block_time`: integer (output dimension, groupable, sortable)
* `business_seats`: integer (output dimension, summed, sortable)
* `dep_date`: string (output dimension, groupable, sortable)
* `dep_time`: integer (output dimension, groupable, sortable)
* `departure_airport`: string (output dimension, groupable, sortable)
* `departure_city`: string (output dimension, groupable, sortable)
* `departure_country`: string (output dimension, groupable, sortable)
* `departure_region`: integer (output dimension, groupable, sortable)
* `departure_subregion`: integer (output dimension, groupable, sortable)
* `eco_seats`: integer (output dimension, summed, sortable)
* `end`: integer last date (YYYYMMDD) of requested period
* `export`: string either empty (json) or 'csv' (csv export)
* `first_seats`: integer (output dimension, summed, sortable)
* `flight_designator`: string (output dimension, groupable, sortable)
* `flight_number`: integer (output dimension, groupable, sortable)
* `group_by`: string ','-list of dimensions to group by
* `month`: integer (output dimension, groupable, sortable)
* `page`: integer page number to be displayed (see page_size)
* `page_size`: integer number of results to be returned per 'page'
* `premiumeco_seats`: integer (output dimension, summed, sortable)
* `route`: string (output dimension, groupable, sortable)
* `seats`: integer (output dimension, summed, sortable)
* `sort_by`: string dimension to sort by
* `sort_dir`: integer either 0 (descending) or 1 (ascending)
* `start`: integer first date (YYYYMMDD) of requested period
* `stops`: integer (output dimension, groupable, sortable)
* `sum_flights`: integer (output dimension, summed, sortable)
* `traffic_restriction`: boolean (output dimension, groupable, sortable)
* `week`: integer (output dimension, groupable, sortable)
* `year`: integer (output dimension, groupable, sortable)

Besides those, the Flights API allows to filter, sort and group by any parameter.

Filter example: departure_city=FRA&arrival_country=US&airline==LH&destination_terminal=1&distance=>1000
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
                        "320"
                    ], 
                    "aircraft_bodytype": [
                        "N"
                    ], 
                    "aircraft_family": [
                        "32S"
                    ], 
                    "airline": [
                        "TT"
                    ], 
                    "airline_id": [
                        "air-tiger-air-australia"
                    ], 
                    "airline_label": [
                        "Tigerair Australia (TT/TGW)"
                    ], 
                    "alliance": [
                        ""
                    ], 
                    "arr_date": [
                        "2014-11-30", 
                        "2014-11-25"
                    ], 
                    "arr_time": [
                        "1305", 
                        "1140"
                    ], 
                    "arrival_airport": [
                        "DRW", 
                        "CNS"
                    ], 
                    "arrival_city": [
                        "DRW", 
                        "CNS"
                    ], 
                    "arrival_country": [
                        "AU"
                    ], 
                    "arrival_region": [
                        "5"
                    ], 
                    "arrival_subregion": [
                        "51"
                    ], 
                    "ask": [
                        "99713880"
                    ], 
                    "block_time": [
                        "126"
                    ], 
                    "business_seats": [
                        "0"
                    ], 
                    "codeshares": [
                        ""
                    ], 
                    "date": [
                        "2014-11-30", 
                        "2014-11-25"
                    ], 
                    "dep_day": [
                        "1", 
                        "3"
                    ], 
                    "dep_day1": [
                        "68"
                    ], 
                    "dep_day2": [
                        "55"
                    ], 
                    "dep_day3": [
                        "46"
                    ], 
                    "dep_day4": [
                        "63"
                    ], 
                    "dep_day5": [
                        "78"
                    ], 
                    "dep_day6": [
                        "64"
                    ], 
                    "dep_day7": [
                        "80"
                    ], 
                    "dep_time": [
                        "1140", 
                        "1300"
                    ], 
                    "departure_airport": [
                        "CNS", 
                        "SYD"
                    ], 
                    "departure_city": [
                        "CNS", 
                        "SYD"
                    ], 
                    "departure_country": [
                        "AU"
                    ], 
                    "departure_region": [
                        "5"
                    ], 
                    "departure_subregion": [
                        "51"
                    ], 
                    "destination_terminal": [
                        "1", 
                        ""
                    ], 
                    "distance": [
                        "1220"
                    ], 
                    "eco_seats": [
                        "81720"
                    ], 
                    "first_seats": [
                        "0"
                    ], 
                    "flight_designator": [
                        "TT0671", 
                        "TT0672"
                    ], 
                    "flight_number": [
                        "214", 
                        "213"
                    ], 
                    "month": [
                        "11"
                    ], 
                    "origin_terminal": [
                        "", 
                        "1"
                    ], 
                    "premiumeco_seats": [
                        "0"
                    ], 
                    "route": [
                        "OOL-MEL", 
                        "SYD-CFS"
                    ], 
                    "seats": [
                        "81720"
                    ], 
                    "stops": [
                        "0"
                    ], 
                    "sum_flights": [
                        "454"
                    ], 
                    "traffic_restriction": [
                        "0"
                    ], 
                    "week": [
                        "201448"
                    ], 
                    "year": [
                        "2014"
                    ]
                }, 
                {
                    "aircraft": [
                        "CNA"
                    ], 
                    "aircraft_bodytype": [
                        "N"
                    ], 
                    "aircraft_family": [
                        "CNA"
                    ], 
                    "airline": [
                        "ATM"
                    ], 
                    "airline_id": [
                        "air-tasmania"
                    ], 
                    "airline_label": [
                        "Airlines of Tasmania (./ATM)"
                    ], 
                    "alliance": [
                        ""
                    ], 
                    "arr_date": [
                        "2014-11-28", 
                        "2014-11-25"
                    ], 
                    "arr_time": [
                        "830", 
                        "1435"
                    ], 
                    "arrival_airport": [
                        "LST", 
                        "CBI"
                    ], 
                    "arrival_city": [
                        "MEL", 
                        "LST"
                    ], 
                    "arrival_country": [
                        "AU"
                    ], 
                    "arrival_region": [
                        "5"
                    ], 
                    "arrival_subregion": [
                        "51"
                    ], 
                    "ask": [
                        "33512"
                    ], 
                    "block_time": [
                        "73"
                    ], 
                    "business_seats": [
                        "0"
                    ], 
                    "codeshares": [
                        ""
                    ], 
                    "date": [
                        "2014-11-28", 
                        "2014-11-25"
                    ], 
                    "dep_day": [
                        "1", 
                        "3"
                    ], 
                    "dep_day1": [
                        "3"
                    ], 
                    "dep_day2": [
                        "2"
                    ], 
                    "dep_day3": [
                        "3"
                    ], 
                    "dep_day4": [
                        "2"
                    ], 
                    "dep_day5": [
                        "3"
                    ], 
                    "dep_day6": [
                        "0"
                    ], 
                    "dep_day7": [
                        "0"
                    ], 
                    "dep_time": [
                        "1050", 
                        "1730"
                    ], 
                    "departure_airport": [
                        "LST", 
                        "CBI"
                    ], 
                    "departure_city": [
                        "MEL", 
                        "LST"
                    ], 
                    "departure_country": [
                        "AU"
                    ], 
                    "departure_region": [
                        "5"
                    ], 
                    "departure_subregion": [
                        "51"
                    ], 
                    "destination_terminal": [
                        ""
                    ], 
                    "distance": [
                        "322"
                    ], 
                    "eco_seats": [
                        "104"
                    ], 
                    "first_seats": [
                        "0"
                    ], 
                    "flight_designator": [
                        "ATM0502", 
                        "ATM0500"
                    ], 
                    "flight_number": [
                        "100", 
                        "101"
                    ], 
                    "month": [
                        "11"
                    ], 
                    "origin_terminal": [
                        ""
                    ], 
                    "premiumeco_seats": [
                        "0"
                    ], 
                    "route": [
                        "MEB-GFF", 
                        "GFF-MEB"
                    ], 
                    "seats": [
                        "104"
                    ], 
                    "stops": [
                        "0"
                    ], 
                    "sum_flights": [
                        "13"
                    ], 
                    "traffic_restriction": [
                        "0"
                    ], 
                    "week": [
                        "201448"
                    ], 
                    "year": [
                        "2014"
                    ]
                }
            ], 
            "totals": {
                "ask": 167260106981, 
                "business_seats": 3649333, 
                "dep_day1": 100970, 
                "dep_day2": 100596, 
                "dep_day3": 102489, 
                "dep_day4": 90092, 
                "dep_day5": 97486, 
                "dep_day6": 91661, 
                "dep_day7": 100192, 
                "eco_seats": 86638457, 
                "first_seats": 1865901, 
                "linecount": 690, 
                "premiumeco_seats": 181983, 
                "seats": 92335674, 
                "sum_flights": 683486
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
            "total": 690
        }
    }
}
