---
layout: post
title: Schedule Analysis API - Slots
excerpt: Activity at an hub airport at one day
---

Activity at an hub airport at one day

The API understands the following parameters:
* `end`: integer last date (YYYYMMDD) of requested period
* `hub`: string IATA airport code
* `slot_size`: integer Size of slot in minutes, defaults to 15
* `start`: integer first date (YYYYMMDD )of requested period

Example:

    api/slots?start=20141130&end=20141130&hub=NCE&slot_size=360

    {
    "meta": {
        "export_links": {
            "csv": "..api/slots?start=20141130&end=20141130&hub=NCE&slot_size=360&export=csv"
        }
    }, 
    "slots": [
        {
            "end": "6:00", 
            "start": "0:00"
        }, 
        {
            "end": "12:00", 
            "inbound": [
                {
                    "airline": "TP", 
                    "airport": "LIS", 
                    "arr_time": 1110, 
                    "block_time": 110, 
                    "dep_time": 740, 
                    "destination_terminal": "1", 
                    "flight_number": 486, 
                    "origin_terminal": "1", 
                    "week": 48
                }, 
                {
                    "airline": "AZ", 
                    "airport": "FCO", 
                    "arr_time": 1100, 
                    "block_time": 75, 
                    "dep_time": 945, 
                    "destination_terminal": "2", 
                    "flight_number": 348, 
                    "origin_terminal": "1", 
                    "week": 48
                }
            ], 
            "outbound": [
                {
                    "airline": "TP", 
                    "airport": "LIS", 
                    "arr_time": 1330, 
                    "block_time": 200, 
                    "dep_time": 1150, 
                    "destination_terminal": "1", 
                    "flight_number": 483, 
                    "origin_terminal": "1", 
                    "week": 48
                }, 
                {
                    "airline": "AZ", 
                    "airport": "FCO", 
                    "arr_time": 1300, 
                    "block_time": 70, 
                    "dep_time": 1150, 
                    "destination_terminal": "1", 
                    "flight_number": 343, 
                    "origin_terminal": "2", 
                    "week": 48
                }
            ], 
            "start": "6:00"
        }
    ]
}
