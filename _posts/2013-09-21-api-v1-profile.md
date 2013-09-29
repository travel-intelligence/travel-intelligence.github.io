---
layout: post
title: API v1 profile
excerpt: The profile link relation type (RFC6906)
---

The Travel Intelligence API v1 follows the specification of the 'profile'
link relation type, as specified by [RFC6906](http://tools.ietf.org/html/rfc6906):

    $ curl -v https://demo.travel-intelligence.com/api/v1
    HTTP/1.1 200 OK
    Link: <http://dev.travel-intelligence.com/profile>; rel="profile"
    Content-Type: application/json; charset=utf-8

The `Link` HTTP header indicates that the representations exchanged with the API
are following a [profile](http://dev.travel-intelligence.com/profile).
In our case, it is the `URL` of a textual representation of the constraints,
conventions and extensions on top of the [JSONAPI](http://jsonapi.org/)
specification.
