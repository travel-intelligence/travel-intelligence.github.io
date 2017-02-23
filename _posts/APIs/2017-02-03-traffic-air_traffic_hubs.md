---
layout: post
title: Traffic Analysis API - Leg Traffic
excerpt: Traffic Analytics - Leg Traffic
categories: api-airline-traffic_analysis
---

Traffic Analytics - Leg Traffic

The API understands the following parameters:
<ul>
<li>`arrival_airport`: string IATA code (output dimension, groupable, sortable)</li>
<li>`arrival_city`: string IATA code (output dimension, groupable, sortable)</li>
<li>`arrival_country`: string IATA code (output dimension, groupable, sortable)</li>
<li>`arrival_unwto_region`: integer UNWTO code (output dimension, groupable, sortable)</li>
<li>`arrival_unwto_subregion`: integer UNWTO code (output dimension, groupable, sortable)</li>
<li>`de_feeding_airline_ssim`: string 2-letter IATA code, or if not available ICAO code of leg+1 operating carrier (output dimension, groupable, sortable)</li>
<li>`defeeding_airport`: string IATA code (output dimension, groupable, sortable)</li>
<li>`defeeding_city`: string IATA code (output dimension, groupable, sortable)</li>
<li>`defeeding_country`: string IATA code (output dimension, groupable, sortable)</li>
<li>`defeeding_unwto_region`: integer UNWTO code (output dimension, groupable, sortable)</li>
<li>`defeeding_unwto_subregion`: integer UNWTO code (output dimension, groupable, sortable)</li>
<li>`departure_airport`: string IATA code (output dimension, groupable, sortable)</li>
<li>`departure_city`: string IATA code (output dimension, groupable, sortable)</li>
<li>`departure_country`: string IATA code (output dimension, groupable, sortable)</li>
<li>`departure_date`: string (output dimension, groupable, sortable)</li>
<li>`departure_unwto_region`: integer UNWTO code (output dimension, groupable, sortable)</li>
<li>`departure_unwto_subregion`: integer UNWTO code (output dimension, groupable, sortable)</li>
<li>`departure_year`: integer (output dimension, groupable, sortable)</li>
<li>`end`: string last period (YYYY-MM or YYYY-Www) of departure date range (optional, start by default)</li>
<li>`export`: string either empty (json) or 'csv' (csv export) (optional)</li>
<li>`feeding_airline_ssim`: string 2-letter IATA code, or if not available ICAO code of leg-1 operating carrier (output dimension, groupable, sortable)</li>
<li>`feeding_airport`: string IATA code (output dimension, groupable, sortable)</li>
<li>`feeding_city`: string IATA code (output dimension, groupable, sortable)</li>
<li>`feeding_country`: string IATA code (output dimension, groupable, sortable)</li>
<li>`feeding_unwto_region`: integer UNWTO code (output dimension, groupable, sortable)</li>
<li>`feeding_unwto_subregion`: integer UNWTO code (output dimension, groupable, sortable)</li>
<li>`group_by`: string ','-list of dimensions to group by (optional)</li>
<li>`international`: integer '0' for domestic, '1' for international (output dimension, groupable, sortable)</li>
<li>`month_or_week_number`: integer according to the period type of start param (output dimension, groupable, sortable)</li>
<li>`operating_carrier`: string 2-letter IATA code, or if not available ICAO code of leg operating carrier (output dimension, groupable, sortable)</li>
<li>`operating_carrier_id`: string internal persistent id (output dimension, groupable, sortable)</li>
<li>`operating_carrier_label`: string corresponding to id (output dimension, groupable, sortable)</li>
<li>`page`: integer page number to be displayed (optional, 0 by default, see page_size)</li>
<li>`page_size`: integer number of results to be returned per 'page' (optional default 100)</li>
<li>`post_de_feeding_airline_ssim`: string 2-letter IATA code, or if not available ICAO code of leg+2 operating carrier (output dimension, groupable, sortable)</li>
<li>`postdefeeding_airport`: string IATA code (output dimension, groupable, sortable)</li>
<li>`postdefeeding_city`: string IATA code (output dimension, groupable, sortable)</li>
<li>`postdefeeding_country`: string IATA code (output dimension, groupable, sortable)</li>
<li>`postdefeeding_unwto_region`: integer UNWTO code (output dimension, groupable, sortable)</li>
<li>`postdefeeding_unwto_subregion`: integer UNWTO code (output dimension, groupable, sortable)</li>
<li>`pre_feeding_airline_ssim`: string 2-letter IATA code, or if not available ICAO code of leg-2 operating carrier (output dimension, groupable, sortable)</li>
<li>`prefeeding_airport`: string IATA code (output dimension, groupable, sortable)</li>
<li>`prefeeding_city`: string IATA code (output dimension, groupable, sortable)</li>
<li>`prefeeding_country`: string IATA code (output dimension, groupable, sortable)</li>
<li>`prefeeding_unwto_region`: integer UNWTO code (output dimension, groupable, sortable)</li>
<li>`prefeeding_unwto_subregion`: integer UNWTO code (output dimension, groupable, sortable)</li>
<li>`sort_by`: string dimension to sort by (optional)</li>
<li>`sort_dir`: integer either 0 (descending) or 1 (ascending) (optional, 1 by default)</li>
<li>`start`: string first period (YYYY-MM or YYYY-Www) of departure date range (mandatory)</li>
<li>`stopovers`: integer or ','-sep list of integers (output dimension, groupable, sortable)</li>
<li>`traffic_estimation`: integer (output dimension, summed, sortable)</li>
<li>`traffic_estimation_business`: integer (output dimension, summed, sortable)</li>
<li>`traffic_estimation_economy`: integer (output dimension, summed, sortable)</li>
<li>`traffic_estimation_first`: integer (output dimension, summed, sortable)</li>
</ul>

