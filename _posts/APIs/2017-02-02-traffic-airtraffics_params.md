---
layout: post
title: Traffic Analysis API - Params
excerpt: Returns data validity periods for usage in subsequent API calls.
categories: api-airline-traffic_analysis
---

Returns data validity periods for usage in subsequent API calls.

The API takes no parameters.

Example:

    api/airtraffics_params

    {
    "airtraffics_params": [
        {
            "avail_first_month_cnx": "2010-01", 
            "avail_first_month_flights": "2010-01", 
            "avail_first_month_perf": "2010-01", 
            "avail_first_week_cnx": "2010-W01", 
            "avail_last_month_cnx": "2016-12", 
            "avail_last_month_flights": "2016-12", 
            "avail_last_month_perf": "2016-10", 
            "avail_last_week_cnx": "2016-W52", 
            "db": "traffic_generic", 
            "first_month": "2010-01", 
            "first_month_performances": "2010-01", 
            "first_week": "2010-W01", 
            "last_month": "2016-12", 
            "last_month_performances": "2016-10", 
            "last_week": "2016-W52", 
            "version": "0.1.44"
        }
    ]
}
