const { query } = require('schm-express')

export const validateQuery = query({
    hour: {
        type: Number,
        required: true,
    },
});