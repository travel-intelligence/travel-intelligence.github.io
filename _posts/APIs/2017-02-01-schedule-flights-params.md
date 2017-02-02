---
layout: post
title: Schedule Analysis API - Flights Params
excerpt: Indicates the availability of schedule data
categories: api-airline-schedule_analysis
---

Indicates the availability of schedule data

The API takes no parameters.

Example:

    api/flights_params

    {
    "flights_params": [
        {
            "avail_first_date": "2010-01-01", 
            "avail_first_date_connections": "2010-01-01", 
            "avail_first_week": "2009-W53", 
            "avail_last_date": "2018-01-24", 
            "avail_last_date_connections": "2017-08-05", 
            "avail_last_week": "2018-W04", 
            "first_date": "2010-01-01", 
            "first_date_connections": "2010-01-01", 
            "first_week": "2009-W53", 
            "last_date": "2018-01-24", 
            "last_date_connections": "2017-08-05", 
            "last_week": "2018-W04", 
            "schedule_qsi": 0, 
            "schedule_source": "reconciled", 
            "version": "0.11.23"
        }
    ]
}
