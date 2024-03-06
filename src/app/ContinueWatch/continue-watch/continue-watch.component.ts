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
  verticalScrollCount = 0;
  bannerHeight = 298.2;

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
      }
      this.setActiveItem();
    });
  }

  leftBtnClick() {
    this.itemIndex = this.itemIndex > 0 ? this.itemIndex - 1 : this.itemIndex;  
    let scrollOffset = 400;
    if (document.querySelector(`#id${this.rowIndex}`)) {
      scrollOffset = 415;
      document.querySelector('imageNamewrap')?.scrollBy({
        top: 0,
        left: -scrollOffset,
        behavior: 'smooth'
      });
    }
  }
  
  rightBtnClick() {
    const className = this.styleChange === "1stStyle" ? "imageNamewrap" : "portImg";
    const carousalItem: HTMLElement | null = document.querySelector(`#id${this.rowIndex} .${className}`);

    
    if (!carousalItem) {
        console.error("Carousel item not found for index:", this.rowIndex);
        return;
    }

    const className2 = this.styleChange === "1stStyle" ? "imageWrap" : "portimageWrap";
    const imageWrapElements = carousalItem.querySelectorAll(`.${className2}`);
    const carouselLength = imageWrapElements.length;

    console.log("Carousel length:", carouselLength);

    if (this.itemIndex < carouselLength - 1) {
      this.itemIndex = this.itemIndex + 1; 
      console.log(this.itemIndex);
           
      let scrollOffset = 20;
      let targetElement = document.querySelector(`#id${this.rowIndex}`);
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
  upBtnClick(): void {
    let carousalItem:any = document.querySelector(`#id${this.rowIndex}`);
    carousalItem.scrollLeft = 0;
    if (this.rowIndex > 0) {
      this.rowIndex -= 1;
      window.scrollTo(0, -(this.bannerHeight - this.verticalScrollCount));
      this.verticalScrollCount -= 300;
    }

    this.itemIndex = 0;
    // this.getBannerContent();

  }

  downBtnClick(): void {
    const className = this.styleChange === "1stStyle" ? "imageNamewrap" : "portImg";
    const carousalItem: HTMLElement | null = document.querySelector(`.mainDiv #id${this.rowIndex}`);

    
    if (!carousalItem) {
        console.error("Carousel item not found for index:", this.rowIndex);
        return;
    }

    const className2 = this.styleChange === "1stStyle" ? "imageWrap" : "portimageWrap";
    const imageWrapElements = carousalItem.querySelectorAll(".mainWrap");
    const carouselLength = imageWrapElements.length;

    console.log("Carousel length:", carouselLength);
    if (this.itemIndex < carouselLength - 1) {
      this.itemIndex = this.itemIndex + 1; 
      console.log(this.itemIndex);
      window.scrollTo(0, this.bannerHeight + this.verticalScrollCount);
      this.verticalScrollCount += 300;
    }
    this.itemIndex = 0;
    // this.getBannerContent();

  }


  setActiveItem(): void {
    const currentRowItems = document.querySelectorAll(`.mainWrap#id${this.rowIndex} .imageNamewrap .imageWrap`);
    currentRowItems.forEach(item => {
        item.classList.remove("active");
    });

    // Add "active" class to the currently selected item within the current row
    const currentItem = document.querySelector(`#row${this.rowIndex}col${this.itemIndex}`);
    if (currentItem instanceof HTMLElement) {
        currentItem.classList.add("active");
    }
  }
}
