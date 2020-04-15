import * as controllers from './controllers/programmes';

const routes = (instance) => {
    instance.get('/programmes',controllers.programmesCtrl);
};

export default routes;