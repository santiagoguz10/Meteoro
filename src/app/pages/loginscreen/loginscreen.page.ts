import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import {FormGroup, FormBuilder, Validators, FormControl} from '@angular/forms';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import {AuthService} from 'src/app/services/auth.service';

@Component({
  selector: 'app-loginscreen',
  templateUrl: './loginscreen.page.html',
  styleUrls: ['./loginscreen.page.scss'],
})
export class LoginscreenPage implements OnInit {

  
  constructor(private authSvc: AuthService, public router: Router
    ) { 

  }
  ngOnInit() { }

  async onLogin(email,password){
    try{
      const user= await this.authSvc.login(email.value, password.value);
      if (user){
        //CheckEmail
        const isVerified = this.authSvc.isEmailVerified(user);
        this.redirectUser(isVerified);
      }
      else{
        alert("El usuario no existe");
      }
    }
    catch(error){
      console.log('error', error); 
    }
  }
async onLoginGoogle(email,password){
  try{
    const user= await this.authSvc.loginGoogle();
    if (user){
      //CheckEmail
      const isVerified = this.authSvc.isEmailVerified(user);
      this.redirectUser(isVerified);
    }
    else{
      alert("El usuario no existe");
    }
  }
  catch(error){
    console.log('error', error); 
  }
}

private redirectUser(isVerified: boolean){

  if(isVerified===true){
    this.router.navigate(['tabs']);
  }
  else{
    alert("Verifique la activación de su cuenta por correo")
  }
}



}
