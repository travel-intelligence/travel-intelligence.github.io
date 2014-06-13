---
layout: post
title: PriceBenchmark API - BestPriceAirline
excerpt: Comparison of airline fares
---

Returns airline fares for comparison according to the requested parameters.

The API takes the following parameters:
* `auth_token`: string (mandatory). Authentication token
* `customer`: string (mandatory). OfficeID to be queried.
* `faretype` or `filetype`: string (mandatory). Public or private fares to be queried.
* `origin`: string (mandatory). Origin city.
* `destination`: string (mandatory). Destination city.
* `travel_start`: integer (mandatory). First travel start date to use. Format YYYYMMDD
* `travel_end`: integer (mandatory). Last travel start date to use. Format YYYYMMDD
* `cabinclass`: string (mandatory). Cabin class to be queried.
* `tripduration`: integer (mandatory). Trip duration to be queried.
* `advancedpurchasedays`: integer list (mandatory). Advanced purchases to query.
* `airline`: string list (optional). Can be used to reduce the results to specified airlines.
* `depweekdays`: integer list (optional). Can be used to reduce the results to specified week days (1-7, monday-sunday).
* `export`: string (optional). Used to force CSV results to be returned. ("csv") Default: JSON if parameter omitted

The output is a [JSON-api](http://jsonapi.org/format/) object with the following structure :




	{
		"bestpriceairline": 
			[<bestpriceairline entry>], 
		"meta": 
			{
				"export_links": 
					{
						"csv": "https://qsi.travel-intelligence.com/ti-faremonitoring/api/bestpriceairline?travel_start=20140221&travel_end=20140819&customer=FRAL122KB&filetype=public&origin=FRA&destination=BKK&cabinclass=M&tripduration=2&advancedpurchasedays=0&depweekdays=1%2C2%2C3%2C4%2C5%2C6%2C7&auth_token=TW54nWyuYAYN2RigcpQN&export=csv"}, 
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
								"travel_end": "20140819", 
								"travel_start": "20140221", 
								"tripduration": "2"
							}
					}
			}

Where `<bestpriceairline entry>` represents a result for each airline in the result (see parameter 'airline' to reduce the output):

			{
				"airline": "TG", 
				"average": 1110.86, 
				"evolution": 
					[
						{
							"advanced_purchase": 0, 
							"airline": "TG", 
							"cabin_class": "M", 
							"dep_date": 20140221, 
							"eft": "10:10/11:50", 
							"fare_basis": "WK6MDE", 
							"fuel_q": 0.0, 
							"fuel_yq": 288.44, 
							"interpolated": false, 
							"itinerary": "FRA-BKK/BKK-FRA", 
							"net_fare": 469.0, 
							"query_date": 20140221, 
							"ret_date": 20140223, 
							"surcharge": 0.0, 
							"taxes": 385.43, 
							"total_fare": 854.43, 
							"trip_duration": 2
						}
					], 
				"first": 67, 
				"high": 4623.17, 
				"index": 0, 
				"low": 799.92, 
				"rest": 9, 
				"second": 4, 
				"third": 3, 
				"total": 83
			}

The evolution list contains one entry for each matching day in the queried period. Eventual gaps are filled with interpolated entries and will be marked as interpolated true in the result entry.
