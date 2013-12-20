---
layout: post
title: Travel Agency Booking Analysis APIs
excerpt: Number of booked passengers during to a booking or a departure period of time
---

Distribution of passengers bookings according to several criteria.

## Available analysis

Five resources are available for booking analysis, listed by their relation type (see the [API v1 profile](/2013/09/21/api-v1-profile.html) to get corresponding url):
* [`q_booking_agency_total`](/2013/12/17/booking-analysis-total.html): total number of booked passengers for the agency, the competition and the whole market
* [`q_booking_agency_evolution`](/2013/12/17/booking-analysis-evolution.html): timeserie of the number of booked passengers for the agency, the competition and the whole market.
* [`q_booking_agency_onds`](/2013/12/17/booking-analysis-top-onds.html): top 50 origin-destination pairs according to the number of booked passengers for the agency type given in `sort_by`
* [`q_booking_agency_airlines`](/2013/12/17/booking-analysis-top_airlines.html): top 50 marketing carriers according to the number of booked passengers for the agency type given in `sort_by`
* [`q_booking_agency_countries`](/2013/12/17/booking-analysis-top-countries.html): top 20 point of sale countries according to the number of booked passengers for the agency type given in `sort_by`

## Parameters

Passenger bookings are analyzed over a period of time, either the booking time (time the booking was performed) or the departure time.
One of the two following parameters must be given:
* `booking_period`: to select the bookings that were performed during a period
* `departure_period`: to select the bookings for flights leaving during a period

This parameters can take either a year (yyyy), a quarter (yyyy-Qq, eg. 2012-Q1), a month (yyyy-mm), a week (yyyy-Www, eg. 2012-W42) or, for `departure_period` only, a day (yyyy-mm-dd).

To compare bookings over different periods, these parameters accept several values.
For instance to compare bookings made in February 2013 with bookings made in February 2012, pass the parameter `?booking_period=2012-02,2013-02`.
It is possible to consider only the beginnign of a period with the following parameter:

* `limit_in_days`: number of days to consider from the start of the period.

This is useful to compare the bookings of the current month with the bookings on the previous year.
For instance to compare the bookings made in February 2013 from the 1st to the 10th with the bookings made in February 2012 on the same period, pass the parameters : `?booking_period=2012-02,2013-02&limit_in_days=10`.


The following optional parameters can be specified to filter the search:
* `origin_city`, `origin_port`, `origin_country`: IATA code of the departure city, departure airport or departure country of the O&D respectively
* `destination_city`, `destination_port`, `destination_country` : IATA code of the arrival city, arrival airport or arrival country of the O&D respectively
* `pos_oid`: office id of the point of sale
* `pos_country`: country IATA code of the point of sale
* `marketing_carrier`: IATA code of the marketing carrier
* `cabin_class`: 1-letter code for the cabin class
* `sort_by`: agency types taken as sort criterion for `top_onds`, `top_airlines` and `top_countries`. It is one of the agency types (ie. either `travel_agency`, `competition` or `market`), default value is `travel_agency`


