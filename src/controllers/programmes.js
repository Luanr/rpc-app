import {Programme} from '../models/programme';

export const programmesCtrl = async (req, res) => {
    try {
        //let result = services.
        res.json(result);
    } catch(error) {
        res.status(500).send('Error!'+ error);
    }
};