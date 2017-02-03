---
layout: post
title: Traffic Analysis API - O&D Traffic
excerpt: Air traffic O&D and Itinerary data
categories: api-airline-traffic_analysis
---

Air traffic O&D and Itinerary data

The API understands the following parameters:
<ul>
<li>`arrival_airport`: string IATA code (output dimension, groupable, sortable)</li>
<li>`arrival_city`: string IATA code (output dimension, groupable, sortable)</li>
<li>`arrival_country`: string IATA code (output dimension, groupable, sortable)</li>
<li>`arrival_unwto_region`: string UNWTO code (output dimension, groupable, sortable)</li>
<li>`arrival_unwto_subregion`: string UNWTO code (output dimension, groupable, sortable)</li>
<li>`departure_airport`: string IATA code (output dimension, groupable, sortable)</li>
<li>`departure_city`: string IATA code (output dimension, groupable, sortable)</li>
<li>`departure_country`: string IATA code (output dimension, groupable, sortable)</li>
<li>`departure_date`: string (output dimension, groupable, sortable)</li>
<li>`departure_unwto_region`: string UNWTO code (output dimension, groupable, sortable)</li>
<li>`departure_unwto_subregion`: string UNWTO code (output dimension, groupable, sortable)</li>
<li>`dominant_airline`: string 2-letter IATA code, or if not available ICAO code</li>
<li>`dominant_airline_id`: string internal persistent id (output dimension, groupable, sortable)</li>
<li>`dominant_airline_label`: string label associated to id (output dimension, groupable, sortable)(output dimension, groupable, sortable)</li>
<li>`dominant_alliance_code`: string (output dimension, groupable, sortable)</li>
<li>`end`: string last period (YYYY-MM or YYYY-Www) of departure date range (optional, start by default)</li>
<li>`export`: string either empty (json) or 'csv' (csv export) (optional)</li>
<li>`group_by`: string ','-list of dimensions to group by (optional)</li>
<li>`month_or_week_number`: integer according to the period type of start param (output dimension, groupable, sortable)</li>
<li>`number_of_hits`: integer (output dimension, summed, sortable)</li>
<li>`operating_carrier_1`: string 2-letter IATA code, or if not available ICAO code of carrier operating leg1 (output dimension, groupable, sortable)</li>
<li>`operating_carrier_2`: string 2-letter IATA code, or if not available ICAO code of carrier operating leg2 (output dimension, groupable, sortable)</li>
<li>`operating_carrier_3`: string 2-letter IATA code, or if not available ICAO code of carrier operating leg3 (output dimension, groupable, sortable)</li>
<li>`page`: integer page number to be displayed (optional, 0 by default, see page_size)</li>
<li>`page_size`: integer number of results to be returned per 'page' (optional default 100)</li>
<li>`sort_by`: string dimension to sort by (optional)</li>
<li>`sort_dir`: integer either 0 (descending) or 1 (ascending) (optional, 1 by default)</li>
<li>`start`: string first period (YYYY-MM or YYYY-Www) of departure date range (mandatory)</li>
<li>`stopovers`: integer or ','-sep list of integers (output dimension, groupable, sortable)</li>
<li>`traffic_estimation`: integer (output dimension, summed, sortable)</li>
<li>`traffic_estimation_business`: integer (output dimension, groupable, sortable)</li>
<li>`traffic_estimation_economy`: integer (output dimension, groupable, sortable)</li>
<li>`traffic_estimation_first`: integer (output dimension, groupable, sortable)</li>
<li>`via_airport_1`: string IATA code (output dimension, groupable, sortable)</li>
<li>`via_airport_2`: string IATA code (output dimension, groupable, sortable)</li>
<li>`via_city_1`: string IATA code (output dimension, groupable, sortable)</li>
<li>`via_city_2`: string IATA code (output dimension, groupable, sortable)</li>
<li>`via_country_1`: string IATA code (output dimension, groupable, sortable)</li>
<li>`via_country_2`: string IATA code (output dimension, groupable, sortable)</li>
<li>`via_unwto_region_1`: integer UNWTO code (output dimension, groupable, sortable)</li>
<li>`via_unwto_region_2`: integer UNWTO code (output dimension, groupable, sortable)</li>
<li>`via_unwto_subregion_1`: integer UNWTO code ( (output dimension, groupable, sortable)</li>
<li>`via_unwto_subregion_2`: integer UNWTO code ( (output dimension, groupable, sortable)</li>
<li>`year`: integer of departure (output dimension, groupable, sortable)</li>
</ul>

Besides those, the Flights API allows to filter, sort and group by any parameter.

Filter example: departure_city=FRA&arrival_country=US&dominant_airline==LH&number_of_hits=>2
Sort example: sort_by=traffic_estimation
Group example: group_by=dominant_airline,arrival_city

Example:

    api/air_traffic_ods?page_size=10&departure_airport=NCE&arrival_airport=UIO&start=2016-W51&sort_by=traffic_estimation&sort_dir=0

    {
    "air_traffic_ods": [
        {
            "items": [
                {
                    "arrival_airport": "UIO", 
                    "arrival_city": "UIO", 
                    "arrival_country": "EC", 
                    "arrival_unwto_region": 2, 
                    "arrival_unwto_subregion": 24, 
                    "departure_airport": "NCE", 
                    "departure_city": "NCE", 
                    "departure_country": "FR", 
                    "departure_date": "2016-W51", 
                    "departure_unwto_region": 4, 
                    "departure_unwto_subregion": 44, 
                    "dominant_airline": "IB", 
                    "dominant_airline_id": "air-iberia", 
                    "dominant_airline_label": "Iberia (IB/IBE)", 
                    "dominant_alliance_code": "O", 
                    "month_or_week_number": 51, 
                    "number_of_hits": 12, 
                    "operating_carrier_1": "IB", 
                    "operating_carrier_2": "IB", 
                    "operating_carrier_3": "", 
                    "stopovers": 1, 
                    "traffic_estimation": 15, 
                    "traffic_estimation_business": 1, 
                    "traffic_estimation_economy": 14, 
                    "traffic_estimation_first": 0, 
                    "via_airport_1": "MAD", 
                    "via_airport_2": "", 
                    "via_city_1": "MAD", 
                    "via_city_2": "", 
                    "via_country_1": "ES", 
                    "via_country_2": "", 
                    "via_unwto_region_1": 4, 
                    "via_unwto_region_2": null, 
                    "via_unwto_subregion_1": 43, 
                    "via_unwto_subregion_2": null, 
                    "year": 2016
                }, 
                {
                    "arrival_airport": "UIO", 
                    "arrival_city": "UIO", 
                    "arrival_country": "EC", 
                    "arrival_unwto_region": 2, 
                    "arrival_unwto_subregion": 24, 
                    "departure_airport": "NCE", 
                    "departure_city": "NCE", 
                    "departure_country": "FR", 
                    "departure_date": "2016-W51", 
                    "departure_unwto_region": 4, 
                    "departure_unwto_subregion": 44, 
                    "dominant_airline": "KL", 
                    "dominant_airline_id": "air-klm", 
                    "dominant_airline_label": "KLM (KL/KLM)", 
                    "dominant_alliance_code": "S", 
                    "month_or_week_number": 51, 
                    "number_of_hits": 11, 
                    "operating_carrier_1": "KL", 
                    "operating_carrier_2": "KL", 
                    "operating_carrier_3": "", 
                    "stopovers": 1, 
                    "traffic_estimation": 5, 
                    "traffic_estimation_business": 0, 
                    "traffic_estimation_economy": 5, 
                    "traffic_estimation_first": 0, 
                    "via_airport_1": "AMS", 
                    "via_airport_2": "", 
                    "via_city_1": "AMS", 
                    "via_city_2": "", 
                    "via_country_1": "NL", 
                    "via_country_2": "", 
                    "via_unwto_region_1": 4, 
                    "via_unwto_region_2": null, 
                    "via_unwto_subregion_1": 44, 
                    "via_unwto_subregion_2": null, 
                    "year": 2016
                }
            ], 
            "totals": {
                "linecount": 3, 
                "traffic_estimation": 21, 
                "traffic_estimation_business": 1, 
                "traffic_estimation_economy": 20, 
                "traffic_estimation_first": 0
            }
        }
    ], 
    "meta": {
        "export_links": {
            "csv": "..api/air_traffic_ods?page_size=10&departure_airport=NCE&arrival_airport=UIO&start=2016-W51&sort_by=traffic_estimation&sort_dir=0&export=csv"
        }, 
        "pagination": {
            "page": 1, 
            "page_size": 10, 
            "total": 3
        }
    }
}

