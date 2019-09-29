import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OpenticketsComponent } from './opentickets/opentickets.component';
import { PerformanceComponent } from './performance/performance.component';

const routes: Routes = [
  {
    path: '', redirectTo: '/home', pathMatch: 'full'
  },
  {
    path: 'home', component: OpenticketsComponent
  },
  {
    path: 'performance', component: PerformanceComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
