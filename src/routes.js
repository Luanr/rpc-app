import controller from './controllers/transactionController';
import {validateTransaction} from './helpers';

const routes = (instance) => {
    instance.get('/programmes', Auth.authPortal,controller.getTransactions);
};

export default routes;