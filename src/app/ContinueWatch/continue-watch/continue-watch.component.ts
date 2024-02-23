import { CommonModule } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, Input, OnInit, inject } from '@angular/core';
import { catchError, finalize, map, switchMap } from 'rxjs';
import { HttpWrapperService } from '../../utilities/interceptors/http-interceptor/http-wrapper.service';
import { ApiServiceService } from '../../api-service.service';

@Component({
  selector: 'app-continue-watch',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './continue-watch.component.html',
  styleUrl: './continue-watch.component.scss',
  providers:[ApiServiceService]
})
export class ContinueWatchComponent implements OnInit {
  
  @Input() styleChange: "1stStyle" | "2ndStyle" = "1stStyle"
  @Input() label!:string
  id!:string
  arrowLeft = false
  arrowRight = true
  
  private continue = inject(ApiServiceService)

  ngOnInit(){
    this.removeSpacesFromLabel()
    this.postHome()
  }

  postHome(){
    this.continue.postContinue({pageName:'Home'}).subscribe({
      next: (response: any) => {
        
        this.imageArray=response
        console.log(this.imageArray);
      },
      error: (error: any) => {
        console.error('Error fetching data:', error);
      }
    });
  }

  removeSpacesFromLabel(){
    this.id = this.label.split(" ").join("");
  }

  imageArray:any = []
  // imageArra = [
  //   {
  //     id : 1,
  //     imageUrl: 'assets/Login/Movies/kantara-Banner.jpg',
  //     description: 'Movie',
  //     title: '#1 in Trending',
  //     discriptUrl: 'assets/Login/Movies/kantara-Name.jpg',
  //     logoUrl: 'assets/Login/Movies/Amazon-Prime-Video-Icon.png',
  //     potrait: 'assets/Login/Movies/potrait1.jpeg',
  //     name: 'Kantara',
  //     isFavorite: 'false'
  //   },
  //   {
  //     id : 2,
  //     imageUrl: 'assets/Login/Movies/neru.jpg',
  //     description: 'Movie',
  //     title: '#1 in Trending',
  //     discriptUrl: 'assets/Login/Movies/neru-name.jpeg',
  //     logoUrl: 'assets/Login/Movies/Amazon-Prime-Video-Icon.png',
  //     potrait: 'assets/Login/Movies/potrait2.jpeg',
  //     name: 'Kantara1',
  //     isFavorite: 'false'
  //   },
  //   {
  //     id : 3,
  //     imageUrl: 'assets/Login/Movies/kantara-Banner.jpg',
  //     description: 'Movie',
  //     title: '#1 in Trending',
  //     discriptUrl: 'assets/Login/Movies/kantara-Name.jpg',
  //     logoUrl: 'assets/Login/Movies/Amazon-Prime-Video-Icon.png',
  //     potrait: 'assets/Login/Movies/potrait3.jpeg',
  //     name: 'Kantara2',
  //     isFavorite: 'false'
  //   },
  //   {
  //     id : 4,
  //     imageUrl: 'assets/Login/Movies/ozler.jpg',
  //     description: 'Movie',
  //     title: '#1 in Trending',
  //     discriptUrl: 'assets/Login/Movies/ozler-name.jpeg',
  //     logoUrl: 'assets/Login/Movies/Amazon-Prime-Video-Icon.png',
  //     potrait: 'assets/Login/Movies/potrait4.jpg',
  //     name: 'Kantara3',
  //     isFavorite: 'false'
  //   },
  //   {
  //     id : 5,
  //     imageUrl: 'assets/Login/Movies/kantara-Banner.jpg',
  //     description: 'Movie',
  //     title: '#1 in Trending',
  //     discriptUrl: 'assets/Login/Movies/kantara-Name.jpg',
  //     logoUrl: 'assets/Login/Movies/Amazon-Prime-Video-Icon.png',
  //     potrait: 'assets/Login/Movies/potrait5.jpg',
  //     name: 'Kantara4',
  //     isFavorite: 'false'
  //   }
  //   ,
  //   {
  //     id : 6,
  //     imageUrl: 'assets/Login/Movies/animal.jpg',
  //     description: 'Movie',
  //     title: '#1 in Trending',
  //     discriptUrl: 'assets/Login/Movies/animal-name.jpg',
  //     logoUrl: 'assets/Login/Movies/Amazon-Prime-Video-Icon.png',
  //     potrait: 'assets/Login/Movies/potrait6.jpeg',
  //     name: 'Kantara5',
  //     isFavorite: 'false'
  //   },
  //   {
  //     id : 7,
  //     imageUrl: 'assets/Login/Movies/neru.jpg',
  //     description: 'Movie',
  //     title: '#1 in Trending',
  //     discriptUrl: 'assets/Login/Movies/neru-name.jpeg',
  //     logoUrl: 'assets/Login/Movies/Amazon-Prime-Video-Icon.png',
  //     potrait: 'assets/Login/Movies/potrait2.jpeg',
  //     name: 'Kantara1',
  //     isFavorite: 'false'
  //   },
  //   {
  //     id : 8,
  //     imageUrl: 'assets/Login/Movies/kantara-Banner.jpg',
  //     description: 'Movie',
  //     title: '#1 in Trending',
  //     discriptUrl: 'assets/Login/Movies/kantara-Name.jpg',
  //     logoUrl: 'assets/Login/Movies/Amazon-Prime-Video-Icon.png',
  //     potrait: 'assets/Login/Movies/potrait3.jpeg',
  //     name: 'Kantara2',
  //     isFavorite: 'false'
  //   },
  //   {
  //     id : 9,
  //     imageUrl: 'assets/Login/Movies/ozler.jpg',
  //     description: 'Movie',
  //     title: '#1 in Trending',
  //     discriptUrl: 'assets/Login/Movies/ozler-name.jpeg',
  //     logoUrl: 'assets/Login/Movies/Amazon-Prime-Video-Icon.png',
  //     potrait: 'assets/Login/Movies/potrait4.jpg',
  //     name: 'Kantara3',
  //     isFavorite: 'false'
  //   },
  //   {
  //     id : 10,
  //     imageUrl: 'assets/Login/Movies/kantara-Banner.jpg',
  //     description: 'Movie',
  //     title: '#1 in Trending',
  //     discriptUrl: 'assets/Login/Movies/kantara-Name.jpg',
  //     logoUrl: 'assets/Login/Movies/Amazon-Prime-Video-Icon.png',
  //     potrait: 'assets/Login/Movies/potrait5.jpg',
  //     name: 'Kantara4',
  //     isFavorite: 'false'
  //   }
  //   ,
  //   {
  //     id : 11,
  //     imageUrl: 'assets/Login/Movies/animal.jpg',
  //     description: 'Movie',
  //     title: '#1 in Trending',
  //     discriptUrl: 'assets/Login/Movies/animal-name.jpg',
  //     logoUrl: 'assets/Login/Movies/Amazon-Prime-Video-Icon.png',
  //     potrait: 'assets/Login/Movies/potrait6.jpeg',
  //     name: 'Kantara5',
  //     isFavorite: 'false'
  //   }
  // ];


