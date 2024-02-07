import { CommonModule } from '@angular/common';
import { Component,OnInit,inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';


@Component({
  selector: 'app-profilepage',
  standalone: true,
  imports: [CommonModule,FormsModule,ReactiveFormsModule,RouterModule],
  templateUrl: './profilepage.component.html',
  styleUrl: './profilepage.component.scss'
})
export class ProfilepageComponent implements OnInit{
  id:any = '';
  names:any=''
  isEdit = false;
  isprofileEdit =false 
  ifCond = true;//change after create add profile section
  profileLock = false;
  ispassword =false;
  isReset = false;
  isprofile_login= false;
  isAddnewprofile = false;//change after create add profile section
  ifAddprofile = false
  profileTitle :string = '';
  isAddProfile = false;
 
 

  editProfileForm! : FormGroup
  profileLoginform!:FormGroup
  passwordForm! : FormGroup
  private router = inject(Router);
  private profilelogin = inject(FormBuilder)
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

    this.profileLoginform = this.profilelogin.group({
      first : ['',Validators.required],
      second :['',Validators.required],
      third : ['',Validators.required],
      fourth : ['',Validators.required],
    });

    this.editProfileForm = this.formBuilder.group({
      id: [''],
      name: ['', Validators.required], 
      isprofileLock: [false],
    });
  }
  
  profiles = [
    { id: 1, name: 'Athul', image: '/assets/profilelogo2.svg',ifprofilelock: false },
    { id: 2, name: 'Aswin', image: '/assets/profilelogo.svg',ifprofilelock: false },
    { id: 3, name: 'Manoj', image: '/assets/profilelogo3.svg',ifprofilelock: false },
  ];

 
  editProfile() {
    this.isEdit = !this.isEdit;
    this.isAddnewprofile = !this.isAddnewprofile
  }

  profileEdit(profileObj : any){
   this.profileAction(profileObj);  
  }
  
  profileAction(profileObj: any) {
    this.ifCond = false;
  
    const { name, id, ifprofilelock } = profileObj;
  
    if (this.isAddProfile) {
      const newProfile = {
        id: this.profiles.length + 1,
        name: this.editProfileForm.value.name,
        image: '/assets/profilelogo.svg', 
        ifprofilelock: this.editProfileForm.value.isprofileLock,
      };
      
      this.profiles.push(newProfile);
      this.editProfileForm.reset();
      this.isAddProfile = false;
 
    } else {
      this.profileTitle = 'Edit Profile';
      this.editProfileForm.patchValue({
        id:id,
        name:name,
        isprofileLock:ifprofilelock
      });
      
      // this.editProfileForm.get('name')?.setValidators([Validators.required]);
      // this.editProfileForm.get('name')?.updateValueAndValidity();

      if (this.editProfileForm.value.isprofileLock) {
        this.isprofile_login = true;
      } else {
        this.isprofileEdit = true;
      }
    }
  }

  

  Addnewprofile(profileObj:any){
    this.profileAction(profileObj);
    this.ifCond = false
    this.isprofileEdit = true
    this.editProfileForm.reset();
    this.editProfileForm.patchValue({ isprofileLock: false });
    this.isAddProfile = true;
    this.profileTitle = 'Create Profile';
  }


  profilePassword(profile:any){
    console.log("profile id",this.editProfileForm.value.id);
    
    const isProfileLocked = this.editProfileForm.value.isprofileLock;
    console.log('Is Profile Locked:', isProfileLocked);
    if(!isProfileLocked){
      this.ifCond=false
      this.ispassword = true
    }
    else{
      this.ispassword = false  
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
     this.editProfileForm.value.isprofileLock = true   
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
     this.editProfileForm.value.isprofileLock = true
    
    }
    else{
      this.passwordForm.setErrors({mismatch : true})
      console.log("pin is incorrect");
      
    }    
    return this.passwordForm.invalid 
  }

  onSubmit(){
 
      console.log(this.profileLoginform.value);
        this.router.navigate(['/welcome']);
    
  }

  reset(profile:any){  
  console.log("Profile PIN reset for:", this.editProfileForm.value.id);
  this.ifCond = false;
  this.ispassword = true;
  }

  close(){
    this.ispassword = false;
    this.editProfileForm.patchValue({
    isprofileLock: false
  });
  }
  

  profileedit() {
    if (this.isAddProfile) {
      const newProfile = {
        id: this.profiles.length + 1,
        name: this.editProfileForm.value.name,
        image: '/assets/profilelogo.svg', 
        ifprofilelock: this.editProfileForm.value.isprofileLock,
      };
      this.isprofileEdit = false;
      this.ifCond = true;
      this.isEdit = true;
      
  
      this.profiles.push(newProfile);
  
      this.editProfileForm.reset();
      this.isAddProfile = false;
      
    } else {
      const editedProfileId = this.editProfileForm.value.id;
      const editedProfileLockStatus = this.editProfileForm.value.isprofileLock;
  
      const editedProfileIndex = this.profiles.findIndex(profile => profile.id === editedProfileId);
      if (editedProfileIndex !== -1) {
        this.profiles[editedProfileIndex].ifprofilelock = editedProfileLockStatus;
      }
      this.isprofileEdit = false;
      this.ifCond = true;
      this.isEdit = true;
    }
  }
  
  

  profileLogin(profile:any){
    const {id, ifprofilelock} = profile 
    console.log(profile.id); 
    if (!this.editProfileForm.value.isprofileLock && this.editProfileForm.value.id) {
      if (this.editProfileForm.value.isprofileLock) {
        this.isprofile_login = true;
      } else {
        this.isprofile_login = false;
        console.log("Toggle is not active for the selected profile");
      }
      this.isprofile_login = true;
    } else {
      this.isprofile_login = false;
      console.log("Toggle is not active for the selected profile");
    }  
  }

  profile_close(){
    this.isprofile_login = false;
  }

  forgotPassword(profile:any){
    console.log("Forgot password for:", this.editProfileForm.value.id);
    this.ispassword = true;
    this.isprofile_login = false
  }
}

