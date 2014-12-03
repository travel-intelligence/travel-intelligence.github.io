---
layout: post
title: Search hits APIs
excerpt: Resources for querying search hits statistics
categories: api-search_analysis
---

There are four resources available for querying search hits statistics,
listed here by their relation type:
* `q_search_look`: number of search hits by look date
* `q_search_travel`: number of search hits by travel date
* `q_search_evolution`: time series of number of search hits
* `q_search_variation`: variations of number of hits between two periods

The representation of all datasets follows the
[JSON-stat](http://json-stat.org/) standard.
The only exception is the ability to refer to dimension descriptions through
[JSONAPI](http://jsonapi.org/) `links` instead of `uri` attributes.
