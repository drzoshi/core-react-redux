import { createBrowserHistory } from 'history';
//export const history = createBrowserHistory();
const baseUrl = document.getElementsByTagName('base')[0].getAttribute('href');
//debugger;
export const history = createBrowserHistory({ basename: baseUrl });

