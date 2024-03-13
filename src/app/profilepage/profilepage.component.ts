import { CommonModule, NumberFormatStyle } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ApiServiceService } from '../api-service.service';
import { Subscription, take } from 'rxjs';
import { SubjectService } from '../Subject/subject.service';
import response from '../response';

@Component({
  selector: 'app-profilepage',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    HttpClientModule,
  ],
  templateUrl: './profilepage.component.html',
  styleUrl: './profilepage.component.scss',
  providers: [ApiServiceService],
})
export class ProfilepageComponent implements OnInit {
  id: any = '';
  names: any = '';
  isEdit = false;
  isprofileEdit = false;
  ifCond = true;
  profileLock = false;
  ispassword = false;
  isprofile_login = false;
  isAddnewprofile = false;
  ifAddprofile = false;
  profileTitle: string = '';
  isAddProfile = false;
  profile_login = false;
  editProfileForm!: FormGroup;
  profileLoginform!: FormGroup;
  passwordForm!: FormGroup;
  private router = inject(Router);
  private profilelogin = inject(FormBuilder);
  private formBuilder = inject(FormBuilder);
  private profileService = inject(ApiServiceService);
  private subject = inject(SubjectService);

  selectedProfile: any;
  itemIndex = 0;
  rowIndex = 0;
  buttonCodeSubscription!: Subscription;


  constructor() {}
  profiles1: any[] = [];

  ngOnInit(): void {
    this.getProfileDetails();
    this.initButtonCodeSubscription();
    this.avatarPic();

    this.passwordForm = this.formBuilder.group({
      first: ['', Validators.required],
      second: ['', Validators.required],
      third: ['', Validators.required],
      fourth: ['', Validators.required],
      fifth: ['', Validators.required],
      sixth: ['', Validators.required],
      seventh: ['', Validators.required],
      eighth: ['', Validators.required],
    });

    this.profileLoginform = this.formBuilder.group({
      first: ['', Validators.required],
      second: ['', Validators.required],
      third: ['', Validators.required],
      fourth: ['', Validators.required],
    });
    this.editProfileForm = this.formBuilder.group({
      subscriberId:[],
      id: [''],
      profileAvatar:[],
      profileName: ['', Validators.required],
      profilePin: [0],
      kidsSafe: [0],
    });
  }
  // button code management
  initButtonCodeSubscription(): void {
    this.buttonCodeSubscription = this.subject.getButtonCodeObservable().subscribe((code) => {
        switch (code) {
          case 19: {
            this.upBtnClick();
            break;
          }
          case 20: {
            this.downBtnClick();
            break;
          }
          case 21: {
            this.leftBtnClick();
            break;
          }
          case 22: {
            this.rightBtnClick();
            break;
          }
          case 23: {
            this.okBtnClick();
            break;
          }
        }
        // this.setActiveItem();
      });      
  }

  leftBtnClick(): void {
    this.itemIndex = this.itemIndex > 0 ? this.itemIndex - 1 : this.itemIndex;
    const profileElement = document.querySelector(`#id${this.itemIndex}`);

    if (profileElement) {
      let scrollOffset = 400;
      const profilesContainer = document.querySelector('.profiles');
      if (profilesContainer) {
        scrollOffset = 415;
        profilesContainer.scrollBy({
          top: 0,
          left: -scrollOffset,
          behavior: 'smooth',
        });
      }
    }
  }

  rightBtnClick(): void {
    const totalProfiles = this.profiles1.length;
    this.itemIndex = this.itemIndex < totalProfiles - 1 ? this.itemIndex + 1 : this.itemIndex;
    const profileElement = document.querySelector(`#id${this.itemIndex}`);

    const squircleElements = document.querySelectorAll('.squircle');
    if (squircleElements) {  //&& squircleElements.length > 0
      let scrollOffset = 400;
      const profilesContainer = document.querySelector('.profiles');
      if (profilesContainer) {
        scrollOffset = 415;
        profilesContainer.scrollBy({
          top: 0,
          left: scrollOffset,
          behavior: 'smooth',
        });
      }
    }
  }

  setActiveItem(rowIndex: number, itemIndex: number): void {
    const elems = document.querySelectorAll('.profile-pic .squircle');
    elems.forEach((el) => {
      el.classList.remove('active');
    });

    const selectedProfileElement = document.querySelector(`#id${itemIndex}`);
    if (selectedProfileElement) {
      selectedProfileElement.classList.add('active');
    }
  }

  okBtnClick(){
    this.router.navigate(['/welcome'])
  }

  downBtnClick(){
    if(this.rowIndex<1){
    this.itemIndex = 0;
    const squircleElements = document.querySelectorAll('.squircle');
    if (squircleElements.length > 0) {
      this.rowIndex += 1;
      const genreElement:any = document.querySelector(`#id${this.rowIndex}`);
      genreElement.scrollLeft=0;
      if (genreElement) {
        genreElement.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }
    }}
  }

