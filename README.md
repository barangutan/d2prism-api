[![Build Status](https://travis-ci.org/gullyfoyle/d2prism-api.svg?branch=master)](https://travis-ci.org/gullyfoyle/d2prism-api)

# d2Prism API

This repository contains tests and helper scripts for querying the d2Prism API

## Installation

```
> npm install
> npm test
```

## API calls

- [Ping](#ping)
- [All Couriers](#all-couriers)
- [Random courier](#random-courier)
- [Courier by RGB](#courier-by-rgb)

---

## Ping

`http://www.d2prism.com/api/ping`

Returns HTTP status code 200 and is used to signify the api being queryable.

## All Couriers

`http://www.d2prism.com/api/couriers`

Returns an array of legacy couriers. Example:

```json
[
	{
	    "_id": "54cbd0f8803adee2970238fd",
	    "courier": "Enduring War Dog",
	    "effect": "Piercing Beams",
	    "hex": "D3613D",
	    "r": 211,
	    "g": 97,
	    "b": 61,
	    "meta": {
	        "smashed": false
	    },
	    "ntc": "Red Damask"
	},
	{
	    "_id": "54cbd0f8803adee2970238fe",
	    "courier": "Enduring War Dog",
	    "effect": "Piercing Beams",
	    "hex": "0ACF7A",
	    "r": 10,
	    "g": 207,
	    "b": 122,
	    "meta": {
	        "smashed": false
	    },
	    "ntc": "Malachite"
	},
	...
]
```