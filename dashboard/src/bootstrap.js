import { createApp } from 'vue';
import Dashboard from './components/Dashboard.vue';

// mount function to startup the app
const mount = (el) => {
    const app = createApp(Dashboard);
    app.mount(el); // non è la nostra mount function
};

// if we are in dev and isolation call mount
if (process.env.NODE_ENV === 'development') {
    const devRoot = document.querySelector('#_dashboard-dev-root');

    if (devRoot) {
        mount(devRoot, { defaultHistory: createBrowserHistory() });
    }
}

// if container, export function mount
export {mount};