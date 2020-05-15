import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StatusListComponent } from './status-list/status-list.component';


const routes: Routes = [
  { path: '', component: StatusListComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