  upBtnClick(): void {
    this.itemIndex = 0;
    let carousalItem = document.querySelector(`#id${this.rowIndex}`);
    
    if (carousalItem) {
     
      carousalItem.scrollLeft = 0;
    }
    
    if (this.rowIndex > 0) {
      
      this.rowIndex -= 1;
    }
  }

  // selectProfile(profile: any) {
  //   this.selectedProfile = profile;
  // }

  editProfile() {
    this.isEdit = !this.isEdit;
    this.isAddnewprofile = !this.isAddnewprofile;
  }

  profileEdit(profileObj: any) {
    this.profileAction(profileObj);
    // this.getProfileDetails();
  }

  profileAction(profileObj: any) {
    this.ifCond = false;

    const { profileName, id, profilePin, kidsSafe, profileAvatar,subscriberId } = profileObj;

    if (this.isAddProfile) {
      const newProfile = {
        subscriberId:this.editProfileForm.value.subscriberId,
        profileName: this.editProfileForm.value.profileName,
        profilePin: this.editProfileForm.value.profilePin!== null ? this.editProfileForm.value.profilePin : 0,
        profileAvatar: this.editProfileForm.value.profileAvatar,
        kidsSafe: this.editProfileForm.value.kidsSafe ? 1 : 0,
      };
      
      // this.editProfileForm.patchValue({ profilePin: 1 });
      this.addProfile(newProfile);
      
      // this.profiles1.push(newProfile);      
      // this.editProfileForm.reset();
      this.isAddProfile = false;
      this.isprofile_login = false;
    } else {
     
      this.profileTitle = 'Edit Profile';
      this.editProfileForm.patchValue({
        subscriberId:subscriberId,
        id: id,
        profileName: profileName,
        profilePin: profilePin,
        kidsSafe: kidsSafe ? 1 : 0,
        profileAvatar: profileAvatar,
      });

      // this.editProfileForm.get('name')?.setValidators([Validators.required]);
      // this.editProfileForm.get('name')?.updateValueAndValidity();

      

      if (this.editProfileForm.value.profilePin == 0) {
        this.isprofileEdit = true;
      } else if (this.editProfileForm.value.profilePin == null) {
        this.isprofileEdit = true;
      } else {
        this.isprofile_login = true;
      }
      
    }
    
    // this.getProfileDetails()
  }

  Addnewprofile(profileObj: any) {
    this.profileAction(profileObj);
    this.ifCond = false;
    this.isprofileEdit = true;
    this.isAddProfile = true;
    this.profileTitle = 'Create Profile';
    this.editProfileForm.reset();
  }

  profilePassword(event: any) {
    const checked = event.target.checked;
    const profilePinValue = this.editProfileForm.value.profilePin;
    const valueToSet = checked? profilePinValue != null? profilePinValue: 0: 0;
   
    this.editProfileForm.patchValue({
      profilePin: valueToSet,
    });
    if (valueToSet !== 0) {
      this.ispassword = true;
    } else {
      this.ispassword = false;
    }
    
    this.getProfileDetails()
  }

  onInputChange(
    currentInput: HTMLInputElement,
    nextInput: HTMLInputElement
  ): void {
    if (currentInput && nextInput && currentInput.value.length === 1) {
      nextInput.focus();
    }
  }
  num: number = 1;

  onInputChange2(
    currentInput: HTMLInputElement,
    nextInput1: HTMLInputElement,
    nextInput2: HTMLInputElement,
    nextInput3: HTMLInputElement
  ): void {
    if (currentInput && currentInput.value.length === 1) {
      if (currentInput === nextInput3) {
        console.log(currentInput);

        this.submitForm();
      } else {
        nextInput1.focus();
      }
    }
  }

  toggleKidsSafe(event: Event) {
    const checked = (event.target as HTMLInputElement).checked;
    const valueToSet = checked ? 1 : 0;
    this.editProfileForm.get('kidsSafe')?.setValue(valueToSet);
  
  }

  submitForm(): void {
   
    

    const enteredPin =
    (this.profileLoginform.get('first')?.value ?? '') +
    (this.profileLoginform.get('second')?.value ?? '') +
    (this.profileLoginform.get('third')?.value ?? '') +
    (this.profileLoginform.get('fourth')?.value ?? '');
  
  console.log('Entered PIN:', enteredPin);
  
  const enteredPinValue = enteredPin;
  console.log("Parsed Entered PIN:", enteredPinValue);
    
  if (!isNaN(enteredPinValue)) {
    const foundProfile = this.profiles1.find(profile => profile.profilePin.toString() === enteredPinValue);
    
    if (foundProfile) {
      console.log('Login successful');
      this.isprofileEdit = true;
      this.isprofile_login = false;
    }
    else{
      this.isprofileEdit = false;
      console.log('Incorrect PIN entered');
    }
  
  }
   
    // this.profileLoginform.reset();
   

    // if (foundProfile===this.profiles1.) {
      
    // } else {
    //   console.log('Incorrect PIN entered');
    // }

  }

