import {Programme} from '../models/programme';
import * as Services from '../services/index';

export const programmesCtrl = async (req, res) => {
    try {
        let result = Services.getProgramsByDay(
            req.query.year, 
            req.query.month, 
            req.query.day, 
            req.query.hour
        );
        res.json(result);
    } catch(error) {
        res.status(500).send('Error!'+ error);
    }
};