import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Emitters} from '../../../emitters/emitters';
import { FormBuilder, FormGroup, FormControl, Validator } from '@angular/forms';
import {Router} from '@angular/router';
import { FlatpickrOptions } from 'ng2-flatpickr';
import ConfirmDatePlugin from 'flatpickr/dist/plugins/confirmDate/confirmDate'


@Component({
  selector: 'app-newTask',
  templateUrl: './newTask.component.html',
  styleUrls: ['./newTask.component.css']
})
export class NewTaskComponent implements OnInit {
  @Input() tagList: any;
  @Output() onCreate = new EventEmitter();
  form: any;

  selectedTags: boolean[] = Array();

  timePickerOptions: FlatpickrOptions = {
    enableTime: true,
    // appendTo: document.getElementById('newTaskForm'),
    // inline: true,
    // position: "above",
    static: true,
    time_24hr: true,
    plugins: [ConfirmDatePlugin({})]
  };

  constructor(
    private http: HttpClient,
    private formBuilder: FormBuilder,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      title: '',
      body: '',
      date: ''
    });

    console.log("yes?", this.tagList);
    for (let i = 0; i < this.tagList.length; i++) {
      this.selectedTags.push(false);
    }
    
  }

  
  
  submit(): void {
    var tagObj = {tags: []};
    var finalObj: Object;
    console.log(this.form.value);
    for (let i = 0; i < this.selectedTags.length; i++) {
      if (this.selectedTags[i] == true) {
        tagObj.tags.push(this.tagList[i]);
      }
    }

    finalObj = {...this.form.value, ...tagObj};
    console.log('NEW FORM ', finalObj);

    this.http.post('http://localhost:3000/api/tasks/new', finalObj, {
      withCredentials: true,
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': `Token ${localStorage.getItem('hvilaToken')}`
      }
    }).subscribe((res) => {
      console.log(res);
      this.onCreate.emit();
      // this.router.navigate(['/']);
    });
  };

  selectTag(i: number): void {

    if (this.selectedTags[i] == false) {
      this.selectedTags[i] = true;
    } else {
      this.selectedTags[i] = false;
    }
  }
}
