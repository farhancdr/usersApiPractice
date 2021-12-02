# Users Rest Api

Express js practice with building a users api


## Install

    yarn

## Run the app

    yarn dev



# REST API

The REST API to the example app is described below.

## Get list of Users

### Get all users

`GET /api/users`

    http://localhost:3000/api/users

### Get a specific users

`GET /api/users/:id`

    http://localhost:3000/api/users/3

## Create a new user

`POST api/users/`

    'first_name=Samhan&last_name=Masum' http://localhost:3000/api/users

### Update a user

`PUT /api/users/:id`

    'first_name=Shamhan&last_name=Masnun' http://localhost:3000/api/users/4


### Delete a user
`DELETE /api/users/:id`

    http://localhost:3000/api/users/4


### Update  a users field
`DELETE /api/users/:id`

    'first_name=Shamhan' http://localhost:3000/api/users/4
