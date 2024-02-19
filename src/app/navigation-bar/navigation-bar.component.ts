import { Component } from '@angular/core';

@Component({
  selector: 'app-navigation-bar',
  standalone: true,
  imports: [],
  templateUrl: './navigation-bar.component.html',
  styleUrl: './navigation-bar.component.scss'
})
export class NavigationBarComponent {


  isPtofile = false;

  profiles = [
    {
      id: 1,
      name: 'Athul',
      image: '/assets/profilelogo2.svg',
      ifprofilelock: true,
      color: '#096CE6'
    },
    {
      id: 2,
      name: 'Aswin',
      image: '/assets/profilelogo.svg',
      ifprofilelock: false,
      color: '#073C4D'
    },
    {
      id: 3,
      name: 'Manoj',
      image: '/assets/profilelogo2.svg',
      ifprofilelock: false,
      color:'#E50914'
      
    },
  ];

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
}
