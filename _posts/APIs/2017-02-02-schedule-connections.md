---
layout: post
title: Schedule Analysis API - Connections
excerpt: Schedules on connection level
categories: api-airline-schedule_analysis
---

Schedules on connection level

The API understands the following parameters:
<ul>
<li>`arrival_date`: string (output dimension, groupable, sortable)</li>
<li>`arrival_time_1`: integer (output dimension, groupable, sortable)</li>
<li>`arrival_time_2`: integer (output dimension, groupable, sortable)</li>
<li>`arrival_time_3`: integer (output dimension, groupable, sortable)</li>
<li>`capacity_1`: integer (output dimension, summed, sortable)</li>
<li>`capacity_2`: integer (output dimension, summed, sortable)</li>
<li>`capacity_3`: integer (output dimension, summed, sortable)</li>
<li>`connecting_time`: integer (output dimension, summed, sortable)</li>
<li>`connecting_time_1`: integer (output dimension, summed, sortable)</li>
<li>`connecting_time_2`: integer (output dimension, summed, sortable)</li>
<li>`departure_airport`: string IATA airport code (output dimension, groupable, sortable)</li>
<li>`departure_date`: string (output dimension, groupable, sortable)</li>
<li>`departure_time_1`: integer (output dimension, groupable, sortable)</li>
<li>`departure_time_2`: integer (output dimension, groupable, sortable)</li>
<li>`departure_time_3`: integer (output dimension, groupable, sortable)</li>
<li>`departure_week`: integer (output dimension, groupable, sortable)</li>
<li>`destination_airport`: string IATA airport code (output dimension, groupable, sortable)</li>
<li>`destination_city`: string IATA airport code (output dimension, groupable, sortable)</li>
<li>`destination_country`: string IATA airport code (output dimension, groupable, sortable)</li>
<li>`destination_terminal`: string code (output dimension, groupable, sortable)</li>
<li>`destination_unwto_region`: string UNWTO airport code (output dimension, groupable, sortable)</li>
<li>`destination_unwto_subregion`: string UNWTO airport code (output dimension, groupable, sortable)</li>
<li>`detour`: float ratio between total and direct distances (output dimension, averaged, sortable)</li>
<li>`direct_distance`: integer (output dimension, sumable, sortable)</li>
<li>`distance_1`: integer distance of first segment (output dimension, summed, sortable)</li>
<li>`distance_2`: integer distance of second segment (output dimension, summed, sortable)</li>
<li>`distance_3`: integer distance of third segment (output dimension, summed, sortable)</li>
<li>`dominant_airline`: string 2-letter IATA code, or if not available ICAO code (output dimension, groupable, sortable)</li>
<li>`dominant_airline_id`: string internal persistent id (output dimension, groupable, sortable)</li>
<li>`dominant_airline_label`: string label associated label (output dimension, groupable, sortable)</li>
<li>`dominant_capacity`: integer (output dimension, summed, sortable)</li>
<li>`elapsed_time`: integer (output dimension, summed, sortable)</li>
<li>`elapsed_time_1`: integer (output dimension, summed, sortable)</li>
<li>`elapsed_time_2`: integer (output dimension, summed, sortable)</li>
<li>`elapsed_time_3`: integer (output dimension, summed, sortable)</li>
<li>`end`: integer last date (YYYYMMDD) of first period</li>
<li>`export`: string either empty (json) or 'csv' (csv export)</li>
<li>`flight_designator_1`: string (output dimension, groupable, sortable)</li>
<li>`flight_designator_2`: string (output dimension, groupable, sortable)</li>
<li>`flight_designator_3`: string (output dimension, groupable, sortable)</li>
<li>`group_by`: string ','-list of dimensions to group by</li>
<li>`hub_1`: string ','-list of IATA airport code of first stop (output dimension, groupable, sortable)</li>
<li>`hub_2`: string ','-list of IATA airport code of second stop (output dimension, groupable, sortable)</li>
<li>`month`: integer (output dimension, groupable, sortable)</li>
<li>`num_connections`: integer (output dimension, summed, sortable)</li>
<li>`operating_carrier_1`: string IATA/ICAO code (output dimension, groupable, sortable)</li>
<li>`operating_carrier_2`: string IATA/ICAO code (output dimension, groupable, sortable)</li>
<li>`operating_carrier_3`: string IATA/ICAO code (output dimension, groupable, sortable)</li>
<li>`origin_airport`: string IATA airport code (output dimension, groupable, sortable)</li>
<li>`origin_city`: string IATA airport code (output dimension, groupable, sortable)</li>
<li>`origin_country`: string IATA airport code (output dimension, groupable, sortable)</li>
<li>`origin_terminal`: string code (output dimension, groupable, sortable)</li>
<li>`origin_unwto_region`: string UNWTO airport code (output dimension, groupable, sortable)</li>
<li>`origin_unwto_subregion`: string UNWTO airport code (output dimension, groupable, sortable)</li>
<li>`page`: integer page number to be displayed (see page_size)</li>
<li>`page_size`: integer number of results to be returned per 'page'</li>
<li>`qsi`: float (output dimension, summed, sortable)</li>
<li>`sort_by`: string dimension to sort by</li>
<li>`sort_dir`: integer either 0 (descending) or 1 (ascending)</li>
<li>`start`: integer first date (YYYYMMDD) of first period</li>
<li>`stops`: string ','-list of number of stop (0 to 2) (output dimension, groupable, sortable)</li>
<li>`total_distance`: integer sum of segment distances (output dimension, summed, sortable)</li>
<li>`week`: string (YYYY-Www) departure period to consider (alternative to start/end)</li>
<li>`year`: integer (output dimension, groupable, sortable)</li>
</ul>

