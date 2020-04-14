import {Transaction} from '../models/programme';
import {getLiquidValue, getAvailableDate, dateToString} from '../helpers';
import {validationResult} from 'express-validator';
import {Op, Sequelize} from 'sequelize';

export const programmesCtrl = async (req, res) => {
    try {
        let result = services.
        res.json(result);
    } catch(error) {
        res.status(500).send('Error!'+ error);
    }
};