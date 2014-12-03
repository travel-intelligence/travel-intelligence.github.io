---
layout: post
title: PriceBenchmark API - FareProjection
excerpt: Prices for a specific travel date range and O&D for a set of pricing parameters
categories: api-travel_agency-price_benchmark
---

Prices for a specific travel date range and O&D for a set of pricing parameters.

The API takes the following parameters:
* `auth_token`: string (mandatory). Authentication token.
* `customer`: string (mandatory). OfficeID to be queried.
* `faretype` or `filetype`: string (mandatory). Public or private fares to be queried.
* `origin`: string (mandatory). Origin city.
* `destination`: string (mandatory). Destination city.
* `travel_start`: integer (mandatory). First travel start date to use. Format YYYYMMDD
* `travel_end`: integer (mandatory). Last travel start date to use. Format YYYYMMDD
* `cabinclass`: string (mandatory). Cabin class to be queried.
* `tripduration`: integer (mandatory). Trip duration to be queried.
* `advancedpurchasedays`: integer (mandatory). Advanced purchase to query.
* `airline`: string list (optional). Can be used to reduce the results to specified airlines.
* `summary_type`: string (optional). Used to specify aggregation level ("daily", "monthly", "quarterly") Default: "daily"

The output is a [JSON-api](http://jsonapi.org/format/) object with the following structure :

	{
		"fareprojection": 
			[<fareprojection entry>], 
		"meta": 
			{
				"export_links": 
					{
						"csv": "https://qsi.travel-intelligence.com/ti-faremonitoring/api/fareprojection?travel_start=20140221&travel_end=20140819&customer=FRAL122KB&filetype=public&origin=FRA&destination=BKK&cabinclass=M&tripduration=2&advancedpurchasedays=0&summary_type=Daily&threshold=30&depweekdays=1%2C2%2C3%2C4%2C5%2C6%2C7&auth_token=TW54nWyuYAYN2RigcpQN&export=csv"
					}, 
				"request_args": 
					{
						"advancedpurchasedays": "0", 
						"auth_token": "TW54nWyuYAYN2RigcpQN", 
						"cabinclass": "M", 
						"customer": "FRAL122KB", 
						"depweekdays": "1,2,3,4,5,6,7", 
						"destination": "BKK", 
						"filetype": "public", 
						"origin": "FRA", 
						"summary_type": "Daily", 
						"threshold": "30", 
						"travel_end": "20140819", 
						"travel_start": "20140221", 
						"tripduration": "2"
					}
			}
	}

Where `<fareprojection entry>` represents a result for each found airline (see parameter 'advancedpurchase'):

    {
        "airline": "AB", 
        "avg_total_fare": 1086.55, 
        "results": 
            [
                {
                    "advanced_purchase": 0, 
                    "airline": "AB", 
                    "cabin_class": "M", 
                    "dep_date": 20140221, 
                    "eft": "13:55/15:25", 
                    "fare_basis": "QLRCRTDE/MLRTDE", 
                    "fuel_q": 30.0, 
                    "fuel_yq": 420.0, 
                    "interpolated": true, 
                    "itinerary": "FRA-AUH-BKK/BKK-AUH-FRA", 
                    "net_fare": 445.0, 
                    "query_date": 20140221, 
                    "ret_date": 20140223, 
                    "surcharge": 0.0, 
                    "taxes": 516.84, 
                    "total_fare": 961.84, 
                    "trip_duration": 2
                }
            ]
    }

The results list contains one entry for each matching day in the queried period. Eventual gaps are filled with interpolated entries and will be marked as interpolated true in the result entry.

Note: Please note that in summary modes monthly and quarterly no interpolations will be performed.