Besides those, the Flights API allows to filter, sort and group by any parameter.

Filter example: origin_city=FRA&destination_country=US&dominant_airline==LH&direct_distance=>1000
Sort example: sort_by=dominant_capacity,airline
Group example: group_by=dominant_airline,destination_city

Example:

    api/connections?page_size=1&origin_airport=CDG&destination_airport=EWR&stops=0,1&dominant_airline=AA&start=20170130&end=20170205&sort_by=dominant_airline&sort_dir=0

    {
    "connections": [
        {
            "items": [
                {
                    "agg_dep_days": ".2.....", 
                    "arrival_date": "2017-01-31", 
                    "arrival_time_1": 1335, 
                    "arrival_time_2": 1700, 
                    "arrival_time_3": null, 
                    "capacity_1": 258, 
                    "capacity_2": 48, 
                    "capacity_3": null, 
                    "connecting_time": 140, 
                    "connecting_time_1": 140, 
                    "connecting_time_2": 0, 
                    "departure_date": "2017-01-31", 
                    "departure_time_1": 1045, 
                    "departure_time_2": 1555, 
                    "departure_time_3": null, 
                    "departure_week": 201705, 
                    "destination_airport": "EWR", 
                    "destination_city": "NYC", 
                    "destination_country": "US", 
                    "destination_terminal": "A", 
                    "destination_unwto_region": 2, 
                    "destination_unwto_subregion": 23, 
                    "detour": 1.04, 
                    "direct_distance": 5857, 
                    "distance_1": 5984, 
                    "distance_2": 128, 
                    "distance_3": null, 
                    "dominant_airline": "AA", 
                    "dominant_airline_id": "air-american-airlines", 
                    "dominant_airline_label": "American Airlines (AA/AAL)", 
                    "dominant_capacity": 258, 
                    "elapsed_time": 735, 
                    "elapsed_time_1": 530, 
                    "elapsed_time_2": 65, 
                    "elapsed_time_3": null, 
                    "flight_designator_1": "AA0755", 
                    "flight_designator_2": "AA4911", 
                    "flight_designator_3": null, 
                    "hub_1": "PHL", 
                    "hub_2": "", 
                    "month": 1, 
                    "num_connections": 1, 
                    "num_connections_day_1": 0, 
                    "num_connections_day_2": 1, 
                    "num_connections_day_3": 0, 
                    "num_connections_day_4": 0, 
                    "num_connections_day_5": 0, 
                    "num_connections_day_6": 0, 
                    "num_connections_day_7": 0, 
                    "operating_carrier_1": "AA", 
                    "operating_carrier_2": "AA", 
                    "operating_carrier_3": "", 
                    "origin_airport": "CDG", 
                    "origin_city": "PAR", 
                    "origin_country": "FR", 
                    "origin_terminal": "2A", 
                    "origin_unwto_region": 4, 
                    "origin_unwto_subregion": 44, 
                    "stops": 1, 
                    "total_distance": 6112, 
                    "year": 2017
                }
            ], 
            "totals": {
                "capacity_1": 1548, 
                "capacity_2": 288, 
                "capacity_3": null, 
                "linecount": 6, 
                "num_connections": 6, 
                "num_connections_day_1": 1, 
                "num_connections_day_2": 1, 
                "num_connections_day_3": 1, 
                "num_connections_day_4": 1, 
                "num_connections_day_5": 1, 
                "num_connections_day_6": 0, 
                "num_connections_day_7": 1, 
                "qsi": 0.081981
            }
        }
    ], 
    "meta": {
        "export_links": {
            "csv": "..api/connections?page_size=1&origin_airport=CDG&destination_airport=EWR&stops=0,1&dominant_airline=AA&start=20170130&end=20170205&sort_by=dominant_airline&sort_dir=0&export=csv"
        }, 
        "pagination": {
            "page": 1, 
            "page_size": 1, 
            "total": 6
        }
    }
}