  transformImg() {
    let mainImageWrap = document.getElementById(this.id) as HTMLDivElement
    mainImageWrap.scrollLeft += 300
    this.arrowLeft = true
    if(mainImageWrap.scrollLeft + mainImageWrap.clientWidth+1 >= mainImageWrap.scrollWidth){
      this.arrowRight = false
    }
  }


  transformImgleft() {
    let mainImageWrap = document.getElementById(this.id) as HTMLDivElement
    mainImageWrap.scrollLeft -= 200
    this.arrowRight=true
    let leftscroll = mainImageWrap.scrollLeft -= 100
    if(leftscroll<=0){
      this.arrowLeft = false
    }
  }


  onFocus(item:any,e:MouseEvent){
    let parentDiv = (e.target as HTMLImageElement).parentNode as HTMLDivElement
    let image = document.getElementById(`mainImg${item.id}`)  as HTMLImageElement
    image.src = item.discriptUrl
    let childDiv = parentDiv?.getElementsByClassName('playWrapMain')
    let childDivArray = Array.from(childDiv) as HTMLElement[]
    childDivArray.forEach(elements => {
      elements.style.display = 'block'
    })
    
    
  }


  onRelease(item:any,e:MouseEvent){
    let parentDiv = (e.target as HTMLImageElement).parentNode as HTMLDivElement
    let image = document.getElementById(`mainImg${item.id}`)  as HTMLImageElement
    image.src = item.potrait
    let childDiv = parentDiv?.getElementsByClassName('playWrapMain')
    let childDivArray = Array.from(childDiv) as HTMLElement[]
    childDivArray.forEach(elements => {
      elements.style.display = 'none'
    })
  }


  myFavorite(item:any){
    item.isFavorite = !item.isFavorite
  }
}
