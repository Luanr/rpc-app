import controller from './controllers/programmes';

const routes = (instance) => {
    instance.get('/programmes',controller.programmesCtrl);
};

export default routes;