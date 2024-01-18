import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-screen',
  standalone: true,
  imports: [],
  templateUrl: './login-screen.component.html',
  styleUrl: './login-screen.component.scss'
})
export class LoginScreenComponent implements OnInit{
  ngOnInit(): void {
  }

  isSignin:boolean = true
  isSignup:boolean = false
  signin:boolean = false
  signup:boolean = false
  signop:boolean = false
  signp:boolean = false

  signCase : "Sign Up" | "Sign In"|"Get OTP" ="Get OTP"

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


  mainLogin(){
    this.isSignin=true
    this.isSignup=false
  }


  mainSignup(){
    this.isSignin=false
    this.isSignup=true
  }
}
