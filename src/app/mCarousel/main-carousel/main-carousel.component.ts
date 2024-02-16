import { Component, inject } from '@angular/core';
import { OnInit } from '@angular/core';
import { ApiServiceService } from '../../api-service.service';

@Component({
  selector: 'app-main-carousel',
  standalone: true,
  imports: [],
  templateUrl: './main-carousel.component.html',
  styleUrl: './main-carousel.component.scss',
  providers:[ApiServiceService],
  animations:[]
})
export class MainCarouselComponent implements OnInit{

  private httpDataService = inject(ApiServiceService)

  ngOnInit():void{
    this.getData()
  }

  getData() {
    this.httpDataService.getData().subscribe((response: any) => {
      console.log('Data:', response);

    }, error => {
      console.error('Error fetching data:', error);
      
    });
  }

  imageArray = [
    {
      id : 1,
      imageUrl: 'assets/Login/Movies/kantara-Banner.jpg',
      description: 'Movie',
      title: '#1 in Trending',
      discriptUrl: 'assets/Login/Movies/kantara-Name.jpg',
      logoUrl: 'assets/Login/Movies/Amazon-Prime-Video-Icon.png',
      potrait: 'assets/Login/Movies/potrait1.jpeg',
      name: 'Kantara',
      isFavorite: 'false'
    },
    {
      id : 2,
      imageUrl: 'assets/Login/Movies/neru.jpg',
      description: 'Movie',
      title: '#1 in Trending',
      discriptUrl: 'assets/Login/Movies/neru-name.jpeg',
      logoUrl: 'assets/Login/Movies/Amazon-Prime-Video-Icon.png',
      potrait: 'assets/Login/Movies/potrait2.jpeg',
      name: 'Kantara1',
      isFavorite: 'false'
    },
    {
      id : 3,
      imageUrl: 'assets/Login/Movies/kantara-Banner.jpg',
      description: 'Movie',
      title: '#1 in Trending',
      discriptUrl: 'assets/Login/Movies/kantara-Name.jpg',
      logoUrl: 'assets/Login/Movies/Amazon-Prime-Video-Icon.png',
      potrait: 'assets/Login/Movies/potrait3.jpeg',
      name: 'Kantara2',
      isFavorite: 'false'
    },
    {
      id : 4,
      imageUrl: 'assets/Login/Movies/ozler.jpg',
      description: 'Movie',
      title: '#1 in Trending',
      discriptUrl: 'assets/Login/Movies/ozler-name.jpeg',
      logoUrl: 'assets/Login/Movies/Amazon-Prime-Video-Icon.png',
      potrait: 'assets/Login/Movies/potrait4.jpg',
      name: 'Kantara3',
      isFavorite: 'false'
    },
    {
      id : 5,
      imageUrl: 'assets/Login/Movies/kantara-Banner.jpg',
      description: 'Movie',
      title: '#1 in Trending',
      discriptUrl: 'assets/Login/Movies/kantara-Name.jpg',
      logoUrl: 'assets/Login/Movies/Amazon-Prime-Video-Icon.png',
      potrait: 'assets/Login/Movies/potrait5.jpg',
      name: 'Kantara4',
      isFavorite: 'false'
    }
    ,
    {
      id : 6,
      imageUrl: 'assets/Login/Movies/animal.jpg',
      description: 'Movie',
      title: '#1 in Trending',
      discriptUrl: 'assets/Login/Movies/animal-name.jpg',
      logoUrl: 'assets/Login/Movies/Amazon-Prime-Video-Icon.png',
      potrait: 'assets/Login/Movies/potrait6.jpeg',
      name: 'Kantara5',
      isFavorite: 'false'
    }
  ];


  myFavorite(item:any){
    item.isFavorite = !item.isFavorite
  }

}
