import {Component, Input, OnInit, OnChanges} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Emitters} from '../../emitters/emitters';

interface Task {
  id: any;
  title: string;
  body: string;
  dueDate: Date;
  tags: [{name: string, icon: string}];
  author: string;
}


@Component({
  selector: 'app-taskList',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  @Input() filter: string;
  @Input() refInput: boolean;
  @Input() mobileStyle: boolean;

  previewing = false;
  prevTask: Task;

  constructor(
    private http: HttpClient,
  ) {
    
  }


  taskList: Task[];
  
  // taskList = [{}, {}, {}];

  ngOnInit(): void {
    this.taskList = [];
    console.log('current filter = ', this.filter);
    
    var token = localStorage.getItem('hvilaToken');
    this.http.get(`http://localhost:3000/api/tasks${this.filter}`, {withCredentials: true, headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': `Token ${token}`
    }}).subscribe( (res:any) => {
        console.log("TETRGESGERGREGE", res);

        this.taskList = res.tasks;              
        this.prevTask = this.taskList[0]
        Emitters.authEmitter.emit(true);
      },
      err => {
        Emitters.authEmitter.emit(false);
      }
    );
  }

  ngOnChanges(): void {
    this.ngOnInit();
  }

  execOnDelete(event) {
    console.log("emitted event ===== ", event);
    
    this.http.delete(`http://localhost:3000/api/tasks/${event}`, {
      withCredentials: true,
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': `Token ${localStorage.getItem('hvilaToken')}`
      },
    }).subscribe((res) => {
      console.log(res);
      this.ngOnInit();
    });
  }

  togglePrev(i: string) {
    this.previewing = !this.previewing;
    this.prevTask = this.taskList[parseInt(i)];
  }

}
