# REST API example application

This is a horoscope-API which provides user with horoscope readings if they are logged in.

The entire application is made on MERN stack.

`.env` file must be create accordingly which should have DATABASE_STRING and JWT_SECRET = Any string value.

Please use `POSTMAN` for backend testing.

## Install

    npm install

## Run the app

    nodemon

# REST API

The REST API to the horoscope app is described below.

## List of requests:

### Request

`GET /`

    http://localhost:3000/

### Response

index page, that includes API logo, and SIGNIN/SIGNUP option.

## Create a new user

### Request

`POST /users/signup/`

     http://localhost:3000/users/signup

     body - {
    "name": "Mark Rabey"
    "email": "MarkRabey@gmail.com",
    "password": "webandapi123",
    "role": 1

}

Role can be inly added from backend!

     Its with admin role for Mark Rabey

### Response

    {
    "user": {
        "role": 1,
        "_id": "5fb81a4b4b4ba30a2463ff8a",
        "name": "Mark Rabey",
        "email": "MarkRabey@gmail.com",
        "createdAt": "2020-11-20T19:34:35.450Z",
        "updatedAt": "2020-11-20T19:34:35.450Z",
        "__v": 0
    }

}

## Get a specific Thing

### Request

`POST /users/signin`

        http://localhost:3000/users/signin

        body - {
            {
    "email": "MarkRabey@gmail.com",
    "password": "webandapi123"

}
}

### Response

{
"token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZmI4MWE0YjRiNGJhMzBhMjQ2M2ZmOGEiLCJpYXQiOjE2MDU5MDEyMzZ9.3EcSTjU63kaL5Wu-0mMVGjxaVLBaaz6oUAxqX8fxhQQ",
"user": {
"\_id": "5fb81a4b4b4ba30a2463ff8a",
"email": "MarkRabey@gmail.com",
"name": "Mark Rabey",
"role": 1
}
}

## Get a user information, but only signed in user can do it

### Request

`POST /secret/:userID`

    http://localhost:3000/users/secret/5fb81a4b4b4ba30a2463ff8a

### Response

{
"user": {
"role": 1,
"\_id": "5fb81a4b4b4ba30a2463ff8a",
"name": "Mark Rabey",
"email": "MarkRabey@gmail.com",
"salt": "6bc28c70-2b67-11eb-9261-f9825c7b334f",
"hashed_password": "fad0f9a75bb2f7b654d44a654c6b228a6c28922b",
"createdAt": "2020-11-20T19:34:35.450Z",
"updatedAt": "2020-11-20T19:34:35.450Z",
"\_\_v": 0
}
}

## Get your horoscope readings

### Request

its requires user to user signed in and authorized. Therefore, add authorization (that you got while logging in) in header as
key: Authorization
value: Bearer (authorization key)

`GET /:name/`

http://localhost:3000/horoscope/Scorpio

### Response

    {"photo":binary format,"name":"Scorpio","description": "Scorpio-born are passionate and assertive people. They are determined and decisive, and will research until they find out the truth. Scorpio is a great leader, always aware of the situation and also features prominently in resourcefulness.

    Scorpio is a Water sign and lives to experience and express emotions. Although emotions are very important for Scorpio, they manifest them differently than other water signs. In any case, you can be sure that the Scorpio will keep your secrets, whatever they may be."}

## Admin can create Horoscope data

### Request

`POST /create/:userId`

http://localhost:3000/horoscope/admin/create/5faa13bde5f14d34e48d9b6c

In body add as a form:
key: name; value: Capricorn,
key: description; value: Anything,
key: photo; value: Select from system files

Authorization: Add key as authorization, and value as bearer 'auth key that we got while signin'

### Response

{
"photo": binary format,
"desciption": "Anything",
"name": "Capricorn"
}

