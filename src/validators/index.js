import {check, oneOf} from 'express-validator';

export const validateQuery = [
    check('year').notEmpty(),
    check('month').notEmpty(),
    check('day').notEmpty(),
    check('hour').notEmpty(),
    check('minute').notEmpty()
];