import {Programme} from '../models/programme';
import {} from '../services/index';

export const programmesCtrl = async (req, res) => {
    try {
        let result = 
        res.json(result);
    } catch(error) {
        res.status(500).send('Error!'+ error);
    }
};