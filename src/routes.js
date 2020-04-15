import * as controllers from './controllers/programmes';
import * as validators from './validators/index';

const routes = (instance) => {
    instance.get('/programmes',controllers.programmesCtrl);
};

export default routes;