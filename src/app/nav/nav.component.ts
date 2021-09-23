import {Component, OnInit} from '@angular/core';
import {Emitters} from '../emitters/emitters';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  authenticated = false;

  constructor(
    private http: HttpClient,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    Emitters.authEmitter.subscribe(
      (auth: boolean) => {
        this.authenticated = auth;
      }
    );
  }

  logout(): void {
    localStorage.setItem('hvilaToken', '');
    this.router.navigate(['/login']);
  }

}
