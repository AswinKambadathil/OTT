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
  id:any = '';
  names:any=''
  isEdit = false;
  isprofileEdit =false
  ifCond = true;
  isprofileLock = false;
  ispassword =false;
  isReset = false;
  // isActive = false;
  // isnotActive = true;
 



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
    { id: 1, name: 'Athul', image: '/assets/profilelogo2.svg',ifprofilelock: false },
    { id: 2, name: 'Aswin', image: '/assets/profilelogo.svg',ifprofilelock: false },
    { id: 3, name: 'Manoj', image: '/assets/profilelogo3.svg',ifprofilelock: false },
  ];

 
  editProfile() {
    this.isEdit = !this.isEdit;
  }

  profileEdit(name:any,id:any){
    console.log(id);
    
     this.names = name;
     this.id = id;
     console.log(id);
     
    
    this.ifCond=false
    this.isprofileEdit=true
  }


  profilePassword(profile:any){
    
    profile.id = this.id;
    console.log(profile.id);
    
    profile.ifprofilelock = !profile.ifprofilelock;
    console.log("Profile lock state toggled:", profile.ifprofilelock);
    if(profile.ifprofilelock){
      this.ifCond=false
      this.ispassword = true
      this.isReset=true
    }
    else{
      this.ispassword = false
      this.isReset=false
  
      
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
    //  this.isReset = true;
     
     
    }
    else{
      this.passwordForm.setErrors({mismatch : true})
      console.log("pin is incorrect");
      
    } 
    this.passwordForm.reset();
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

  reset(profile:any){
    profile.ifprofilelock = true;
    console.log("Profile PIN reset for:", profile.name);
    
    this.ifCond = false;
    this.ispassword = true;
    this.isReset = true;
    this.ispassword = true;
  
  
  }
  close(profile:any){
    this.ispassword= false;
    profile.ifprofilelock = !profile.ifprofilelock;
    if(profile.ifprofilelock){
      this.isReset=true
    }
    else{

      this.isReset=false
  
      
    }
    

  }
  
  
  profileedit(id:any){
    // let closep = this.profiles.findIndex(profile => profile.id=id)
    // if(this.profiles[closep].ifprofilelock= true){
    //   this.isReset = true
    // }
    // else{
    //   this.isReset = false;
    // }
  this.isprofileEdit =false
  this.ifCond = true;

  this.isEdit = true;
  
  }
}
