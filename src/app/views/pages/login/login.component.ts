import { Component, OnInit } from '@angular/core';
import { User} from './user';
import {FormGroup,FormControl,Validator} from '@angular/forms';
import {loginService} from'./login.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [loginService]
})


export class LoginComponent implements OnInit {
  isLoginFailed:boolean =false;
    
user:User ={
  username:"",
  password:""

}

  constructor(private loginService:loginService,private router:Router) { }
 
  ngOnInit() {
    

  }

  login():void{
    console.log('in the login');
    this.loginService.loginService(this.user)
    .then(data => {
      console.log("login success success");
      localStorage.setItem("user", JSON.stringify(data));
      this.router.navigate(['/dashboard']);
    })
    .catch(error => {
      console.log(error);
      this.isLoginFailed = true;
      console.log('THE ERROR'+error);
    });


  }

  register():void{
    console.log('go to register');
    this.router.navigate(['/pages/register']);

  }

}
