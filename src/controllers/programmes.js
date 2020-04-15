import * as Services from '../services/index';
import {validationResult} from 'express-validator';

export const programmesCtrl = async (req, res) => {
    const errors = validationResult(req);
    
    if (!errors.isEmpty()) {
        return res.status(405).json({ errors: errors.array() });
    }
    
    try {
        let result = await Services.getProgrammesByDate(
            req.query.year, 
            req.query.month, 
            req.query.day, 
            req.query.hour
        );
        res.send(result);
    } catch(error) {
        res.status(500).send('Error!'+ error);
    }
};