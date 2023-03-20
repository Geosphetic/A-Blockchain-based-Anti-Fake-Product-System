const express = require('express');
const parseurl = require('parseurl');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');
const expressValidator = require('express-validator');
const productName = require('./models/productName');
const PMBP = require('./models/PMBP');
const registerClients = require('./models/registerClients');
const registerBP = require('./models/registerBP');
const registerPM = require('./models/registerPM');
const registerPD = require('./models/registerPD');
const acceptProduct = require('./models/acceptProduct');
const reasonReject = require('./models/reasonReject');
const md5 = require('md5');
require('./db/mongoose');

const app = express();
app.use(cors());
app.use(bodyParser.json({ limit: '100mb' }));
app.use(bodyParser.urlencoded({ extended: true, limit: '100mb' }));

app.get('/', function(req, res) {
    res.json('Works!');
});

app.get('/api/productName', function(req, res) {
    var productNames = []
    var productmanufacturers = []
    var productdetailss = []
    var productIds = []
    var final = []
    productName.find({}).then(eachOne => {
        for (i = 0; i < eachOne.length; i++){
            productNames[i] = eachOne[i].product_name ;
            productmanufacturers[i] = eachOne[i].product_manufacturer;
            productIds[i] = eachOne[i].product_id;
            productdetailss[i] = eachOne[i].product_details;
            final.push({
                'product_id': eachOne[i].product_id,
                'product_manufacturer': eachOne[i].product_manufacturer,
                'product_name': eachOne[i].product_name,
                'product_details': eachOne[i].product_details
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
        product_details: req.body.product_details,
    }).then(product => {
        res.json(product);
    });
});


app.get('/api/PMBP', function(req, res) {
    var productNames = []
    var productmanufacturers = []
    var productdetailss = []
    var productIds = []
    var final = []
    PMBP.find({}).then(eachOne => {
        for (i = 0; i < eachOne.length; i++){
            productNames[i] = eachOne[i].product_name ;
            productmanufacturers[i] = eachOne[i].product_manufacturer;
            productIds[i] = eachOne[i].product_id;
            productdetailss[i] = eachOne[i].product_details;
            final.push({
                'product_id': eachOne[i].product_id,
                'product_manufacturer': eachOne[i].product_manufacturer,
                'product_name': eachOne[i].product_name,
                'product_details': eachOne[i].product_details
            })
        }
        res.send(final);
    })
})

app.post('/api/PMBP', async function(req, res) {
    PMBP.create({
        product_id: Math.floor(Math.random() * 100),
        product_name: req.body.product_name,
        product_manufacturer: req.body.product_manufacturer,
        product_details: req.body.product_details,
    }).then(product => {
        res.json(product);
    });
});


app.get('/api/acceptProduct', function(req, res) {
    var productNames = []
    var productmanufacturers = []
    var productdetailss = []
    var productIds = []
    var final = []
    acceptProduct.find({}).then(eachOne => {
        for (i = 0; i < eachOne.length; i++){
            productNames[i] = eachOne[i].product_name ;
            productmanufacturers[i] = eachOne[i].product_manufacturer ;
            productIds[i] = eachOne[i].product_id;
            productdetailss[i] = eachOne[i].product_details;
            final.push({
                'product_id': eachOne[i].product_id,
                'product_name': eachOne[i].product_name,
                'product_manufacturer' : eachOne[i].product_manufacturer,
                'product_details': eachOne[i].product_details
            })
        }
        res.send(final);
    })
})

app.post('/api/acceptProduct', async function(req, res) {
    acceptProduct.create({
        product_id: req.body.id,
        product_name: req.body.product_name,
        product_manufacturer: req.body.product_manufacturer,
        product_details: req.body.product_details,
    }).then(product => {
        res.json(product);
    });
});


app.get('/api/reasonReject', function(req, res) {
    var rejectReasons = []
    var productnames = []
    var productmanufacturers = []
    var productIds = []
    var final = []
    reasonReject.find({}).then(eachOne => {
        for (i = 0; i < eachOne.length; i++){
            productnames[i] = eachOne[i].product_name;
            productmanufacturers[i] = eachOne[i].product_manufacturer
            rejectReasons[i] = eachOne[i].rejectReason ;
            productIds[i] = eachOne[i].product_id;
            final.push({
                'product_id': eachOne[i].product_id,
                'product_name': eachOne[i].product_name,
                'product_manufacturer' : eachOne[i].product_manufacturer,
                'rejectReason': eachOne[i].rejectReason,
            })
        }
        res.send(final);
    })
})

app.post('/api/reasonReject', async function(req, res) {
    reasonReject.create({
        product_id: req.body.id,
        product_name: req.body.product_name,
        product_manufacturer: req.body.product_manufacturer,
        rejectReason: req.body.rejectReason,
    }).then(product => {
        res.json(product);
    });
});


app.get('/api/registerClients', function(req, res) {
    var usernames = []
    var passwords = []
    var emails = []
    var c_ids = []
    var final = []
    registerClients.find({}).then(eachOne => {
        for (i = 0; i < eachOne.length; i++){
            usernames[i] = eachOne[i].c_username;
            passwords[i] = eachOne[i].c_password;
            emails[i] = eachOne[i].c_email;
            c_ids[i] = eachOne[i].client_id;
            final.push({
                'client_id': eachOne[i].client_id,
                'c_email': eachOne[i].c_email,
                'c_password' : eachOne[i].c_password,
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
    var bp_passwords = []
    var bp_emails = []
    var bp_ids = []
    var bp_final = []
    registerBP.find({}).then(eachOne => {
        for (i = 0; i < eachOne.length; i++){
            bp_usernames[i] = eachOne[i].bp_username;
            bp_passwords[i] = eachOne[i].bp_password;
            bp_emails[i] = eachOne[i].bp_email;
            bp_ids[i] = eachOne[i].bp_id;
            bp_final.push({
                'bp_id': eachOne[i].bp_id,
                'bp_email': eachOne[i].bp_email,
                'bp_password' : eachOne[i].bp_password,
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
    var pm_passwords = []
    var pm_emails = []
    var pm_ids = []
    var pm_final = []
    registerPM.find({}).then(eachOne => {
        for (i = 0; i < eachOne.length; i++){
            pm_usernames[i] = eachOne[i].pm_username;
            pm_passwords[i] = eachOne[i].pm_password;
            pm_emails[i] = eachOne[i].pm_email;
            pm_ids[i] = eachOne[i].pm_id;
            pm_final.push({
                'pm_id': eachOne[i].pm_id,
                'pm_email': eachOne[i].pm_email,
                'pm_password' : eachOne[i].pm_password,
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
    var pd_passwords = []
    var pd_emails = []
    var pd_ids = []
    var pd_final = []
    registerPD.find({}).then(eachOne => {
        for (i = 0; i < eachOne.length; i++){
            pd_usernames[i] = eachOne[i].pd_username;
            pd_passwords[i] = eachOne[i].pd_password;
            pd_emails[i] = eachOne[i].pd_email;
            pd_ids[i] = eachOne[i].pd_id;
            pd_final.push({
                'pd_id': eachOne[i].pd_id,
                'pd_email': eachOne[i].pd_email,
                'pd_password': eachOne[i].pd_password,
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