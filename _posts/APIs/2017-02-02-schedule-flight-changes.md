---
layout: post
title: Schedule Analysis API - Flight Changes
excerpt: Compare two periods according to the number of flights, ASK and total number of seats
categories: api-airline-schedule_analysis
---

Compare two periods according to the number of flights, ASK and total number of seats

The API understands the following parameters:
<ul>
<li>`airline`: string IATA/ICAO code (output dimension, groupable, sortable)</li>
<li>`arrival_airport`: string IATA airport code (output dimension, groupable, sortable)</li>
<li>`arrival_city`: string IATA airport code (output dimension, groupable, sortable)</li>
<li>`arrival_country`: string IATA airport code (output dimension, groupable, sortable)</li>
<li>`arrival_unwto_region`: string UNWTO airport code (output dimension, groupable, sortable)</li>
<li>`arrival_unwto_subregion`: string UNWTO airport code (output dimension, groupable, sortable)</li>
<li>`departure_airport`: string IATA airport code (output dimension, groupable, sortable)</li>
<li>`departure_city`: string IATA airport code (output dimension, groupable, sortable)</li>
<li>`departure_country`: string IATA airport code (output dimension, groupable, sortable)</li>
<li>`departure_unwto_region`: string UNWTO airport code (output dimension, groupable, sortable)</li>
<li>`departure_unwto_subregion`: string UNWTO airport code (output dimension, groupable, sortable)</li>
<li>`end1`: integer last date (YYYYMMDD) of first period</li>
<li>`end2`: integer last date (YYYYMMDD) of second period</li>
<li>`export`: string either empty (json) or 'csv' (csv export)</li>
<li>`group_by`: string ','-list of dimensions to group by</li>
<li>`page`: integer page number to be displayed (see page_size)</li>
<li>`page_size`: integer number of results to be returned per 'page'</li>
<li>`sort_by`: string dimension to sort by</li>
<li>`sort_dir`: integer either 0 (descending) or 1 (ascending)</li>
<li>`start1`: integer first date (YYYYMMDD) of first period</li>
<li>`start2`: integer first date (YYYYMMDD) of second period</li>
<li>`week1`: string (YYYY-Www) first period (alternative to start1/end1)</li>
<li>`week2`: string (YYYY-Www) second period (alternative to start2/end2)</li>
</ul>

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
