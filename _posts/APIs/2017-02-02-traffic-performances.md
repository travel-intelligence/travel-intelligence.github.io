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
                    "capacity_airline": 35326, 
                    "capacity_total": 124728, 
                    "capash": 28.0, 
                    "dest": "MAD", 
                    "freqsh": 28.0, 
                    "frequency_airline": 203, 
                    "frequency_total": 725, 
                    "orig": "PAR", 
                    "traffic_airline": 29400, 
                    "traffic_total": 108385, 
                    "trafsh": 27.0
                }, 
                {
                    "capacity_airline": 6310, 
                    "capacity_total": 6310, 
                    "capash": 100.0, 
                    "dest": "RIO", 
                    "freqsh": 100.0, 
                    "frequency_airline": 23, 
                    "frequency_total": 23, 
                    "orig": "MAD", 
                    "traffic_airline": 5190, 
                    "traffic_total": 5190, 
                    "trafsh": 100.0
                }
            ], 
            "level": "city", 
            "month": "2016-10"
        }
    ]
}
