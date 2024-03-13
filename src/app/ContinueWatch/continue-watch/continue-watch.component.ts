import { CommonModule } from '@angular/common';
import { Component, Input, OnInit, inject} from '@angular/core';
import { Subscription} from 'rxjs';
import { Router } from '@angular/router';
import { SubjectService } from '../../Subject/subject.service';

@Component({
  selector: 'app-continue-watch',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './continue-watch.component.html',
  styleUrl: './continue-watch.component.scss',
})
export class ContinueWatchComponent implements OnInit{

  @Input() styleChange: "1stStyle" | "2ndStyle" = "1stStyle"
  @Input() data!: any
  @Input() label!: string
  @Input() j!: any
  id!: string
  arrowLeft = false
  arrowRight = true
  onFocuses = false
  buttonCodeSubscription!: Subscription;
  itemIndex:any = 0;
  rowIndex = 0;
  verticalScrollCount = 0;
  bannerHeight = 298.2;
  private itemIndices: number[][] = [];

  private router = inject(Router)
  private subject = inject(SubjectService)

  ngOnInit() {
    this.removeSpacesFromLabel()
    this.initButtonCodeSubscription()
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
    parentDiv.style.backgroundImage=`url(${item.contentPreview})`;
    let aspectRatio = 16 / 9;
    let width = 300 * aspectRatio; 
    parentDiv.style.width = `${width}px`;
    parentDiv.style.height = '300px';
    
    let childDiv = parentDiv?.getElementsByClassName('playWrapMain')
    let childDivArray = Array.from(childDiv) as HTMLElement[]
    childDivArray.forEach(elements => {
      elements.style.display = 'block'
    })
  }


  onRelease(item: any, e: MouseEvent) {
    this.onFocuses = false
    let parentDiv = (e.target as HTMLDivElement).parentNode as HTMLDivElement
    // let image = document.getElementById(`mainImg${item.contentId}`)  as HTMLImageElement
    // image.src = item.portraitUrl  
    parentDiv.style.backgroundImage=`url(${item.portraitUrl})`;
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
    
  subscription = false
  initButtonCodeSubscription(): void {
    this.buttonCodeSubscription = this.subject.getButtonCodeObservable().subscribe((code) => {
      if(this.subscription){
        return
      }
      else{
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
        case 4: {
          this.backBtnClick();
          break;
        }
        case 23: {
          this.okBtnClick();
          break;
        }
      }
      this.subscription = false
    }
      this.setActiveItem();
    });
  }
  
  
  updateItemIndex(): void {
    if (!this.itemIndices[this.rowIndex]) {
      this.itemIndices[this.rowIndex] = [];
    }
    this.itemIndices[this.rowIndex] = this.itemIndex;
  }


  backBtnClick(): void {
    this.itemIndex = 0;
    this.rowIndex = 0;
    // this.getBannerContent();
    window.scrollTo(0, 0);
    this.verticalScrollCount = 0;
  }

  
  okBtnClick(): void {
    let item = this.data[this.itemIndex]
    console.log(item);
    // this.router.navigate(["detailView", this.data[this.itemIndex].contentId])
  
  }
  
  
  leftBtnClick() {
    this.itemIndex = this.itemIndex > 0 ? this.itemIndex - 1 : this.itemIndex;  
    this.updateItemIndex();
    let scrollOffset = 400;
    if (document.getElementById(`id${this.rowIndex}`)) {
      scrollOffset = 300;
      document.getElementById(this.id)?.scrollBy({
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
      this.updateItemIndex();
      console.log(this.itemIndex);
           
      let scrollOffset = 38;
      const targetElement = imageWrapElements[this.itemIndex];
      console.log(targetElement);
      
        if (targetElement && targetElement instanceof HTMLElement) {
          const parentElement = targetElement.parentNode as HTMLElement;
            parentElement.scrollBy({
                left: scrollOffset,
                behavior: 'smooth'
            });
        } else {
            console.error("Main Image Wrap not found");
        }
    }
  }
  upBtnClick(): void {
    this.itemIndex = this.itemIndices[this.rowIndex - 1] !== undefined ? this.itemIndices[this.rowIndex - 1]:0;
    let carousalItem:any = document.querySelector(`#id${this.rowIndex}`);
    carousalItem.scrollLeft = 0;
    if (this.rowIndex > 0) {
      this.rowIndex -= 1;
      window.scrollTo(0, -(this.bannerHeight - this.verticalScrollCount));
      this.verticalScrollCount -= 300;
    }

    // this.itemIndex = 0;
    // this.getBannerContent();

  }

  downBtnClick(): void {
    this.itemIndex = this.itemIndices[this.rowIndex + 1] !== undefined ? this.itemIndices[this.rowIndex + 1] : 0;
    let carousalItem:any = document.querySelector(`#id${this.rowIndex}`);
    carousalItem.scrollLeft = 0;
    if (this.rowIndex >= 0) {
      this.rowIndex += 1;
      window.scrollTo(0, this.bannerHeight + this.verticalScrollCount);;
      this.verticalScrollCount += 300;
    }
  }

  // downBtnClick(): void {
  //   const className = this.styleChange === "1stStyle" ? "imageNamewrap" : "portImg";
  //   const carousalItem: HTMLElement | null = document.querySelector(`.mainWrap`);

    
  //   if (!carousalItem) {
  //       console.error("Carousel item not found for index:", this.rowIndex);
  //       return;
  //   }

  //   const className2 = this.styleChange === "1stStyle" ? "imageWrap" : "portimageWrap";
  //   const imageWrapElements = carousalItem.querySelectorAll(".mainWrap");
  //   const carouselLength = imageWrapElements.length;

  //   console.log("Carousel length:", carouselLength);
  //   if (this.itemIndex < carouselLength - 1) {
  //     this.itemIndex = this.itemIndex + 1; 
  //     console.log(this.itemIndex);
  //     window.scrollTo(0, this.bannerHeight + this.verticalScrollCount);
  //     this.verticalScrollCount += 300;
  //   }
  //   this.itemIndex = 0;
  //   // this.getBannerContent();

  // }


  setActiveItem(): void {
    const currentRowItems = document.querySelectorAll(`.mainWrap#id${this.rowIndex} .imageNamewrap .imageWrap`);
    currentRowItems.forEach(item => {
        item.classList.remove("active");
    });
    const currentItem = document.querySelector(`#row${this.rowIndex}col${this.itemIndex}`);
    if (currentItem instanceof HTMLElement) {
        currentItem.classList.add("active");
    }
  }
}