  savePassword() {
    this.ispassword = false;
  
    const enteredPin =
      this.passwordForm.get('first')?.value +
      this.passwordForm.get('second')?.value +
      this.passwordForm.get('third')?.value +
      this.passwordForm.get('fourth')?.value;
      this.editProfileForm.value.profilePin = enteredPin;
      
    this.passwordForm.reset();
    
  }

  formValidity() {
    let first = this.passwordForm.get('first')?.value,
      second = this.passwordForm.get('second')?.value,
      third = this.passwordForm.get('third')?.value,
      fourth = this.passwordForm.get('fourth')?.value,
      fifth = this.passwordForm.get('fifth')?.value,
      sixth = this.passwordForm.get('sixth')?.value,
      seventh = this.passwordForm.get('seventh')?.value,
      eighth = this.passwordForm.get('eighth')?.value;

    if (first != fifth) {
      return true;
    }
    if (second != sixth) {
      return true;
    }
    if (third != seventh) {
      return true;
    }
    if (fourth != eighth) {
      return true;
    }
    return false || this.passwordForm.invalid;
  }

  reset(profile: any) {
    console.log('Profile PIN reset for:', this.editProfileForm.value.id);
    this.ifCond = false;
    this.ispassword = true;
  }

  close() {
    this.ispassword = false;
    this.editProfileForm.patchValue({
      profilePin: false,
    });
  }

  profileedit() {
    if (this.isAddProfile && this.editProfileForm.valid) {
      const newProfile = {
        subscriberId: "630383ffbf448c47a0a81413", 
        profileName: this.editProfileForm.value.profileName,
        profilePin: this.editProfileForm.value.profilePin,
        profileAvatar: this.editProfileForm.value.profileAvatar,
        kidsSafe: this.editProfileForm.value.kidsSafe ? 1 : 0,
      };
      this.addProfile(newProfile);
      
      this.isprofileEdit = false;
      this.ifCond = true;
      this.isEdit = true;

      this.editProfileForm.reset();
      this.isAddProfile = false;
      this.getProfileDetails()
     
    } else if (!this.isAddProfile && this.editProfileForm.valid) {
      const editedProfileId = this.editProfileForm.value.id;
      const editedProfileName = this.editProfileForm.value.profileName;
      const editedProfileLockStatus = this.editProfileForm.value.profilePin;
      const editedProfileKidSsafe = this.editProfileForm.value.kidsSafe;

      const editedProfileIndex = this.profiles1.findIndex(
        (profile) => profile.id === editedProfileId
      );
      if (editedProfileIndex !== -1) {
        this.profiles1[editedProfileIndex].profileName = editedProfileName;
        this.profiles1[editedProfileIndex].profilePin = editedProfileLockStatus;
        this.profiles1[editedProfileIndex].kidsSafe = editedProfileKidSsafe;
      }

      this.isprofileEdit = false;
      this.ifCond = true;
      this.isEdit = true;
     
      
    }
    this.updateProfile(); 
  }

  profileLogin(selectedProfile: any) {
    if (selectedProfile.profilePin !== 0) {
      this.isprofile_login = true;
    } else {
      this.isprofile_login = false;
      this.router.navigate(['login/maincarousel']);
    }
  }

  profile_close() {
    this.isprofile_login = !this.isprofile_login;
    this.ifCond = true;
  }

  forgotPassword(profile: any) {
    console.log('Forgot password for:', this.editProfileForm.value.id);
    this.ispassword = true;
    this.isprofile_login = false;
  }

  getProfileDetails() {
    console.log("api here");
    
    this.profileService.getProfileList().subscribe({
      next: (response) => {
        console.log(response);
        
        this.profiles1 = response.map((item: any) => ({
          id: item.id,
          profileName: item.profileName,
          profilePin: item.profilePin,
          profileAvatar: item.profileAvatar,
          kidsSafe: item.kidsSafe ? 1 : 0,
        }));
      },
      error: (error) => {
        console.error('Error fetching profiles: ', error);
      },
    });
  }

  updateProfile() {
    const profileData = this.editProfileForm.value;
    this.profileService.updateProfileInfo(profileData).subscribe({
      next: (response:any) => {
        console.log('Profile updated successfully:', response);
        this.getProfileDetails()
      },
      error: (error:any) => {
        console.error('Error updating profile:', error);
      },
    });
  }

  addProfile(newProfile: any) {
    this.profileService.addNewProfile(newProfile).subscribe({
      next: (response) => {
        console.log('New profile added successfully:', response);
      },
      error: (error) => {
        console.error('Error adding new profile:', error);
       
      }
    });
  }
avatar:any[]=[]
  avatarPic(){
    this.profileService.profileAvatar().subscribe({
      next:(response) =>{
        this.avatar=response
      },
      error:(error)=>{
        console.log('Error adding new profile:', error);
        
      }  
    })
  }

}
