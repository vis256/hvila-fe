import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import { Ng2FlatpickrModule } from 'ng2-flatpickr';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {RegisterComponent} from './register/register.component';
import {LoginComponent} from './login/login.component';
import {HomeComponent} from './home/home.component';
import { NewTaskComponent } from './home/tasks/newTask/newTask.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { TasksComponent } from './home/tasks/tasks.component';
import { TaskPrevComponent } from './home/tasks/taskPrev/taskPrev.component';
import { NewTagComponent } from './new-tag/new-tag.component';
import { TagSelectComponent } from './home/tasks/newTask/tag-select/tag-select.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    HomeComponent,
    NewTaskComponent,
    TasksComponent,
    TaskPrevComponent,
    NewTagComponent,
    TagSelectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    Ng2FlatpickrModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
