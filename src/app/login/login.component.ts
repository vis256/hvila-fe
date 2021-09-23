import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';

interface userInt {
  token?: string
}

interface loginResInt {
  user?: userInt
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      username: '',
      password: ''
    });
  }

  submit(): void {
    this.http.post('http://localhost:3000/api/login', this.form.getRawValue(), {
      withCredentials: true
    }).subscribe((res: loginResInt) => {
      // console.log(res.user);
      localStorage.setItem('hvilaToken', res.user.token);
      this.router.navigate(['/']);
    });
  }
}
