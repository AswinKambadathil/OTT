import { CommonModule } from '@angular/common';
import { Component,Inject,OnInit,inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-profilepage',
  standalone: true,
  imports: [CommonModule,FormsModule,ReactiveFormsModule],
  templateUrl: './profilepage.component.html',
  styleUrl: './profilepage.component.scss'
})
export class ProfilepageComponent implements OnInit{

  isEdit = false;
  isprofileEdit = true
  ifCond = true;
  isprofileLocl = false;
  ispassword =false;
  isReset = false;
  isActive = false;
  isnotActive = true;



  passwordForm! : FormGroup


  private  formBuilder= inject(FormBuilder)
  constructor() {}

  ngOnInit(): void {
    
    this.passwordForm = this.formBuilder.group({
      first : ['',Validators.required],
      second :['',Validators.required],
      third : ['',Validators.required],
      fourth : ['',Validators.required],
      fifth : ['',Validators.required],
      sixth : ['',Validators.required],
      seventh:['',Validators.required],
      eighth:['',Validators.required],
    });


    
  }
  

  profiles = [
    { id: 1, name: 'Athul', image: '/assets/profilelogo2.svg' },
    { id: 2, name: 'Aswin', image: '/assets/profilelogo.svg' },
    { id: 3, name: 'Manoj', image: '/assets/profilelogo3.svg' },
  ];


  editProfile() {
    this.isEdit = !this.isEdit;
  }
  profileEdit(){
    this.ifCond=false
    this.isprofileEdit=true
  }
  profilePassword(){
    if(!this.isActive){
    this.ifCond=false
    this.ispassword = true
    this.isActive = !this.isActive;
    console.log("hello");
    
    }
    else{
      this.ispassword = false
      this.isReset = false
      console.log("hai");
    }
    
  }
  
  onInputChange(currentInput: HTMLInputElement, nextInput: HTMLInputElement): void {
    if (currentInput && nextInput && currentInput.value.length === 1) {
      nextInput.focus();
    }
  }
  
  savePassword(){  
    if((this.passwordForm.value.first == this.passwordForm.value.fifth) && (this.passwordForm.value.second == this.passwordForm.value.sixth) &&
    (this.passwordForm.value.third == this.passwordForm.value.seventh) && (this.passwordForm.value.fourth == this.passwordForm.value.eighth) ){
      
     console.log("pin correct");
     this.ispassword =false;
     this.isReset = true;
    }
    else{
      this.passwordForm.setErrors({mismatch : true})
      console.log("pin is incorrect");
      
    } 
  }


  formValidity(){
    if((this.passwordForm.value.first == this.passwordForm.value.fifth) && (this.passwordForm.value.second == this.passwordForm.value.sixth) &&
    (this.passwordForm.value.third == this.passwordForm.value.seventh) && (this.passwordForm.value.fourth == this.passwordForm.value.eighth) ){
    }
    else{
      this.passwordForm.setErrors({mismatch : true})
      console.log("pin is incorrect");
      
    }     
    return this.passwordForm.invalid 
  }

  reset(){
    this.ispassword = true;
  }
  close(){
    this.ispassword= false;
    this.isActive = false
  }

}
