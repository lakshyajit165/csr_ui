import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OpenticketsComponent } from './opentickets/opentickets.component';


const routes: Routes = [
  {
    path: '', redirectTo: '/home', pathMatch: 'full'
  },
  {
    path: 'home', component: OpenticketsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
