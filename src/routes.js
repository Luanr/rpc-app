import * as controllers from './controllers/programmes';
import * as validators from './validators/index';

const routes = (instance) => {
    instance.get('/programmes',validators.validateQuery,controllers.programmesCtrl);
};

export default routes;