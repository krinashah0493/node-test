'use strict';
const express = require('express');
const app = express();
const cors = require('cors');
const artistRoute = require('./routes/artist');

const checkToken = (req, res, next) => {
    if (req.headers.authorization) {
        next();
    } else {
        console.log('else condtion')
        return res.status(401).json(
            {
                "message": "No authorization token was found"
            }
        );
    };
};

app.all('*', checkToken);
app.use(cors());

app.get('/livecheck', (req, res) => res.status(200).json('Livecheck Working'));
app.use('/artists', artistRoute());

let port = process.env.PORT || 4000;
app.listen(port, () => {
    console.log(`Tackll Service is running on port ${port}`);
});
