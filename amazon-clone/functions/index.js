const functions = require('firebase-functions');
const express= require("express");
const cors= require("cors");
const { request, response } = require('express');
const stripe = require("stripe")('sk_test_51HeE65KFwEixdosaGkNZqHTYEDGUzje2s4FoCL2WzqTAMpEKCGiKKUE6iuEchxQH5Wsce1xgjJvc2JuvBRen7Nrz00W2mvkofx')
//App config
const app= express();


//Middlewares
app.use(cors({origin : true}));
app.use(express.json());


//API routes
app.get('/', (request, response) => response.status(200).send('hello world'))

app.post('/payments/create', async(request, response) => {
    const total = request.query.total;

    console.log("Payment request received ", total)

    console.log('Payment request received for the amount', total)
    const paymentIntent = await stripe.paymentIntents.create({
        amount:total,
        currency:"usd"
    });

    response.status(201).send({clientSecret: paymentIntent.client_secret})
})


//Listen command

exports.api = functions.https.onRequest(app)

// http://localhost:5001/clone-5c99c/us-central1/api
