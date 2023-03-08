const express = require('express');
const parseurl = require('parseurl');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');
const expressValidator = require('express-validator');
const productName = require('./models/productName');
const productInfo = require('./models/productInfo');
const registerClients = require('./models/registerClients');
const registerBP = require('./models/registerBP');
const registerPM = require('./models/registerPM');
const registerPD = require('./models/registerPD');
const md5 = require('md5');
require('./db/mongoose');

const app = express();
app.use(cors());
app.use(bodyParser.json({ limit: '10mb' }));
app.use(bodyParser.urlencoded({ extended: true, limit: '10mb' }));

app.get('/', function(req, res) {
    res.json('Works!');
});

app.get('/api/productName', function(req, res) {
    var productNames = []
    var productmanufacturers = []
    var productIds = []
    var final = []
    productName.find({}).then(eachOne => {
        for (i = 0; i < eachOne.length; i++){
            productNames[i] = eachOne[i].product_name ;
            productmanufacturers[i] = eachOne[i].product_manufacturer;
            productIds[i] = eachOne[i].product_id;
            final.push({
                'product_id': eachOne[i].product_id,
                'product_manufacturer': eachOne[i].product_manufacturer,
                'product_name': eachOne[i].product_name
            })
        }
        res.send(final);
    })
})

app.post('/api/productName', async function(req, res) {
    productName.create({
        product_id: Math.floor(Math.random() * 100),
        product_name: req.body.product_name,
        product_manufacturer: req.body.product_manufacturer,
        product_details: md5(req.body.product_details),
    }).then(product => {
        res.json(product);
    });
});

app.get('/api/productInfo', function(req, res) {
    var p_productNames = []
    var p_productmanufacturers = []
    var p_productIds = []
    var p_final = []
    productInfo.find({}).then(eachOne => {
        for (i = 0; i < eachOne.length; i++){
            p_productNames[i] = eachOne[i].product_name ;
            p_productmanufacturers[i] = eachOne[i].product_manufacturer;
            p_productIds[i] = eachOne[i].product_id;
            p_final.push({
                'product_id': eachOne[i].product_id,
                'product_manufacturer': eachOne[i].product_manufacturer,
                'product_name': eachOne[i].product_name
            })
        }
        res.send(p_final);
    })
})

app.post('/api/productInfo', async function(req, res) {
    productInfo.create({
        product_id: Math.floor(Math.random() * 100),
        product_name: req.body.product_name,
        product_manufacturer: req.body.product_manufacturer,
        product_details: md5(req.body.product_details),
    }).then(product => {
        res.json(product);
    });
});


app.get('/api/registerClients', function(req, res) {
    var usernames = []
    var emails = []
    var c_ids = []
    var final = []
    registerClients.find({}).then(eachOne => {
        for (i = 0; i < eachOne.length; i++){
            usernames[i] = eachOne[i].c_username ;
            emails[i] = eachOne[i].c_email;
            c_ids[i] = eachOne[i].client_id;
            final.push({
                'client_id': eachOne[i].client_id,
                'c_email': eachOne[i].c_email,
                'c_username': eachOne[i].c_username
            })
        }
        res.send(final);
    })
})

app.post('/api/registerClients', async function(req, res) {
    registerClients.create({
        client_id: Math.floor(Math.random() * 100),
        c_username: req.body.c_username,
        c_email: req.body.c_email,
        c_password: md5(req.body.c_password),
    }).then(product => {
        res.json(product);
    });
});


app.get('/api/registerBP', function(req, res) {
    var bp_usernames = []
    var bp_emails = []
    var bp_ids = []
    var bp_final = []
    registerBP.find({}).then(eachOne => {
        for (i = 0; i < eachOne.length; i++){
            bp_usernames[i] = eachOne[i].bp_username ;
            bp_emails[i] = eachOne[i].bp_email;
            bp_ids[i] = eachOne[i].bp_id;
            bp_final.push({
                'bp_id': eachOne[i].bp_id,
                'bp_email': eachOne[i].bp_email,
                'bp_username': eachOne[i].bp_username
            })
        }
        res.send(bp_final);
    })
})

app.post('/api/registerBP', async function(req, res) {
    registerBP.create({
        bp_id: Math.floor(Math.random() * 100),
        bp_username: req.body.bp_username,
        bp_email: req.body.bp_email,
        bp_password: md5(req.body.bp_password),
    }).then(product => {
        res.json(product);
    });
});

app.get('/api/registerPM', function(req, res) {
    var pm_usernames = []
    var pm_emails = []
    var pm_ids = []
    var pm_final = []
    registerPM.find({}).then(eachOne => {
        for (i = 0; i < eachOne.length; i++){
            pm_usernames[i] = eachOne[i].pm_username ;
            pm_emails[i] = eachOne[i].pm_email;
            pm_ids[i] = eachOne[i].pm_id;
            pm_final.push({
                'pm_id': eachOne[i].pm_id,
                'pm_email': eachOne[i].pm_email,
                'pm_username': eachOne[i].pm_username
            })
        }
        res.send(pm_final);
    })
})

app.post('/api/registerPM', async function(req, res) {
    registerPM.create({
        pm_id: Math.floor(Math.random() * 100),
        pm_username: req.body.pm_username,
        pm_email: req.body.pm_email,
        pm_password: md5(req.body.pm_password),
    }).then(product => {
        res.json(product);
    });
});

app.get('/api/registerPD', function(req, res) {
    var pd_usernames = []
    var pd_emails = []
    var pd_ids = []
    var pd_final = []
    registerPD.find({}).then(eachOne => {
        for (i = 0; i < eachOne.length; i++){
            pd_usernames[i] = eachOne[i].pd_username ;
            pd_emails[i] = eachOne[i].pd_email;
            pd_ids[i] = eachOne[i].pd_id;
            pd_final.push({
                'pd_id': eachOne[i].pd_id,
                'pd_email': eachOne[i].pd_email,
                'pd_username': eachOne[i].pd_username
            })
        }
        res.send(pd_final);
    })
})

app.post('/api/registerPD', async function(req, res) {
    registerPD.create({
        pd_id: Math.floor(Math.random() * 100),
        pd_username: req.body.pd_username,
        pd_email: req.body.pd_email,
        pd_password: md5(req.body.pd_password),
    }).then(product => {
        res.json(product);
    });
});


const port = process.env.PORT || 8000;
app.listen(port, () => {
    console.log("Server is up on port " + port)
});