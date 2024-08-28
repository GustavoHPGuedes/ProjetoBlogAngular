import { Routes } from '@angular/router';
import { InicioPage } from './pages/inicio/inicio.page';
import { NoticiaPage } from './pages/noticia/noticia.page';

export const routes: Routes = [
    {path: 'noticia/:id', component: NoticiaPage},
    {path: '**', component: InicioPage},
];
