import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators, FormControl} from '@angular/forms'
import {AuthService} from 'src/app/services/auth.service';
import {AlertController, NavController,LoadingController} from '@ionic/angular'
import {Router} from '@angular/router';
import { AppPreferences } from '@ionic-native/app-preferences/ngx';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

  constructor(private authSvc:AuthService, private router: Router){
  }

  ngOnInit() {
  }

  async onRegister(email,password){
    try{
      const user = await this.authSvc.register(email.value,password.value);
      if(user){
        const isVerified = this.authSvc.isEmailVerified(user);
        this.redirectUser(isVerified);
      }
      else{
        alert("El usuario no existe");
      }

      }
    
    catch(error){
      console.log('Error', error)
    }
  }

  private redirectUser(isVerified:boolean): void {
    if (isVerified){
      this.router.navigate(['tabs']);
  }
  else{
    alert("Verifique la activación de su cuenta por correo")
  }
}

}
