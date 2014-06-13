---
layout: post
title: PriceBenchmark API - AdvancedPurchase
excerpt: Comparison of advanced purchase periods
---

Queries fares according to the advancedpurchase parameters.

The API takes the following parameters:
* `auth_token`: string (mandatory). Authentication token
* `customer`: string (mandatory). OfficeID to be queried.
* `faretype` or `filetype`: string (mandatory). Public or private fares to be queried ("public" or "private") Default: "public"
* `origin`: string (mandatory). Origin city.
* `destination`: string (mandatory). Destination city.
* `travel_start`: integer (mandatory). First travel start date to use. Format YYYYMMDD
* `travel_end`: integer (mandatory). Last travel start date to use. Format YYYYMMDD
* `cabinclass`: string (mandatory). Cabin class to be queried.
* `tripduration`: integer (mandatory). Trip duration to be queried.
* `advancedpurchasedays`: integer list (mandatory). Advanced purchases to query.
* `airline`: string (mandatory). Airline code to be queried.
* `depweekdays`: integer list (optional). Can be used to reduce the results to specified week days (1-7, monday-sunday).
* `export`: string (optional). Used to force CSV results to be returned. ("csv") Default: JSON if parameter omitted
* `summary_type`: string (optional). Used to specify aggregation level ("daily", "monthly", "quarterly") Default: "daily"

The output is a [JSON-api](http://jsonapi.org/format/) object with the following structure :

	{
		"advancedpurchase": 
			[<advancedpurchase entry>], 
		"meta": 
			{
				"export_links": 
					{
						"csv": "https://qsi.travel-intelligence.com/ti-faremonitoring/api/advancedpurchase?travel_start=20140221&travel_end=20140819&customer=FRAL122KB&filetype=public&origin=FRA&destination=BKK&cabinclass=M&tripduration=2&summary_type=Daily&advancedpurchasedays=0%2C7&airline=LH&depweekdays=1%2C2%2C3%2C4%2C5%2C6%2C7&auth_token=TW54nWyuYAYN2RigcpQN&export=csv"
					}, 
				"request_args": 
					{
						"advancedpurchasedays": "0,7", 
						"airline": "LH", 
						"auth_token": "TW54nWyuYAYN2RigcpQN", 
						"cabinclass": "M", 
						"customer": "FRAL122KB", 
						"depweekdays": "1,2,3,4,5,6,7", 
						"destination": "BKK", 
						"filetype": "public", 
						"origin": "FRA", 
						"summary_type": "Daily", 
						"travel_end": "20140819", 
						"travel_start": "20140221", 
						"tripduration": "2"
					}
			}
	}

Where `<advancedpurchase entry>` represents a result for each queried purchase period (see parameter 'advancedpurchase'):

				{
					"avg_total_fare": 2352.74, 
					"days": 0, 
					"results": 
						[
							{
								"advanced_purchase": 0, 
								"airline": "LH", 
								"cabin_class": "M", 
								"dep_date": 20140221, 
								"eft": "10:10/12:10", 
								"fare_basis": "Y77RT/VHRCDE", 
								"fuel_q": 0.0, 
								"fuel_yq": 284.0, 
								"interpolated": false, 
								"itinerary": "FRA-BKK/BKK-FRA", 
								"net_fare": 2699.0, 
								"query_date": 20140221, 
								"ret_date": 20140223, 
								"surcharge": 0.0, 
								"taxes": 380.99, 
								"total_fare": 3079.99, 
								"trip_duration": 2
							}
						]
				}

The results list contains one entry for each matching day in the queried period. Eventual gaps are filled with interpolated entries and will be marked as interpolated true in the result entry.

Note: Please note that in summary modes monthly and quarterly no interpolations will be performed.
