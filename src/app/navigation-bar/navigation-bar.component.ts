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

  dropdown(){
    this.isPtofile = !this.isPtofile
  }
}
