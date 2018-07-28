import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { LoginService } from './service/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  name="Mai Văn Tú";
  public isLoggedin: boolean;
  constructor(private router: Router, private loginService: LoginService) {
  }
  ngOnInit() {
    this.isLoggedin = this.loginService.IsLogged();
  }
  Logout() {
    this.loginService.SetLogin(false);
    alert('Logged out');
    this.router.navigate(['/login']);
  }
}
