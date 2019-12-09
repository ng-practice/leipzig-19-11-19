import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about.component';
import { SureGuard } from './shared/sure.guard';

const routes: Routes = [
  {
    path: '',
    component: AboutComponent,
    pathMatch: 'full',
    canActivate: [SureGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AboutRoutingModule {}
