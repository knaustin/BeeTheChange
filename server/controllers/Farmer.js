const mongoose = require('mongoose');
const db = require('../models');

module.exports = {
    findAll: (req, res) => {
        db.Farmer.find(req.query.name ? { Name: new RegExp(req.query.name, 'i') } : {}).then(dbFarmers => {
            res.json(dbFarmers);
        });
    },
    find: (req, res) => {
        db.Farmer.findById(req.params.id).then(dbFarmer => {
            if (dbFarmer) {
                res.json(dbFarmer);
            } else {
                res.sendStatus(404);
            }
        });
    },
    create: (req, res) => {
        db.Farmer.create({ ...req.body, _id: mongoose.Types.ObjectId() }).then(dbFarmer => {
            res.json(dbFarmer);
        }).catch(error => {
            res.status(400).json({
                message: error.message,
            });
        });
    },
    update: (req, res) => {
        db.Farmer.findOneAndUpdate({ _id: req.params.id }, { $set: req.body }, { new: true }).then(dbFarmer => {
            if (dbFarmer) {
                res.json(dbFarmer);
            } else {
                res.sendStatus(404);
            }
        });
    },
    delete: (req, res) => {
        db.Farmer.remove({ _id: req.params.id }).then(dbFarmer => {
            res.json(dbFarmer);
        });
    },
};
