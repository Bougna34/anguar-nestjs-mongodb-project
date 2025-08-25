import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Details } from './details/details';

export const routeConfig: Routes = [
    {
        path: '',
        component: Home,
        title: 'Home Page'
    },{
        path: 'details/:id',
        component: Details,
        title: 'Home details'
    }
];

//export const routes: Routes = [];