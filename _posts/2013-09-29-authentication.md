---
layout: post
title: Authentication
excerpt: Credentials and token-based authentication
---

Validation of credentials is done through the `session` resource, whose URL is
given by the `login` relation type at the API entry point:

    {
      "api": {
        ...
        "links": {
          "login": "https://demo.travel-intelligence.com/api/v1/session"
        }
      }
    }


The `JSON` resource representation is formatted as follows:

    {
      "session": {
        "email": "user@company.com",
        "password": "secret",
        "auth_token": "2TqLvAPc1HZMnUQVybko"
      }
    }

The client of the API must provide `email` and `password` for validation by
sending a HTTP POST request.
Upon successful authentication the service replies with an `auth_token`.

    $ curl -v https://demo.travel-intelligence.com/api/v1/session \
      -H 'Content-Type: application/json' \
      -H 'Accept: application/json' \
      --data-binary \
      '{"session":{"email":"user@company.com", "password":"secret"}}'

    HTTP/1.1 201 Created
    [...]

    {
      "session": {
        "email": "user@company.com",
        "auth_token": "2TqLvAPc1HZMnUQVybko"
      }
    }

The token has to be attached to the standard HTTP header `Authorization` in
every subsequent requests:

    Authorization: Token 2TqLvAPc1HZMnUQVybko

The HTTP error code `401` is used by the server when access is denied due to
invalid or missing authorization.

The authentication token is released by deleting the `session` resource,
i.e. sending a `DELETE` HTTP method to the URL of the `login` relation type.

    $ curl -v https://demo.travel-intelligence.com/api/v1/session \
      -X DELETE \
      -H 'Authorization: Token 2TqLvAPc1HZMnUQVybko'

    HTTP/1.1 204 No Content
