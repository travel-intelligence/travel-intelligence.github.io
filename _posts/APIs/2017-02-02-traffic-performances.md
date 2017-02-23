---
layout: post
title: Traffic Analysis API - Performances
excerpt: Traffic Analytics - Airline Performances
categories: api-airline-traffic_analysis
---

Traffic Analytics - Airline Performances

The API understands the following parameters:
<ul>
<li>`carrier`: string Airline code (mandatory)</li>
<li>`fmonth`: string first month (YYYY-MM) (mandatory)</li>
<li>`level`: string 'city' or 'airp' (mandatory)</li>
<li>`lmonth`: string last month (YYYY-MM) (mandatory)</li>
</ul>

Example:

    api/performances?carrier=IB&fmonth=2016-10&lmonth=2016-10&level=city

    {
    "performances": [
        {
            "carrier": "IB", 
            "id": "IB_2016-10_city", 
            "legs": [
                {
                    "capacity_airline": 728, 
                    "capacity_total": 728, 
                    "capash": 100.0, 
                    "dest": "PMI", 
                    "freqsh": 100.0, 
                    "frequency_airline": 9, 
                    "frequency_total": 9, 
                    "international": false, 
                    "orig": "ILD", 
                    "traffic_airline": 668, 
                    "traffic_total": 668, 
                    "trafsh": 100.0
                }, 
                {
                    "capacity_airline": 8848, 
                    "capacity_total": 21008, 
                    "capash": 42.0, 
                    "dest": "MAD", 
                    "freqsh": 43.0, 
                    "frequency_airline": 31, 
                    "frequency_total": 72, 
                    "international": true, 
                    "orig": "SDQ", 
                    "traffic_airline": 6507, 
                    "traffic_total": 16723, 
                    "trafsh": 39.0
                }
            ], 
            "level": "city", 
            "month": "2016-10"
        }
    ]
}
