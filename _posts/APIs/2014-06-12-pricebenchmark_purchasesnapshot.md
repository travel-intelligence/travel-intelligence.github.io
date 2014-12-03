---
layout: post
title: PriceBenchmark API - PurchaseSnapshot
excerpt: Prices for a specific Travel date to determine the best time to book
categories: api-travel_agency-price_benchmark
---

Prices for a specific Travel date to determine the best time to book.

The API takes the following parameters:
* `auth_token`: string (mandatory). Authentication token.
* `customer`: string (mandatory). OfficeID to be queried.
* `faretype` or `filetype`: string (mandatory). Public or private fares to be queried.
* `origin`: string (mandatory). Origin city.
* `destination`: string (mandatory). Destination city.
* `travel_start`: integer (mandatory). First travel start date to use. Format YYYYMMDD
* `cabinclass`: string (mandatory). Cabin class to be queried.
* `tripduration`: integer (mandatory). Trip duration to be queried.
* `airline`: string list (optional). Can be used to reduce the results to specified airline codes.
* `depweekdays`: integer list (optional). Can be used to reduce the results to specified week days (1-7, monday-sunday).
* `summary_type`: string (optional). Used to specify aggregation level ("daily", "monthly", "quarterly") Default: "daily"

The output is a [JSON-api](http://jsonapi.org/format/) object with the following structure :

	{
		"purchasesnapshot": 
			[<purchasesnapshot entry>], 
		"meta":
			{
				"export_links": 
					{
						"csv": "https://qsi.travel-intelligence.com/ti-faremonitoring/api/purchasesnapshot?travel_start=20140520&customer=FRAL122KB&filetype=public&origin=FRA&destination=BKK&cabinclass=M&tripduration=2&threshold=0&auth_token=TW54nWyuYAYN2RigcpQN&export=csv"
					}, 
				"request_args": 
					{
						"auth_token": "TW54nWyuYAYN2RigcpQN", 
						"cabinclass": "M", 
						"customer": "FRAL122KB", 
						"destination": "BKK", 
						"filetype": "public", 
						"origin": "FRA", 
						"threshold": "0", 
						"travel_start": "20140520", 
						"tripduration": "2"
					}
			}
	}

Where `<purchasesnapshot entry>` represents a result for each found airline:

    {
        "airline": "AB", 
        "results": 
            [
                {
                    "advanced_purchase": 88, 
                    "airline": "AB", 
                    "cabin_class": "M", 
                    "dep_date": 20140520, 
                    "eft": "14:50/15:25", 
                    "fare_basis": "KLFFRTDE/KLRTDE", 
                    "fuel_q": 0.0, 
                    "fuel_yq": 280.0, 
                    "interpolated": false, 
                    "itinerary": "FRA-AUH-BKK/BKK-AUH-FRA", 
                    "net_fare": 670.0, 
                    "query_date": 20140221, 
                    "ret_date": 20140522, 
                    "surcharge": 0.0, 
                    "taxes": 376.99, 
                    "total_fare": 1046.99, 
                    "trip_duration": 2
                }
            ]
    }

The results list contains one entry for each matching advancedpurchase period. Eventual gaps are filled with interpolated entries and will be marked as interpolated true in the result entry.

Note: Please note that in summary modes monthly and quarterly no interpolations will be performed.
