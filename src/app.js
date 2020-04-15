import express from 'express';
import routes from './routes';
import bodyParser from 'body-parser';

const app = express();
const PORT = 3000;

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

routes(app);

const initServer = () => {
    app.listen(PORT, () => console.log(`Listening on port ${PORT}!`));
};

initServer();