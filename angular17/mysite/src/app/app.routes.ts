import { Routes } from '@angular/router';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component'
import { PageImageComponent } from './pages/page-image/page-image.component'
import { PageTablesComponent } from './pages/page-tables/page-tables.component';

export const routes: Routes = [
    { 
        path: '',
        component: MainLayoutComponent ,
        children: [
            {
                path: 'images',
                component: PageImageComponent,
            },
            {
                path: 'tables',
                component: PageTablesComponent
            }
        ]
    },
];
