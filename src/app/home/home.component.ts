import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Emitters} from '../emitters/emitters';
import { TaskPrevComponent } from './tasks/taskPrev/taskPrev.component';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})


export class HomeComponent implements OnInit {
  filter: string = "/list";
  selectedTagIndex: number;
  tagList: any;
  authenticated = false;
  editingNote = false;
  refInput = true;

  constructor(
    private http: HttpClient,
    private router: Router,
  ) {
  }

  ngOnInit(): void {
    var token = localStorage.getItem('hvilaToken');
    if (token == "") {





    } else {
      // smthing
      this.http.get('http://localhost:3000/api/user', {withCredentials: true, headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': `Token ${token}`
      }}).subscribe(
        (res: any) => {
          console.log(res);
          this.authenticated = true;
          // Emitters.authEmitter.emit(true);
        },
        err => {
          console.error(err);
          // Emitters.authEmitter.emit(false);
        }
      );
      
      // get user style
      this.mobileStyle = localStorage.getItem("hvilaMobile") == 'true';

      // get tag list 
      this.http.get('http://localhost:3000/api/tags', {withCredentials: true, headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': `Token ${token}`
      }}).subscribe(
        (res: any) => {
          // console.log('IMPORTANT ', res.tags.tags);
          this.tagList = res.tags.tags;
        },
        err => {
          console.error(err);
        }
      );
    }
    
  }

  logout(): void {
    localStorage.setItem("hvilaToken", "");
    window.location.reload();
  }

  startCreate(): void {
    this.editingNote = true;
  }

  stopCreate(): void {
    this.editingNote = false;
  }

  selectTag(i: number): void {
    if (i == this.selectedTagIndex) {
      this.filter = "/list";
      this.selectedTagIndex = -1;
      return;
    }
    this.filter = "/" + this.tagList[i].name;
    this.selectedTagIndex = i;
    console.log("CHANGING TAG FILTER");
    // this.ngOnInit();
  }

  execOnCreate() {
    this.stopCreate();
    // this.ngOnInit();
    this.refInput = !this.refInput;
  }

}
