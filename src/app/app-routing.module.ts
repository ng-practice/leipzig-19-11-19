import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutModule } from './about/about.module';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'todos/all' },
  {
    path: 'about',
    // loadChildren:  './about/about.module#AboutModule' // Angular < 8
    loadChildren: () => import('./about/about.module').then(m => m.AboutModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), AboutModule],
  exports: [RouterModule]
})
export class AppRoutingModule {}
