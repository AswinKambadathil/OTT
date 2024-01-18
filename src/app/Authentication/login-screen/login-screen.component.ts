import { Component, OnInit, inject } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login-screen',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './login-screen.component.html',
  styleUrl: './login-screen.component.scss'
})
export class LoginScreenComponent implements OnInit{
  ngOnInit(): void {
    this.initializeForm()
  }
  initializeForm() {
    this.userform = this.FormBuilder.group({
      mobno : new FormControl('',Validators.required),
      // fname : new FormControl('',Validators.required),
      // email : new FormControl('',[Validators.required, Validators.email]),
      // gender : new FormControl('',Validators.required),
      // date : new FormControl('',Validators.required),
      // state : new FormControl('',Validators.required),
      otp : new FormControl('',Validators.required)
    })
  }


  private FormBuilder = inject(FormBuilder)
  userform! : FormGroup
  isSignin:boolean = true
  isSignup:boolean = false
  signin:boolean = false
  signup:boolean = false
  signop:boolean = false
  signp:boolean = false
  isButtonDisabled = false;

  signCase : "Sign Up" | "Sign In"|"Get OTP" ="Get OTP"

  constructor(){
    this.userform 
  }


  ifCase(){
    if(this.isSignin){
      this.signin=true
      this.signup=false
    }
    else{
      this.signup=true
      this.signin=false
    }
  }

myCase = "getOpt"
  butLogin(){
    this.ifCase()
    if(this.signin){
      this.signCase ="Sign In"
    }
    else if(this.signop){
      this.signp=true
      this.signup=false
    }
    else if(this.signup){
      this.signCase ="Sign Up" 
      this.signop=true
    }
    else{
      this.signCase ="Get OTP"
    }
  }


  validateCase(){
    return this.userform.invalid
  }


  mainLogin(){
    this.isSignin=true
    this.isSignup=false
  }


  mainSignup(){
    this.isSignin=false
    this.isSignup=true
  }
}
