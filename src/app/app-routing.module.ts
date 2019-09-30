import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OpenticketsComponent } from './opentickets/opentickets.component';
import { PerformanceComponent } from './performance/performance.component';
import { TicketdetailsComponent } from './ticketdetails/ticketdetails.component';

const routes: Routes = [
  {
    path: '', redirectTo: '/home', pathMatch: 'full'
  },
  {
    path: 'home', component: OpenticketsComponent
  },
  {
    path: 'performance', component: PerformanceComponent
  },
  {
    path: 'ticketdetails', component: TicketdetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
