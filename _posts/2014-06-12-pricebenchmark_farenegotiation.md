---
layout: post
title: PriceBenchmark API - FareNegotiation
excerpt: Review of public and negotiated fares for a specific airline
---

Review of public and negotiated fares for a specific airline.

The API takes the following parameters:
* `auth_token`: string (mandatory). Authentication token
* `customer`: string (mandatory). OfficeID to be queried.
* `faretype` or `filetype`: string (mandatory). Public or private fares to be queried.
* `travel_start`: integer (mandatory). First travel start date to use. Format YYYYMMDD
* `travel_end`: integer (mandatory). Last travel start date to use. Format YYYYMMDD
* `advancedpurchasedays`: integer (mandatory). Advanced purchase to query.
* `depweekdays`: integer list (optional). Can be used to reduce the results to specified week days (1-7, monday-sunday).

The output is a [JSON-api](http://jsonapi.org/format/) object with the following structure :

	{
		"farenegotiation": 
			[<farenegotiation entry>], 
		"meta": 
			{
				"export_links": 
					{
						"csv": "https://qsi.travel-intelligence.com/ti-faremonitoring/api/farenegotiation?travel_start=20131011&travel_end=20140824&customer=FRAL122KB&filetype=public&advancedpurchasedays=0&depweekdays=1%2C2%2C3%2C4%2C5%2C6%2C7&auth_token=TW54nWyuYAYN2RigcpQN&export=csv"}, 
						"request_args": 
							{
								"advancedpurchasedays": "0", 
								"auth_token": "TW54nWyuYAYN2RigcpQN", 
								"customer": "FRAL122KB", 
								"depweekdays": "1,2,3,4,5,6,7", 
								"filetype": "public", 
								"travel_end": "20140824", 
								"travel_start": "20131011"
							}
					}
			}

Where `<farenegotiation entry>` represents a result for each found airline/O&D/cabin_class/advanced_purchase/trip_duration combination:

			{
				"airline": "LH", 
				"cabinclass": "C", 
				"destination": "BKK", 
				"origin": "FRA", 
				"private": 
					[
						{
							"dep_date": 20131011, 
							"eft": "10:40/11:15", 
							"fare_basis": "DASIA", 
							"fuel_q": 0.0, 
							"fuel_yq": 384.0, 
							"itinerary": "FRA-BKK/BKK-FRA", 
							"net_fare": 2750.0, 
							"surcharge": 0.0, 
							"taxes": 480.52, 
							"total_fare": 3230.52
						}
					], 
				"public": 
					[
						{
							"dep_date": 20131011, 
							"eft": "10:40/11:15", 
							"fare_basis": "DFFDE", 
							"fuel_q": 0.0, 
							"fuel_yq": 384.0, 
							"itinerary": "FRA-BKK/BKK-FRA", 
							"net_fare": 3579.0, 
							"surcharge": 0.0, 
							"taxes": 480.52, 
							"total_fare": 4059.52
						}
					], 
				"tripduration": 4
			}

The private and public lists contain one entry for each matching day in the queried period. Eventual gaps are NOT filled with interpolated entries. If both lists have no entry for a particular day it will be omitted.
