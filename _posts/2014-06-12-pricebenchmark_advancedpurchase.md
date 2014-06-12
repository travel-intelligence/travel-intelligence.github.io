---
layout: post
title: PriceBenchmark API - AdvancedPurchase
excerpt: Comparison of advanced purchase periods
---

Queries fares according to the advancedpurchase parameters.

The API takes the following parameters:
* `customer`: string (mandatory). OfficeID to be queried.
* `filetype`: string (mandatory). Public or private fares to be queried.
* `origin`: string (mandatory). Origin city.
* `destination`: string (mandatory). Destination city.
* `travelstart`: integer (mandatory). First travel start date to use. Format YYYYMMDD
* `travelend`: integer (mandatory). Last travel start date to use. Format YYYYMMDD
* `cabinclass`: string (mandatory). Cabin class to be queried.
* `tripduration`: integer (mandatory). Trip duration to be queried.
* `advancedpurchase`: integer list (mandatory). Advanced purchases to query.
* `airline`: string (mandatory). Airline code to be queried.

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
