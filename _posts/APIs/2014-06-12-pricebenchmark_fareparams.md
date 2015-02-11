---
layout: post
title: PriceBenchmark API - FareParams
excerpt: Query possible params
categories: api-travel_agency-price_benchmark
---

Returns a list of possible parameters to query the web service. This is
necessary because the available data depends on the queries defined
in the underlying data extraction process.

The API takes the following parameters:
* `faretype` or `filetype`: string (mandatory). Public or private fares to be queried.

The output is a [JSON-api](http://jsonapi.org/format/) object with the following structure :

	{
		"fareparams": 
			[<fareparam entry>], 
		"meta": 
			{
				"export_links": 
					{
						"csv": "https://qsi.travel-intelligence.com/ti-faremonitoring/api/fareparams?faretype=private&export=csv"
					}, 
				"request_args": 
					{
						"faretype": "private"
					}
			}
	}


Where `<fareparam entry>` represents a result for each possible parameter combination:

	{
		"cabinclass": "C", 
		"countrycode": "DE", 
		"destination": "BKK", 
		"details": 
			[
				{
					"advancedpurchase": 0, 
					"airline": 
						[
							"LH"
						]
				}
			], 
		"faretype": "private", 
		"firstdepdate": 20140204, 
		"firstquerydate": 20140203, 
		"lastquerydate": 20140520, 
		"lastretdate": 20140824, 
		"maxadvancedpurchase": 89, 
		"minadvancedpurchase": 1, 
		"od": "FRA-LON", 
		"officeid": "FRAL122KB", 
		"origin": "FRA", 
		"tripduration": 7
	}

The details list contains possible advancedpurchase / airline combinations.
