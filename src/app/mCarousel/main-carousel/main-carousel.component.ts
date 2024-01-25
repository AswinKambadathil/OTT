import { Component } from '@angular/core';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-main-carousel',
  standalone: true,
  imports: [],
  templateUrl: './main-carousel.component.html',
  styleUrl: './main-carousel.component.scss',
  animations:[]
})
export class MainCarouselComponent implements OnInit{
  ngOnInit():void{}
  imageArray = [
    {
      imageUrl: 'assets/Login/Movies/kantara-Banner.jpg',
      description: 'Movie',
      title: '#1 in Trending',
      discriptUrl: 'assets/Login/Movies/kantara-Name.jpg',
      logoUrl:'assets/Login/Movies/Amazon-Prime-Video-Icon.png'
    },
    {
      imageUrl: 'assets/Login/Movies/neru.jpg',
      description: 'Movie',
      title: '#1 in Trending',
      discriptUrl: 'assets/Login/Movies/neru-name.jpeg',
      logoUrl:'assets/Login/Movies/Amazon-Prime-Video-Icon.png'
    },
    {
      imageUrl: 'assets/Login/Movies/kantara-Banner.jpg',
      description: 'Movie',
      title: '#1 in Trending',
      discriptUrl: 'assets/Login/Movies/kantara-Name.jpg',
      logoUrl:'assets/Login/Movies/Amazon-Prime-Video-Icon.png'
    },
    {
      imageUrl: 'assets/Login/Movies/ozler.jpg',
      description: 'Movie',
      title: '#1 in Trending',
      discriptUrl: 'assets/Login/Movies/ozler-name.jpeg',
      logoUrl:'assets/Login/Movies/Amazon-Prime-Video-Icon.png'
    },
    {
      imageUrl: 'assets/Login/Movies/kantara-Banner.jpg',
      description: 'Movie',
      title: '#1 in Trending',
      discriptUrl: 'assets/Login/Movies/kantara-Name.jpg',
      logoUrl:'assets/Login/Movies/Amazon-Prime-Video-Icon.png'
    }
    ,
    {
      imageUrl: 'assets/Login/Movies/animal.jpg',
      description: 'Movie',
      title: '#1 in Trending',
      discriptUrl: 'assets/Login/Movies/animal-name.jpg',
      logoUrl:'assets/Login/Movies/Amazon-Prime-Video-Icon.png'
    }
  ];

}
