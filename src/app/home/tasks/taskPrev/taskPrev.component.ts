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
  selector: 'app-taskPrev',
  templateUrl: './taskPrev.component.html',
  styleUrls: ['./taskPrev.component.css']
})

export class TaskPrevComponent implements OnInit{
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
    // console.log('deleting');
    // this.http.delete(`http://localhost:3000/api/tasks/${this.task.id}`, {
    //   withCredentials: true,
    //   headers: {
    //     'Content-Type': 'application/json',
    //     'Accept': 'application/json',
    //     'Authorization': `Token ${localStorage.getItem('hvilaToken')}`
    //   },
    // }).subscribe((res) => {
    //   console.log(res);
    //   this.viewContainerRef.detach();
    //   this.viewContainerRef.clear();
    //   // this.ngOnInit();
    // });
  }
}
