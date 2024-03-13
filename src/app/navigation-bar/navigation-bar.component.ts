import { Component, OnInit, inject } from '@angular/core';
import { ApiServiceService } from '../api-service.service';

@Component({
  selector: 'app-navigation-bar',
  standalone: true,
  imports: [],
  templateUrl: './navigation-bar.component.html',
  styleUrl: './navigation-bar.component.scss',
  providers: [ApiServiceService],
})
export class NavigationBarComponent implements OnInit{

  private profileService = inject(ApiServiceService)
  isPtofile = false;

  constructor(){}

  ngOnInit(): void {
      this.getProfileDetails();
  }

  profiles:any[] =[];

  pages = [
    { id: 1, page: 'Home', isActive: false, background: false },
    { id: 2, page: 'Movies', isActive: false, background: false },
    { id: 3, page: 'Shows', isActive: false, background: false },
    { id: 4, page: 'EPG', isActive: false, background: false }
  ];
  dropdown(){
    this.isPtofile = !this.isPtofile
    let val = document.getElementById('userprofile-login') as HTMLDivElement
    val.style.display = 'block'
  }
  toggleStyles(item:any){
    item.isActive = !item.isActive;
    item.background = !item.background;
  }

  noFocus(){
    let val = document.getElementById('userprofile-login') as HTMLDivElement
    val.style.display = 'none'
  }

  getProfileDetails() {
    this.profileService.getProfileList().subscribe({
      next: (response) => {
        this.profiles = response.map((item: any) => ({
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
}