Besides those, the Flights API allows to filter, sort and group by any parameter.

Filter example: departure_city=FRA&arrival_country=US&operating_carrier==LH&traffic_estimation_first=>0
Sort example: sort_by=traffic_estimation
Group example: group_by=dominant_airline,arrival_city

Example:

    api/air_traffic_hubs?page_size=5&departure_airport=MAD&arrival_city=FRA&start=2016-02&end=&sort_by=traffic_estimation&sort_dir=0

    {
    "air_traffic_hubs": [
        {
            "items": [
                {
                    "arrival_airport": "FRA", 
                    "arrival_city": "FRA", 
                    "arrival_country": "DE", 
                    "arrival_unwto_region": 4, 
                    "arrival_unwto_subregion": 44, 
                    "de_feeding_airline_ssim": "", 
                    "defeeding_airport": "", 
                    "defeeding_city": "", 
                    "defeeding_country": "", 
                    "defeeding_unwto_region": null, 
                    "defeeding_unwto_subregion": null, 
                    "departure_airport": "MAD", 
                    "departure_city": "MAD", 
                    "departure_country": "ES", 
                    "departure_date": "2016-02", 
                    "departure_unwto_region": 4, 
                    "departure_unwto_subregion": 43, 
                    "departure_year": 2016, 
                    "feeding_airline_ssim": "", 
                    "feeding_airport": "", 
                    "feeding_city": "", 
                    "feeding_country": "", 
                    "feeding_unwto_region": null, 
                    "feeding_unwto_subregion": null, 
                    "international": true, 
                    "month_or_week_number": 2, 
                    "operating_carrier": "LH", 
                    "operating_carrier_id": "air-lufthansa", 
                    "operating_carrier_label": "Lufthansa (LH/DLH)", 
                    "post_de_feeding_airline_ssim": "", 
                    "postdefeeding_airport": "", 
                    "postdefeeding_city": "", 
                    "postdefeeding_country": "", 
                    "postdefeeding_unwto_region": null, 
                    "postdefeeding_unwto_subregion": null, 
                    "pre_feeding_airline_ssim": "", 
                    "prefeeding_airport": "", 
                    "prefeeding_city": "", 
                    "prefeeding_country": "", 
                    "prefeeding_unwto_region": null, 
                    "prefeeding_unwto_subregion": null, 
                    "stopovers": 0, 
                    "traffic_estimation": 7146, 
                    "traffic_estimation_business": 357, 
                    "traffic_estimation_economy": 6789, 
                    "traffic_estimation_first": 0
                }, 
                {
                    "arrival_airport": "FRA", 
                    "arrival_city": "FRA", 
                    "arrival_country": "DE", 
                    "arrival_unwto_region": 4, 
                    "arrival_unwto_subregion": 44, 
                    "de_feeding_airline_ssim": "", 
                    "defeeding_airport": "", 
                    "defeeding_city": "", 
                    "defeeding_country": "", 
                    "defeeding_unwto_region": null, 
                    "defeeding_unwto_subregion": null, 
                    "departure_airport": "MAD", 
                    "departure_city": "MAD", 
                    "departure_country": "ES", 
                    "departure_date": "2016-02", 
                    "departure_unwto_region": 4, 
                    "departure_unwto_subregion": 43, 
                    "departure_year": 2016, 
                    "feeding_airline_ssim": "", 
                    "feeding_airport": "", 
                    "feeding_city": "", 
                    "feeding_country": "", 
                    "feeding_unwto_region": null, 
                    "feeding_unwto_subregion": null, 
                    "international": true, 
                    "month_or_week_number": 2, 
                    "operating_carrier": "LA", 
                    "operating_carrier_id": "air-lan-airlines", 
                    "operating_carrier_label": "LATAM Chile (LA/LAN)", 
                    "post_de_feeding_airline_ssim": "", 
                    "postdefeeding_airport": "", 
                    "postdefeeding_city": "", 
                    "postdefeeding_country": "", 
                    "postdefeeding_unwto_region": null, 
                    "postdefeeding_unwto_subregion": null, 
                    "pre_feeding_airline_ssim": "", 
                    "prefeeding_airport": "", 
                    "prefeeding_city": "", 
                    "prefeeding_country": "", 
                    "prefeeding_unwto_region": null, 
                    "prefeeding_unwto_subregion": null, 
                    "stopovers": 0, 
                    "traffic_estimation": 5823, 
                    "traffic_estimation_business": 291, 
                    "traffic_estimation_economy": 5532, 
                    "traffic_estimation_first": 0
                }
            ], 
            "totals": {
                "linecount": 850, 
                "traffic_estimation": 45891, 
                "traffic_estimation_business": 2387, 
                "traffic_estimation_economy": 43436, 
                "traffic_estimation_first": 68
            }
        }
    ], 
    "meta": {
        "export_links": {
            "csv": "..api/air_traffic_hubs?page_size=5&departure_airport=MAD&arrival_city=FRA&start=2016-02&end=&sort_by=traffic_estimation&sort_dir=0&export=csv"
        }, 
        "pagination": {
            "page": 1, 
            "page_size": 5, 
            "total": 850
        }
    }
}

