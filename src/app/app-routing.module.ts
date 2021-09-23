import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import { NewTaskComponent } from './home/tasks/newTask/newTask.component';
import { TasksComponent } from './home/tasks/tasks.component';
import { NewTagComponent } from './new-tag/new-tag.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'new', component: NewTaskComponent},
  {path: 'list', component: TasksComponent},
  {path: 'newtag', component: NewTagComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
