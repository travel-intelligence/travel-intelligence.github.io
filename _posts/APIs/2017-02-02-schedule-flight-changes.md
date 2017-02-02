---
layout: post
title: Schedule Analysis API - Flight Changes
excerpt: Compare two periods according to the number of flights, ASK and total number of seats
categories: api-airline-schedule_analysis
---

Compare two periods according to the number of flights, ASK and total number of seats

The API understands the following parameters:
* `airline`: string IATA/ICAO code (output dimension, groupable, sortable)
* `arrival_airport`: string IATA airport code (output dimension, groupable, sortable)
* `arrival_city`: string IATA airport code (output dimension, groupable, sortable)
* `arrival_country`: string IATA airport code (output dimension, groupable, sortable)
* `arrival_unwto_region`: string UNWTO airport code (output dimension, groupable, sortable)
* `arrival_unwto_subregion`: string UNWTO airport code (output dimension, groupable, sortable)
* `departure_airport`: string IATA airport code (output dimension, groupable, sortable)
* `departure_city`: string IATA airport code (output dimension, groupable, sortable)
* `departure_country`: string IATA airport code (output dimension, groupable, sortable)
* `departure_unwto_region`: string UNWTO airport code (output dimension, groupable, sortable)
* `departure_unwto_subregion`: string UNWTO airport code (output dimension, groupable, sortable)
* `end1`: integer last date (YYYYMMDD) of first period
* `end2`: integer last date (YYYYMMDD) of second period
* `export`: string either empty (json) or 'csv' (csv export)
* `group_by`: string ','-list of dimensions to group by
* `page`: integer page number to be displayed (see page_size)
* `page_size`: integer number of results to be returned per 'page'
* `sort_by`: string dimension to sort by
* `sort_dir`: integer either 0 (descending) or 1 (ascending)
* `start1`: integer first date (YYYYMMDD) of first period
* `start2`: integer first date (YYYYMMDD) of second period
* `week1`: string (YYYY-Www) first period (alternative to start1/end1)
* `week2`: string (YYYY-Www) second period (alternative to start2/end2)

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
                        "A"
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
                    "ask_1": 2398365, 
                    "ask_2": 2398365, 
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
                    "flight_designator": [
                        "LH1059", 
                        "LH1065"
                    ], 
                    "seats_1": 3345, 
                    "seats_2": 3345, 
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
