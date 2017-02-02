---
layout: post
title: Schedule Analysis API - Slots
excerpt: Activity at an hub airport at one day
categories: api-airline-schedule_analysis
---

Activity at an hub airport at one day

The API understands the following parameters:
* `airline`: string IATA/ICAO code
* `end`: integer last date (YYYYMMDD) of requested period
* `export`: string either empty (json), 'csv' (csv export per flight) or 'slot_table' (csv export per slot)
* `hub`: string IATA airport code
* `slot_size`: integer Size of slot in minutes, defaults to 15
* `start`: integer first date (YYYYMMDD )of requested period
* `traffic_restriction`: integer either '0' (hide restricted flights) or '1' (show restricted flights)

Example:

    api/slots?start=20141130&end=20141130&hub=NCE&slot_size=360&airline=AF

    {
    "meta": {
        "export_links": {
            "csv": "..api/slots?start=20141130&end=20141130&hub=NCE&slot_size=360&airline=AF&export=csv", 
            "slot_table": "..api/slots?start=20141130&end=20141130&hub=NCE&slot_size=360&airline=AF&export=slot_table"
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
                    "airline": "AF", 
                    "airport": "ORY", 
                    "arr_time": 750, 
                    "block_time": 80, 
                    "dep_time": 630, 
                    "destination_terminal": "2", 
                    "flight_number": 6240, 
                    "origin_terminal": "W", 
                    "pattern": "      7"
                }, 
                {
                    "airline": "AF", 
                    "airport": "CDG", 
                    "arr_time": 845, 
                    "block_time": 90, 
                    "dep_time": 715, 
                    "destination_terminal": "2", 
                    "flight_number": 7700, 
                    "origin_terminal": "2F", 
                    "pattern": "      7"
                }
            ], 
            "outbound": [
                {
                    "airline": "AF", 
                    "airport": "CDG", 
                    "arr_time": 735, 
                    "block_time": 95, 
                    "dep_time": 600, 
                    "destination_terminal": "2F", 
                    "flight_number": 7707, 
                    "origin_terminal": "2", 
                    "pattern": "      7"
                }, 
                {
                    "airline": "AF", 
                    "airport": "TLV", 
                    "arr_time": 1100, 
                    "block_time": 215, 
                    "dep_time": 625, 
                    "destination_terminal": "3", 
                    "flight_number": 1794, 
                    "origin_terminal": "2", 
                    "pattern": "      7"
                }
            ], 
            "start": "6:00"
        }
    ]
}
