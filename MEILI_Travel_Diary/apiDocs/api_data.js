define({ "api": [
  {
    "type": "get",
    "url": "/triplegs/deleteTripleg&:tripleg_id",
    "title": "Deletes the tripleg specified by id",
    "name": "DeleteTripleg",
    "group": "Triplegs",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": true,
            "field": "500",
            "description": "<p>OnlyTriplegIn Trip The only tripleg of a trip cannot be deleted. If you want to delete the tripleg, call the trip deletion endpoint</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "tripleg_id",
            "description": "<p>Id of the tripleg that will be deleted</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Tripleg[]",
            "optional": false,
            "field": "Triplegs",
            "description": "<p>An array of json objects that represent the triplegs of the trip after deletion</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/apiv2/triplegs.js",
    "groupTitle": "Triplegs"
  },
  {
    "type": "get",
    "url": "/triplegs/getTriplegsOfTrip&:trip_id",
    "title": "Gets the triplegs of a given trip",
    "name": "GetTriplegsOfTrip",
    "group": "Triplegs",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": true,
            "field": "500",
            "description": "<p>TripIdInvalid The <code>trip_id</code> is undefined or null.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "trip_id",
            "description": "<p>Id of the trip for which the triplegs will be retrieved</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Tripleg[]",
            "optional": false,
            "field": "Triplegs",
            "description": "<p>An array of json objects that represent the triplegs</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/apiv2/triplegs.js",
    "groupTitle": "Triplegs"
  },
  {
    "type": "get",
    "url": "/triplegs/insertTransitionBetweenTriplegs&:start_time&:end_time&:from_travel_mode&:to_travel_mode&:trip_id",
    "title": "Inserts a missed transition between two triplegs by splitting the existing affected tripleg",
    "name": "InsertTransitionBetweenTriplegs",
    "group": "Triplegs",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": true,
            "field": "500",
            "description": "<p>InvalidInput The parameters <code>tripleg_id</code> is undefined, null or of wrong types.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "trip_id",
            "description": "<p>Id of the trip where the transition will be inserted</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "start_time",
            "description": "<p>Time at which the transition started</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "end_time",
            "description": "<p>Time at which the transition ended</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "from_travel_mode",
            "description": "<p>The travel mode from which the user changed</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "to_travel_mode",
            "description": "<p>The travel mode to which the user changed</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Tripleg[]",
            "optional": false,
            "field": "Triplegs",
            "description": "<p>An array of json objects that represent the triplegs of the trip after the insertion of the transition tripleg</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/apiv2/triplegs.js",
    "groupTitle": "Triplegs"
  },
  {
    "type": "get",
    "url": "/triplegs/updateEndTimeOfTripleg&:tripleg_id&:end_time",
    "title": "Updates the end time of a tripleg",
    "name": "UpdateEndTimeOfTripleg",
    "group": "Triplegs",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": true,
            "field": "500",
            "description": "<p>InvalidInput The parameters <code>tripleg_id</code> or <code>end_time</code> are undefined, null or of wrong types.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "tripleg_id",
            "description": "<p>Id of the tripleg that will have its end date modified.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "end_time",
            "description": "<p>The new value for the end time of the specified tripleg</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Tripleg[]",
            "optional": false,
            "field": "Triplegs",
            "description": "<p>An array of json objects that represent the triplegs of the trip after update</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/apiv2/triplegs.js",
    "groupTitle": "Triplegs"
  },
  {
    "type": "get",
    "url": "/triplegs/updateStartTimeOfTripleg&:tripleg_id&:start_time",
    "title": "Updates the start time of a tripleg",
    "name": "UpdateStartTimeOfTripleg",
    "group": "Triplegs",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": true,
            "field": "500",
            "description": "<p>InvalidInput The parameters <code>tripleg_id</code> or <code>start_time</code> are undefined, null or of wrong types.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "tripleg_id",
            "description": "<p>Id of the tripleg that will have its start date modified.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "start_time",
            "description": "<p>The new value for the start time of the specified tripleg</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Tripleg[]",
            "optional": false,
            "field": "Triplegs",
            "description": "<p>An array of json objects that represent the triplegs of the trip after update</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/apiv2/triplegs.js",
    "groupTitle": "Triplegs"
  },
  {
    "type": "get",
    "url": "/trips/getLastTripOfUser&:user_id",
    "title": "Gets the earliest unannotated trip of the user",
    "name": "GetLastTripOfUser",
    "group": "Trips",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": true,
            "field": "404",
            "description": "<p>UserIdInvalid The <code>user_id</code> is undefined or null.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": true,
            "field": "406",
            "description": "<p>UserCannotAnnotate The user with <code>user_id</code> does not have anny ttrips to annotate.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "user_id",
            "description": "<p>Id of the user that requests the earliest unannotated trip</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Trip",
            "optional": false,
            "field": "Trip",
            "description": "<p>The json representation of a trip without its triplegs</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/apiv2/trips.js",
    "groupTitle": "Trips"
  },
  {
    "type": "get",
    "url": "/trips/getTripsForBadge&:user_id",
    "title": "Gets the number of trips that the user has to process",
    "name": "GetTripsForBadge",
    "group": "Trips",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": true,
            "field": "404",
            "description": "<p>UserIdInvalid The <code>user_id</code> is undefined or null.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "user_id",
            "description": "<p>Id of the user that requests the number of available unannotated trips.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "user_get_badge_trips_info",
            "description": "<p>Number of unannotated trips available to the user.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/apiv2/trips.js",
    "groupTitle": "Trips"
  }
] });