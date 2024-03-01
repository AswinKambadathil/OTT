import { CommonModule } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, Input, OnInit, computed, inject, effect } from '@angular/core';
import { Subscription, catchError, finalize, map, switchMap } from 'rxjs';
import { HttpWrapperService } from '../../utilities/interceptors/http-interceptor/http-wrapper.service';
import { ApiServiceService } from '../../api-service.service';
import { Router } from '@angular/router';
import { HtmlTagDefinition } from '@angular/compiler';
import { SubjectService } from '../../Subject/subject.service';

@Component({
  selector: 'app-continue-watch',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './continue-watch.component.html',
  styleUrl: './continue-watch.component.scss',
  providers: [ApiServiceService]
})
export class ContinueWatchComponent implements OnInit {

  @Input() styleChange: "1stStyle" | "2ndStyle" = "1stStyle"
  @Input() data!: any
  @Input() label!: string
  @Input() j!: any
  id!: string
  arrowLeft = false
  arrowRight = true
  onFocuses = false
  buttonCodeSubscription!: Subscription;
  itemIndex = 0;
  rowIndex = 0;

  private continue = inject(ApiServiceService)
  private router = inject(Router)
  private subject = inject(SubjectService)

  ngOnInit() {
    this.removeSpacesFromLabel()
    // this.postHome()
    this.initButtonCodeSubscription()
  }

  postHome() {
    this.continue.postContinue({ pageName: 'Home' }).subscribe({
      next: (response) => {
        this.imageArray = response.defaultInfo

      },
      error: (error: any) => {
        console.error('Error fetching data:', error);
      }
    });
  }

  removeSpacesFromLabel() {
    this.id = this.label.split(" ").join("");
  }

  imageArray: any = []
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
    if (mainImageWrap.scrollLeft + mainImageWrap.clientWidth + 1 >= mainImageWrap.scrollWidth) {
      this.arrowRight = false
    }
  }


  transformImgleft() {
    let mainImageWrap = document.getElementById(this.id) as HTMLDivElement
    mainImageWrap.scrollLeft -= 200
    this.arrowRight = true
    let leftscroll = mainImageWrap.scrollLeft -= 100
    if (leftscroll <= 0) {
      this.arrowLeft = false
    }
  }


  onFocus(item: any, e: MouseEvent) {
    this.onFocuses = true
    let parentDiv = (e.target as HTMLImageElement).parentNode as HTMLDivElement
    // let image = document.getElementById(`mainImg${item.contentId}`)  as HTMLVideoElement
    // image.src = item.contentPreview
    // console.log(item.contentPreview);
    let childDiv = parentDiv?.getElementsByClassName('playWrapMain')
    let childDivArray = Array.from(childDiv) as HTMLElement[]
    childDivArray.forEach(elements => {
      elements.style.display = 'block'
    })



  }


  onRelease(item: any, e: MouseEvent) {
    this.onFocuses = false
    let parentDiv = (e.target as HTMLImageElement).parentNode as HTMLDivElement
    // let image = document.getElementById(`mainImg${item.contentId}`)  as HTMLImageElement
    // image.src = item.portraitUrl  
    let childDiv = parentDiv?.getElementsByClassName('playWrapMain')
    let childDivArray = Array.from(childDiv) as HTMLElement[]
    childDivArray.forEach(elements => {
      elements.style.display = 'none'
    })
  }


  myFavorite(item: any) {
    item.isFavorite = !item.isFavorite
  }

  playVideo(id: any) {
    this.router.navigate(["detailView", id])
  }

  // buttonCode = this.subject.getButton
  

  // buttonEffect = computed(()=>{
  //   console.log("working", this.buttonCode);
    
  //   return this.buttonCode})
    
  initButtonCodeSubscription(): void {
    this.buttonCodeSubscription = this.subject.getButtonCodeObservable().subscribe((code) => {
      switch (code) {
        case 21: {
          this.leftBtnClick();
          break;
        }
        case 22: {
          this.rightBtnClick();
          break;
        }
      }
      this.setActiveItem();
    });
  }

  leftBtnClick() {
    this.itemIndex = this.itemIndex > 0 ? this.itemIndex - 1 : this.itemIndex;  
    let scrollOffset = 400;
    if (document.querySelector(`#id${this.itemIndex}`)) {
      console.log(this.itemIndex);
      scrollOffset = 415;
      document.querySelector('imageNamewrap')?.scrollBy({
        top: 0,
        left: -scrollOffset,
        behavior: 'smooth'
      });
      console.log(scrollOffset);
    }
  }
  
  rightBtnClick() {
    let carousalItem:any = document.querySelector('.mainImageWrap');
    let carouselLength:any = carousalItem.querySelectorAll('.imageWrap').length;
    if (this.itemIndex < carouselLength - 1) {
      this.itemIndex = this.itemIndex + 1;      
      let scrollOffset = 20; // Adjusted the scroll offset
      let targetElement = document.querySelector(`#id${this.itemIndex}`);
      if (targetElement && targetElement.classList.contains('imageNamewrap')) {
        targetElement.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' });
      }
       else {
        carousalItem.scrollBy({
          left: scrollOffset,
          behavior: 'smooth'
        });
      }
    }
  }


//   rightBtnClick(): void {
//     const totalProfiles = this.profiles1.length;
//     this.itemIndex = this.itemIndex < totalProfiles - 1 ? this.itemIndex + 1 : this.itemIndex;
//     // const profileElement = document.querySelector(#id${this.itemIndex});
//     const squircleElements = document.querySelectorAll('.squircle');
//     if (squircleElements) {  //&& squircleElements.length > 0
//       let scrollOffset = 400;
//       const profilesContainer = document.querySelector('.profiles');
//       if (profilesContainer) {
//         scrollOffset = 415;
//         profilesContainer.scrollBy({
//           top: 0,
//           left: scrollOffset,
//           behavior: 'smooth',
//         });
//       }
//     }
//   }
  


  setActiveItem(): void {
      // var elems = document.querySelectorAll(".carousel__container ul li");
      // [].forEach.call(elems, function (el) {
      //   // if (el.classList.contains('active'))
      //   //   el.classList.remove("active");
      // });
      // document.querySelector(`#row${this.rowIndex}col${this.itemIndex}`)?.classList.add("active");
  }
}
