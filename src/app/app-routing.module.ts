import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostComponent } from './components/posts/post/post.component';



const routes: Routes = [
{ path: 'home', loadChildren: () => import('./components/home/home.module').then(m => m.HomeModule) },
{ path: 'post/:id', component: PostComponent },
	    {
	        path: '',
	        redirectTo: 'home',
	        pathMatch: 'full'
	    },
{ path: 'servicios', loadChildren: () => import('./components/servicios/servicios.module').then(m => m.ServiciosModule) },
{ path: 'about', loadChildren: () => import('./components/about/about.module').then(m => m.AboutModule) },
{ path: 'contacto', loadChildren: () => import('./components/contacto/contacto.module').then(m => m.ContactoModule) },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
