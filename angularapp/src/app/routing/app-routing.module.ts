import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentListComponent } from '../student-list/student-list.component';
import { StudentDetailsComponent } from '../student-details/student-details.component';
import { HomeComponent } from '../home/home.component';
import { StudentAddComponent } from '../student-add/student-add.component';

const routes: Routes = [

  { path: '/', component: HomeComponent},
  { path: '/add', component: StudentAddComponent},
  { path: '/list', component: StudentListComponent},
  { path: '/detail', component: StudentDetailsComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
