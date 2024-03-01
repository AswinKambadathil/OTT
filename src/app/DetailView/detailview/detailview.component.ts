import { Component, OnInit, inject } from '@angular/core';
import { ApiServiceService } from '../../api-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detailview',
  standalone: true,
  imports: [],
  templateUrl: './detailview.component.html',
  styleUrl: './detailview.component.scss',
  providers:[ApiServiceService]
})
export class DetailviewComponent implements OnInit{
  ngOnInit(): void {
    this.postHome();
    
  }
  private httpDataService = inject(ApiServiceService)
  private route = inject(ActivatedRoute)
  id : any
  bannerInfo:any = []
  featuredInfo:any = []
  defaultInfo:any = []


  // postHome(){
  //   this.httpDataService.postBanner({pageName:'Home'}).subscribe({
  //     next: (response: any) => {
  //       this.route.paramMap.subscribe(params =>{
  //         this.id = params.get('id'); 
  //       });
  //       this.imageArray = response
  //       console.log(response);
        
  //     },
  //     error: (error: any) => {
  //       console.error('Error fetching data:', error);
  //     }
  //   });
  // }
  postHome(){
    this.httpDataService.postContinue({pageName:'Home'}).subscribe({
      next: (response) => { 
        this.bannerInfo = response.bannerInfo
        this.featuredInfo = response.featuredInfo
        this.defaultInfo = response.defaultInfo
        this.route.paramMap.subscribe(params =>{
          this.id = params.get('id'); 
        });
        console.log(this.defaultInfo);
        
      },
      error: (error: any) => {
        console.error('Error fetching data:', error);
      }
    });
  }

  
  imageArray:any = []
  imageArra = [
    {
      id: 1,
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
      id: 2,
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
      id: 3,
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
      id: 4,
      imageUrl: 'assets/Login/Movies/kantara-Name.jpg',
      description: 'Movie',
      title: '#1 in Trending',
      discriptUrl: 'assets/Login/Movies/ozler-name.jpeg',
      logoUrl: 'assets/Login/Movies/Amazon-Prime-Video-Icon.png',
      potrait: 'assets/Login/Movies/potrait4.jpg',
      name: 'Kantara3',
      isFavorite: 'false',
      brief: 'It involves culture of Kambala and Bhootha Kola.A human and nature conflict where Shiva is a rebel who defends his village and nature. A death leadsto war between villagers and evil forces. Will he be able to regain peace in the village',
      rating: 'IMDb 6.1',
      time: '2 h 28 min',
      year: '2023',
      ua: 'U/A 13+',
      category1: 'Suspense',
      category2: 'Action',
      category3: 'Drama',
      category4: 'Adventure',
      amazon: 'Play in Amazon Prime',
      sony: 'Play in Sony Liv',
      aha: 'Play in Aha Telugu',
      disney: 'Play in Disney+'

    },
    {
      id: 5,
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
      id: 6,
      imageUrl: 'assets/Login/Movies/animal.jpg',
      description: 'Movie',
      title: '#1 in Trending',
      discriptUrl: 'assets/Login/Movies/animal-name.jpg',
      logoUrl: 'assets/Login/Movies/Amazon-Prime-Video-Icon.png',
      potrait: 'assets/Login/Movies/potrait6.jpeg',
      name: 'Kantara5',
      isFavorite: 'false'
    },
    {
      id: 7,
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
      id: 8,
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
      id: 9,
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
      id: 10,
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
      id: 11,
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
