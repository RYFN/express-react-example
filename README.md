# Example project, with simple search API and react component.

Requires node.js v14

## Install

`npm install`

## Run

`npm start`


## Data

The GB.tsv file was converted to .csv, then imported into an SQLlite database using an external application, creating the db.db file which forms the datasource for this project.


## Key challenges

Installing SQLite npm module (!) - node-gyp did not want to play nice with my current setup. More time was spent on configuration than coding.

## Improvements

Tests for input to API endpoints etc + bonus point exercises. Geolocation closesness could be achieved using the haversine distance formula.