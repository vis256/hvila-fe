import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-new-tag',
  templateUrl: './new-tag.component.html',
  styleUrls: ['./new-tag.component.css']
})
export class NewTagComponent implements OnInit {
  form: FormGroup;

  constructor(
    private http: HttpClient,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      tagName: '',
      tagIcon: ''
    });
  }

  submit(): void {
    console.log(this.form.value);

    this.http.post('http://localhost:3000/api/tag', this.form.value, {
      withCredentials: true,
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': `Token ${localStorage.getItem('hvilaToken')}`
      }
    }).subscribe((res) => {
      console.log(res);
    });
  }

}
