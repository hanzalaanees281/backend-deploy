require('dotenv').config()
const express = require('express')
const app = express()
// const port = 4000
const randomApi =
{
    "id": 6208,
    "uid": "22d77239-17d2-4442-ba77-4646a75e18fc",
    "password": "Zut2mnTBx1",
    "first_name": "Levi",
    "last_name": "Green",
    "username": "levi.green",
    "email": "levi.green@email.com",
    "avatar": "https://robohash.org/debitisautemcupiditate.png?size=300x300&set=set1",
    "gender": "Polygender",
    "phone_number": "+593 719-260-2490 x52385",
    "social_insurance_number": "520271990",
    "date_of_birth": "1965-03-10"
}

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/twitter', (req, res) => {
    res.send('@anees_hanzala')
})

app.get('/google', (req, res) => {
    res.send('<h1>Hello google</h1>')
})

app.get('/Api', (req, res) => {
    res.json(randomApi)
})

app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${process.env.PORT}`)
})