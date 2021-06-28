'use strict';
const router = require('express').Router();
const artistMock = require('../mocks/artists.json');

const artistRoute = () => {
    router.get('/', async(req, res) => {
        res.status(200).json(artistMock);
    });
    return router;
}

module.exports = artistRoute;