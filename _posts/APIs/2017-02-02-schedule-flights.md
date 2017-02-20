---
layout: post
title: Schedule Analysis API - Flights
excerpt: Detailed flight schedule information on flight segment over specific time periods
categories: api-airline-schedule_analysis
---

Detailed flight schedule information on flight segment over specific time periods

The API understands the following parameters:
<ul>
<li>`aircraft`: string (output dimension, groupable, sortable)</li>
<li>`aircraft_bodytype`: string either 'W' (wide) or 'N' (narrow) (output dimension, groupable, sortable)</li>
<li>`aircraft_family`: string (output dimension, groupable, sortable)</li>
<li>`airline`: string 2-letter IATA code, or if not available ICAO code (output dimension, groupable, sortable)</li>
<li>`airline_id`: string internal persistent id (output dimension, groupable, sortable)</li>
<li>`airline_label`: string label associated label (output dimension, groupable, sortable)</li>
<li>`alliance`: string (output dimension, groupable, sortable)</li>
<li>`arr_date`: string (output dimension, groupable, sortable)</li>
<li>`arr_time`: integer (output dimension, groupable, sortable)</li>
<li>`arrival_airport`: string (output dimension, groupable, sortable)</li>
<li>`arrival_city`: string (output dimension, groupable, sortable)</li>
<li>`arrival_country`: string (output dimension, groupable, sortable)</li>
<li>`arrival_region`: integer (output dimension, groupable, sortable)</li>
<li>`arrival_subregion`: integer (output dimension, groupable, sortable)</li>
<li>`ask`: integer (output dimension, summed, sortable)</li>
<li>`block_time`: integer (output dimension, groupable, sortable)</li>
<li>`business_seats`: integer (output dimension, summed, sortable)</li>
<li>`dep_date`: string (output dimension, groupable, sortable)</li>
<li>`dep_time`: integer (output dimension, groupable, sortable)</li>
<li>`departure_airport`: string (output dimension, groupable, sortable)</li>
<li>`departure_city`: string (output dimension, groupable, sortable)</li>
<li>`departure_country`: string (output dimension, groupable, sortable)</li>
<li>`departure_region`: integer (output dimension, groupable, sortable)</li>
<li>`departure_subregion`: integer (output dimension, groupable, sortable)</li>
<li>`eco_seats`: integer (output dimension, summed, sortable)</li>
<li>`end`: integer last date (YYYYMMDD) of requested period</li>
<li>`export`: string either empty (json) or 'csv' (csv export)</li>
<li>`first_seats`: integer (output dimension, summed, sortable)</li>
<li>`flight_designator`: string (output dimension, groupable, sortable)</li>
<li>`flight_number`: integer (output dimension, groupable, sortable)</li>
<li>`group_by`: string ','-list of dimensions to group by</li>
<li>`international`: boolean (output dimension, groupable, sortable)</li>
<li>`month`: integer (output dimension, groupable, sortable)</li>
<li>`page`: integer page number to be displayed (see page_size)</li>
<li>`page_size`: integer number of results to be returned per 'page'</li>
<li>`premiumeco_seats`: integer (output dimension, summed, sortable)</li>
<li>`route`: string (output dimension, groupable, sortable)</li>
<li>`seats`: integer (output dimension, summed, sortable)</li>
<li>`sort_by`: string dimension to sort by</li>
<li>`sort_dir`: integer either 0 (descending) or 1 (ascending)</li>
<li>`start`: integer first date (YYYYMMDD) of requested period</li>
<li>`stops`: integer (output dimension, groupable, sortable)</li>
<li>`sum_flights`: integer (output dimension, summed, sortable)</li>
<li>`traffic_restriction`: boolean (output dimension, groupable, sortable)</li>
<li>`week`: integer (output dimension, groupable, sortable)</li>
<li>`year`: integer (output dimension, groupable, sortable)</li>
</ul>

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
                        "F50"
                    ], 
                    "aircraft_bodytype": [
                        "N"
                    ], 
                    "aircraft_family": [
                        "F50"
                    ], 
                    "airline": [
                        "MNG"
                    ], 
                    "airline_id": [
                        "air-aero-mongolia"
                    ], 
                    "airline_label": [
                        "Aero Mongolia (M0/MNG)"
                    ], 
                    "alliance": [
                        ""
                    ], 
                    "arr_date": [
                        "2014-11-30", 
                        "2014-11-25"
                    ], 
                    "arr_time": [
                        "1050", 
                        "2330"
                    ], 
                    "arrival_airport": [
                        "HET", 
                        "IKT"
                    ], 
                    "arrival_city": [
                        "HET", 
                        "IKT"
                    ], 
                    "arrival_country": [
                        "RU", 
                        "MN"
                    ], 
                    "arrival_region": [
                        "3", 
                        "4"
                    ], 
                    "arrival_subregion": [
                        "32", 
                        "41"
                    ], 
                    "ask": [
                        "1733700"
                    ], 
                    "block_time": [
                        "155"
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
                        "5"
                    ], 
                    "dep_day2": [
                        "6"
                    ], 
                    "dep_day3": [
                        "3"
                    ], 
                    "dep_day4": [
                        "6"
                    ], 
                    "dep_day5": [
                        "5"
                    ], 
                    "dep_day6": [
                        "6"
                    ], 
                    "dep_day7": [
                        "3"
                    ], 
                    "dep_time": [
                        "2200", 
                        "605"
                    ], 
                    "departure_airport": [
                        "IKT", 
                        "HVD"
                    ], 
                    "departure_city": [
                        "IKT", 
                        "HVD"
                    ], 
                    "departure_country": [
                        "RU", 
                        "MN"
                    ], 
                    "departure_region": [
                        "3", 
                        "4"
                    ], 
                    "departure_subregion": [
                        "32", 
                        "41"
                    ], 
                    "destination_terminal": [
                        ""
                    ], 
                    "distance": [
                        "1020"
                    ], 
                    "eco_seats": [
                        "1700"
                    ], 
                    "first_seats": [
                        "0"
                    ], 
                    "flight_designator": [
                        "MNG0102", 
                        "MNG0083"
                    ], 
                    "flight_number": [
                        "61", 
                        "98"
                    ], 
                    "international": [
                        "1", 
                        "0"
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
                        "ULN-ULG", 
                        "LTI-ULN"
                    ], 
                    "seats": [
                        "1700"
                    ], 
                    "stops": [
                        "0"
                    ], 
                    "sum_flights": [
                        "34"
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
                        "AT4", 
                        "SWM"
                    ], 
                    "aircraft_bodytype": [
                        "N"
                    ], 
                    "aircraft_family": [
                        "SWM", 
                        "ATR"
                    ], 
                    "airline": [
                        "PM"
                    ], 
                    "airline_id": [
                        "air-canary-fly"
                    ], 
                    "airline_label": [
                        "Canaryfly (PM/CNF)"
                    ], 
                    "alliance": [
                        ""
                    ], 
                    "arr_date": [
                        "2014-11-30", 
                        "2014-11-25"
                    ], 
                    "arr_time": [
                        "740", 
                        "1210"
                    ], 
                    "arrival_airport": [
                        "EUN", 
                        "GLN"
                    ], 
                    "arrival_city": [
                        "EUN", 
                        "GLN"
                    ], 
                    "arrival_country": [
                        "MA", 
                        "ES"
                    ], 
                    "arrival_region": [
                        "1", 
                        "4"
                    ], 
                    "arrival_subregion": [
                        "13", 
                        "15"
                    ], 
                    "ask": [
                        "629600"
                    ], 
                    "block_time": [
                        "63"
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
                        "10"
                    ], 
                    "dep_day2": [
                        "4"
                    ], 
                    "dep_day3": [
                        "8"
                    ], 
                    "dep_day4": [
                        "8"
                    ], 
                    "dep_day5": [
                        "12"
                    ], 
                    "dep_day6": [
                        "2"
                    ], 
                    "dep_day7": [
                        "4"
                    ], 
                    "dep_time": [
                        "1200", 
                        "1630"
                    ], 
                    "departure_airport": [
                        "EUN", 
                        "ACE"
                    ], 
                    "departure_city": [
                        "EUN", 
                        "ACE"
                    ], 
                    "departure_country": [
                        "MA", 
                        "ES"
                    ], 
                    "departure_region": [
                        "1", 
                        "4"
                    ], 
                    "departure_subregion": [
                        "13", 
                        "15"
                    ], 
                    "destination_terminal": [
                        "", 
                        "1"
                    ], 
                    "distance": [
                        "347"
                    ], 
                    "eco_seats": [
                        "1992"
                    ], 
                    "first_seats": [
                        "0"
                    ], 
                    "flight_designator": [
                        "PM0865", 
                        "PM0100"
                    ], 
                    "flight_number": [
                        "862", 
                        "785"
                    ], 
                    "international": [
                        "1", 
                        "0"
                    ], 
                    "month": [
                        "11"
                    ], 
                    "origin_terminal": [
                        "1", 
                        ""
                    ], 
                    "premiumeco_seats": [
                        "0"
                    ], 
                    "route": [
                        "LPA-FUE", 
                        "LPA-ACE"
                    ], 
                    "seats": [
                        "1992"
                    ], 
                    "stops": [
                        "0"
                    ], 
                    "sum_flights": [
                        "48"
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
                "ask": 167256738428, 
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
            "csv": "../api/flights?start=20141124&end=20141130&hub=NCE&group_by=airline&export=csv"
        }, 
        "pagination": {
            "page": 1, 
            "page_size": 100, 
            "total": 690
        }
    }
}
