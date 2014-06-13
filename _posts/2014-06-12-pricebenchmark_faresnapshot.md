---
layout: post
title: PriceBenchmark API - AdvancedPurchase
excerpt: Comparison of advanced purchase periods
---

Queries fares according to the advancedpurchase parameters.

The API takes the following parameters:
* `auth_token`: string (mandatory). Authentication token.
* `customer`: string (mandatory). OfficeID to be queried.
* `faretype` or `filetype`: string (mandatory). Public or private fares to be queried.
* `origin`: string (mandatory). Origin city.
* `destination`: string (mandatory). Destination city.
* `booking_start`: integer (mandatory). Pricing date to use. Format YYYYMMDD
* `travel_start`: integer (mandatory). First travel start date to use. Format YYYYMMDD
* `travel_end`: integer (mandatory). Last travel start date to use. Format YYYYMMDD
* `cabinclass`: string (mandatory). Cabin class to be queried.
* `tripduration`: integer (mandatory). Trip duration to be queried.
* `airline`: string list (optional). Can be used to reduce the results to given airline codes.
* `summary_type`: string (optional). Used to specify aggregation level ("daily", "monthly", "quarterly") Default: "daily"

The output is a [JSON-api](http://jsonapi.org/format/) object with the following structure :

	{
		"faresnapshot": 
			[<faresnapshot entry>], 
		"meta": 
			{
				"export_links": 
					{
						"csv": "https://qsi.travel-intelligence.com/ti-faremonitoring/api/faresnapshot?travel_start=20140221&travel_end=20140819&booking_start=20140520&booking_end=20140520&customer=FRAL122KB&filetype=public&origin=FRA&destination=BKK&cabinclass=M&tripduration=2&threshold=30&airline=&depweekdays=1%2C2%2C3%2C4%2C5%2C6%2C7&auth_token=TW54nWyuYAYN2RigcpQN&export=csv"
					}, 
				"request_args": 
					{
						"airline": "", 
						"auth_token": "TW54nWyuYAYN2RigcpQN", 
						"booking_end": "20140520", 
						"booking_start": "20140520", 
						"cabinclass": "M", 
						"customer": "FRAL122KB", 
						"depweekdays": "1,2,3,4,5,6,7", 
						"destination": "BKK", 
						"filetype": "public", 
						"origin": "FRA", 
						"threshold": "30", 
						"travel_end": "20140819", 
						"travel_start": "20140221", 
						"tripduration": "2"
					}
			}
	}

Where `<faresnapshot entry>` represents a result for each found airline:

    {
        "airline": "AB", 
        "results": 
            [
                {
                    "advanced_purchase": 0, 
                    "airline": "AB", 
                    "cabin_class": "M", 
                    "dep_date": 20140520, 
                    "eft": "14:50/15:25", 
                    "fare_basis": "KLFFRTDE/KLRTDE", 
                    "fuel_q": 0.0, 
                    "fuel_yq": 280.0, 
                    "interpolated": false, 
                    "itinerary": "FRA-AUH-BKK/BKK-AUH-FRA", 
                    "net_fare": 690.0, 
                    "query_date": 20140520, 
                    "ret_date": 20140522, 
                    "surcharge": 0.0, 
                    "taxes": 376.97, 
                    "total_fare": 1066.97, 
                    "trip_duration": 2
                }
            ]
    }

The results list contains one entry for each matching day in the queried period. Eventual gaps are filled with interpolated entries and will be marked as interpolated true in the result entry.

Note: Please note that in summary modes monthly and quarterly no interpolations will be performed.
