import { Routes } from '@angular/router';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component'
import { PageImageComponent } from './pages/page-image/page-image.component'
import { PageTablesComponent } from './pages/page-tables/page-tables.component';
import { PageImageTableComponent } from './pages/page-image-table/page-image-table.component'

export const routes: Routes = [
    { 
        path: '',
        component: MainLayoutComponent ,
        children: [
            {
                path: 'images',
                loadComponent: () => import ('./pages/page-image/page-image.component').then(
                    m => m.PageImageComponent
                )
            },
            {
                path: 'tables',
                loadComponent: () => import ('./pages/page-tables/page-tables.component').then(
                    m => m.PageTablesComponent
                )
            },
            {
                path: 'all',
                loadComponent: () => import ('./pages/page-image-table/page-image-table.component').then(
                    m => m.PageImageTableComponent
                )

            }
        ]
    },
];
