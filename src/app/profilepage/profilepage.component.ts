import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ApiServiceService } from '../api-service.service';

@Component({
  selector: 'app-profilepage',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, RouterModule,HttpClientModule],
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
  private profileService = inject(ApiServiceService)

  constructor( ) {}
  profiles1: any[] = [];

  ngOnInit(): void {
    
    this.getProfileDetails();
    
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

    this.profileLoginform = this.profilelogin.group({
      first: ['', Validators.required],
      second: ['', Validators.required],
      third: ['', Validators.required],
      fourth: ['', Validators.required],
    });

    this.editProfileForm = this.formBuilder.group({
      id: [''],
      name: ['', Validators.required],
      isprofileLock: [false],
      color:[''],
    });
  }
  
  

  profiles = [
    {
      id: 1,
      name: 'Athul',
      image: '/assets/profilelogo2.svg',
      ifprofilelock: false,
      color: '#CE7AEC'
    },
    {
      id: 2,
      name: 'Aswin',
      image: '/assets/profilelogo.svg',
      ifprofilelock: false,
      color: '#ECE47A'
    },
    {
      id: 3,
      name: 'Manoj',
      image: '/assets/profilelogo2.svg',
      ifprofilelock: false,
      color:'blue'
      
    },
  ];

  editProfile() {
    this.isEdit = !this.isEdit;
    this.isAddnewprofile = !this.isAddnewprofile;
  }

  profileEdit(profileObj: any) {
    this.profileAction(profileObj);
    console.log(this.editProfileForm.get('isprofileLock')?.value,profileObj.id.value);
  }

  profileAction(profileObj: any) {
    this.ifCond = false;

    const { name, id, ifprofilelock, isprofile_login } = profileObj;

    if (this.isAddProfile) {
      const newProfile = {
        id: this.profiles.length + 1,
        name: this.editProfileForm.value.name,
        image: '/assets/profilelogo.svg',
        ifprofilelock: this.editProfileForm.value.isprofileLock,
        color:this.editProfileForm.value.color
      };

      this.profiles.push(newProfile);
      this.editProfileForm.reset();
      this.isAddProfile = false;
      this.isprofile_login = false;
    } else {
      this.profileTitle = 'Edit Profile';
      this.editProfileForm.patchValue({
        id: id,
        name: name,
        isprofileLock: ifprofilelock,
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

  Addnewprofile(profileObj: any) {
    this.profileAction(profileObj);
    this.ifCond = false;
    this.isprofileEdit = true;
    this.editProfileForm.reset();
    this.editProfileForm.patchValue({ isprofileLock: false });
    this.isAddProfile = true;
    this.profileTitle = 'Create Profile';
  }

  profilePassword(profile: any) {
    console.log('profile id', this.editProfileForm.value.id);
    const isProfileLocked = this.editProfileForm.value.isprofileLock;
    console.log('Is Profile Locked:', isProfileLocked);
    if (!isProfileLocked) {
      // this.ifCond = false;
      this.ispassword = true;
      console.log(this.ispassword);
    } else {
      console.log(this.ispassword);
      this.ispassword = false;
    }
  }

  onInputChange(
    currentInput: HTMLInputElement,
    nextInput: HTMLInputElement
  ): void {
    if (currentInput && nextInput && currentInput.value.length === 1) {
      nextInput.focus();
    }
  }

  savePassword() {
    this.editProfileForm.value.isprofileLock = true;
    this.ispassword = false;

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

  onSubmit() {
    console.log(this.profileLoginform.value);
    this.router.navigate(['/welcome']);
  }

  reset(profile: any) {
    console.log('Profile PIN reset for:', this.editProfileForm.value.id);
    this.ifCond = false;
    this.ispassword = true;
  }

  close() {
    this.ispassword = false;
    this.editProfileForm.patchValue({
      isprofileLock: false,
    });
  }

  profileedit() {
    if (this.isAddProfile && this.editProfileForm.valid) {
      const newProfile = {
        id: this.profiles.length + 1,
        name: this.editProfileForm.value.name,
        image: '/assets/profilelogo.svg',
        ifprofilelock: this.editProfileForm.value.isprofileLock,
        color:this.editProfileForm.value.color
      };
      this.isprofileEdit = false;
      this.ifCond = true;
      this.isEdit = true;

      this.profiles.push(newProfile);

      this.editProfileForm.reset();
      this.isAddProfile = false;
    } else if (!this.isAddProfile && this.editProfileForm.valid) {
      const editedProfileId = this.editProfileForm.value.id;
      const editedProfileName = this.editProfileForm.value.name;
      const editedProfileLockStatus = this.editProfileForm.value.isprofileLock;
      
      console.log(editedProfileId,editedProfileLockStatus);
      

      const editedProfileIndex = this.profiles.findIndex(
        (profile) => profile.id === editedProfileId
      );
      if (editedProfileIndex !== -1) {
        this.profiles[editedProfileIndex].name = editedProfileName;
        this.profiles[editedProfileIndex].ifprofilelock =
          editedProfileLockStatus;
      }

      this.isprofileEdit = false;
      this.ifCond = true;
      this.isEdit = true;
    }
  }

  profileLogin(selectedProfile: any) {   
    if (selectedProfile.ifprofilelock) {
      
      this.isprofile_login = true;
    } else {
      this.isprofile_login = false;
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

  getProfileDetails(){
    this.profileService.getProfileList().subscribe({
      next:(response) => {
        this.profiles1 = response;
        console.log(this.profiles1);
        
      },
      error:(error) => {
        console.error('Error fetching profiles: ', error);
      }
  });
  }
}
