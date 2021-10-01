import {Component, Input, OnInit, Output, ViewContainerRef, EventEmitter} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { optimalTimeString } from '../../../../helpers/time';

interface Task {
  id: number;
  title: string;
  body: string;
  dueDate: Date;
  tags: {name: string, icon: string};
  author: string;
}

@Component({
  selector: 'app-task-prev-mobile',
  templateUrl: './task-prev-mobile.component.html',
  styleUrls: ['./task-prev-mobile.component.css']
})
export class TaskPrevMobileComponent implements OnInit {
  @Input() task: Task;
  @Output() onDelete = new EventEmitter();

  constructor(
    private http: HttpClient,
    public viewContainerRef: ViewContainerRef
  ) {}

  dateString: string;
  elemClass: string;


  ngOnInit() {
    var timenow = new Date;
    var duedate = new Date(this.task.dueDate);
    var timediff = duedate.getTime() - timenow.getTime();
    [this.dateString, this.elemClass] = optimalTimeString(timediff);
    console.log('curr time = ', timenow);
    console.log('due date ', duedate);
    console.log('time diff is ', timediff);
  }

  deleteTask() {
    this.onDelete.emit(this.task.id.toString());
  }
}
