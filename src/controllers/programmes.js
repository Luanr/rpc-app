import * as Services from '../services/index';

export const programmesCtrl = async (req, res) => {
    try {
        let result = await Services.getProgramsByDay(
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