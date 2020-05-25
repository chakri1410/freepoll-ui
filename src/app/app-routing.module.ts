import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StatusListComponent } from './status-list/status-list.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CreatePollComponent } from './create-poll/create-poll.component';
import { ViewPollComponent } from './view-poll/view-poll.component';
import { ResultPollComponent } from './result-poll/result-poll.component';
import { SearchPollComponent } from './search-poll/search-poll.component';


const routes: Routes = [
  { path: 'status', component: StatusListComponent },
  { path: 'poll/new', component: CreatePollComponent },
  { path: 'poll/view/:id', component: ViewPollComponent  },
  { path: 'poll/result/:id', component: ResultPollComponent  },
  { path: 'poll/search', component: SearchPollComponent  },
  { path: '', component: DashboardComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
