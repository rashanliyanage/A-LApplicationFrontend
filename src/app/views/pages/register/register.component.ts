import { Component, OnInit} from '@angular/core';
import{ RegisterUser } from './registerOrganizerUser';
import { RegisterService } from './register.service';
import { Router } from '@angular/router';
import {FormGroup,FormControl,Validators} from '@angular/forms';
import { RegisterSP} from './registerSP';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  providers: [RegisterService]
})

export class RegisterComponent implements OnInit {
   
isfilled:boolean =false;
ispasswordMatch:boolean =true;
isServiceCatogory:boolean =false;
isusertype:boolean=false;
registeruser:RegisterUser ={
  firstname: "",
  lastname:  "",
  username: "",
  email:"",
  password: "",
  confirmpassword: "",
  usertype: "",
  spCatagory:""
  

}


isRegistrationFailed: boolean = false;

  constructor( private registerservice:RegisterService, private router:Router) { 

  }

  ngOnInit(){

    if(localStorage.getItem("user")) {
      //this.router.navigate(['dashboard']);
    }
  }
  

  isOrganizer():void{
    this.registeruser.usertype ="";
this.registeruser.usertype ="organizer"

  }
  isSpProvider():void{

    this.registeruser.usertype ="";
    this.registeruser.usertype ="service_provider"
  }

  isAdmin():void{

this.registeruser.usertype ="";
this.registeruser.usertype ="Admin";

  }


//register user

register():void{
  console.log("registration success");
  if(!this.registeruser.firstname || !this.registeruser.lastname || !this.registeruser.username || !this.registeruser.email|| !this.registeruser.password || !this.registeruser.confirmpassword){
        this.isfilled = true;
        console.log('not feeld'+this.isfilled);

  
  
  
}
if(this.registeruser.usertype==''){
  this.isusertype =true;

}else if((this.registeruser.usertype =='service_provider') && this.registeruser.spCatagory==''){
    this.isServiceCatogory =true;
    console.log( 'in thee');



  }else if((this.registeruser.password =='') || (this.registeruser.confirmpassword=='')){
  this.ispasswordMatch =false;
console.log('password null '+ this.registeruser.password);

}else if(!(this.registeruser.password == this.registeruser.confirmpassword)  ){
  this.ispasswordMatch =false;
  console.log('in tha pass');



}else{
  this.registerservice.register(this.registeruser)
  .then(data => {
    console.log("registration success");
    localStorage.setItem("user", JSON.stringify(data));
    this.router.navigate(['/pages/login']);
  })
  .catch(error => {
    console.log(error);
    this.isRegistrationFailed = true;
  });

}

}


}
