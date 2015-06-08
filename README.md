# d2Prism API [![Build Status](https://travis-ci.org/gullyfoyle/d2prism-api.svg?branch=master)](https://travis-ci.org/gullyfoyle/d2prism-api)

This repository contains tests and helper scripts for querying the [d2Prism](http://www.d2prism.com) API.

## Installation

Assuming you have the [git](https://git-scm.com/downloads)/[nodejs](https://nodejs.org/download/)/[npm](https://nodejs.org/download/) toolbelt installed, boot up a command-line and run these commands.

```
> git clone https://github.com/gullyfoyle/d2prism-api.git
> cd d2prism-api
> npm install
> npm test
```

## Properties of returned JSON

Querying the API will return one or more JSON objects in the following format:

```json
{
    "_id": "54cbd0f8803adee297023a79",
    "courier": "Stumpy",
    "effect": "Ethereal Flame",
    "hex": "B47A9D",
    "r": 180,
    "g": 122,
    "b": 157,
    "meta": {
        "smashed": false
    },
    "ntc": "Bouquet"
}
```

The properties are fairly self-explanatory but for the sake of clarity can be broken down as follows:

* **_id**: the unique guid of the courier. Needed as there are certain couriers with un-unique R,G,B values.
* **courier**: the courier model.
* **effect**: the courier effect (ethereal gem).
* **hex**: a hexidecimal representation of the R,G,B value.
* **r,g and b**: the red, green and blue colour values.
* **meta**: extra information, such as:
  * _smashed_: whether or not the courier is smashed (had its gems extracted, thus losing its 'legacy' tag)
* **ntc**: the named colour, based on [this awesome Javascript library](http://chir.ag/projects/name-that-color/) (the same one used on d2lp).

There will be more properties added in the future and they will be documented here.

## API calls

- [Ping](#ping)
- [All Couriers](#all-couriers)
- [Random courier](#random-courier)
- [Courier by RGB](#courier-by-rgb)
- [Similar couriers](#similar-couriers)

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
]
```

## Random courier

`http://www.d2prism.com/api/couriers/random`

Returns a random courier from the database.

## Courier by RGB

`http://www.d2prism.com/api/couriers/r,g,b`

_For example:_

`http://www.d2prism.com/api/couriers/180,122,157`

Returns one or more couriers based on the RGB value passed in. We say "one or more" because there are several instances in which there are more than one 'legacy' tagged courier with the same RGB.

* [41,91,123 - "Calypso"](http://www.d2prism.com/api/couriers/41,91,123)
* [196,57,198 - "Amethyst"](http://www.d2prism.com/api/couriers/196,57,198)
* [50,166,207 - "Scooter"](http://www.d2prism.com/api/couriers/50,166,207)

If you wish to return the record for a specific one, you must further pass its id as a parameter:

`http://www.d2prism.com/api/couriers/50,166,207/54cbd0f8803adee2970238d3`

## Similar Couriers

`http://www.d2prism.com/api/couriers/similar/r,g,b`

_For example:_

`http://www.d2prism.com/api/couriers/similar/180,122,157`