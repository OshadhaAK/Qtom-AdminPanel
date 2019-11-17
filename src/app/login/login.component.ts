import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {
  emailaddress: string;
  password: string;

  constructor(private router: Router) { }

  ngOnInit() {
  }
  login(){
    if (this.emailaddress === '' || this.emailaddress === null || this.password === '' || this.password == null) {
      alert('please enter login credentials');
      this.router.navigate(['/']);
    }
    else if(this.emailaddress === "admin" && this.password === "admin") {
      this.router.navigate(['./Dashboard']);
    }
    else {
      alert('please enter valid login credentials');
    }
    
  }
}
