import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { my-page } from './my-page/my-page.component';


const routes: Routes = [{path: 'my-page', component: my-page}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
