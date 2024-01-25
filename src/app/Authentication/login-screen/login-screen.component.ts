import { Component, OnInit, inject } from '@angular/core';
import { FormArray, FormGroup } from '@angular/forms';
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
      this.initializeForm1()
      this.initializeForm2()
      this.initializeForm3()
  }

  buttonColor(): string {
    return  this.isSignin? 'red' : 'white';
  }

  buttonColor1(): string {
    return  this.isSignup? 'red' : 'white';
  }

  private FormBuilder = inject(FormBuilder)
  userform1! : FormGroup
  userform2! : FormGroup
  userform3! : FormGroup
  getOtp:boolean = true
  isSignin:boolean = true
  isSignup:boolean = false
  signin:boolean = false
  signup:boolean = false
  signUpF:boolean = false

  signCase : "Sign Up" | "Sign In" = "Sign In"
  mobnum:string=''

  initializeForm1() {
    this.userform1 = this.FormBuilder.group({
      mobno : new FormControl('',Validators.required)
    })
  }



  initializeForm2() {
    this.userform2 = this.FormBuilder.group({
      mobno : [''],
      otp1 : new FormControl('',[Validators.required,Validators.pattern(/^\d{1}$/)]),
      otp2 : new FormControl('',[Validators.required,Validators.pattern(/^\d{1}$/)],),
      otp3 : new FormControl('',[Validators.required,Validators.pattern(/^\d{1}$/)]),
      otp4 : new FormControl('',[Validators.required,Validators.pattern(/^\d{1}$/)]),
      otp5 : new FormControl('',[Validators.required,Validators.pattern(/^\d{1}$/)]),
      otp6 : new FormControl('',[Validators.required,Validators.pattern(/^\d{1}$/)])
    })
  }


  initializeForm3() {
    this.userform3 = this.FormBuilder.group({
      mobno : [''],
      fname : new FormControl('',Validators.required),
      email : new FormControl('',[Validators.required]),
      gender : new FormControl('',Validators.required),
      date : new FormControl('',Validators.required),
      state : new FormControl('',Validators.required)
    })
  }


  onChange(mobno:string){
    console.log(this.mobnum);
    
    this.userform2.patchValue({
      mobno : mobno
    })
    this.userform3.patchValue({
      mobno : mobno
    })
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


  validateCase1(){
        return this.userform1.invalid
  }


  validateCase2(){
    return this.userform2.invalid
  }


  validateCase3(){
    return this.userform3.invalid
  }


  mainLogin(){
    this.isSignin=true
    this.isSignup=false
  }


  mainSignup(){
    this.isSignin=false
    this.isSignup=true
  }


  buttonLoginF(){
    this.getOtp = false
    this.ifCase()
    if(this.signin && this.isSignin){
      this.signCase = "Sign In"
    }

    else{
      this.signCase = "Sign Up"
    }
  }


  buttonLoginS(){
    if(this.signin){
      this.signin = false
      alert("Signed In Successfully")

    }
    else{
      this.signup = false
      this.signUpF = true
    }
  }


  buttonLoginT(){
    alert("Signed Up Successfully")
  }


  onInputChange(currentInput: HTMLInputElement, nextInput: HTMLInputElement): void {
    if (currentInput && nextInput && currentInput.value.length === 1) {
      nextInput.focus();
    }
  }


}

