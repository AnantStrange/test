import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentListComponent } from '../student-list/student-list.component';
import { StudentDetailsComponent } from '../student-details/student-details.component';
import { HomeComponent } from '../home/home.component';

const routes: Routes = [

  { path: 'about', component: HomeComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
