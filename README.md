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

Returns an array of legacy couriers.
