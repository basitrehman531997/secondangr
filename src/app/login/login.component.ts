import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { authservice } from '../auth/authguardservice';
// import { authservice } from '../auth/authguardservice';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authserce:authservice,private router:Router) { }

  ngOnInit(): void {
  }
  onlogin(){
    this.authserce.login();
    console.log("click on login naviagte To >>> products/view")
    this.router.navigate(['products/view'])

  }
  onlogout(){
    this.authserce.logout()
  }
  
}
