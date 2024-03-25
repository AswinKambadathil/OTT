import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { ApiServiceService } from '../api-service.service';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SubjectService } from '../Subject/subject.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-choose-plan1',
  standalone: true,
  imports: [HttpClientModule, CommonModule, FormsModule],
  templateUrl: './choose-plan1.component.html',
  styleUrl: './choose-plan1.component.scss',
  providers: [ApiServiceService],
})
export class ChoosePlan1Component {
  private router = inject(Router);
  private servicee = inject(ApiServiceService);
  private subject = inject(SubjectService);
  red: any;
  constructor() {}
  id: any;

  itemIndex = 0;
  rowIndex = 0;
  buttonCodeSubscription!: Subscription;
  verticalScrollCount = 0;
  previousCarouselIndex: number | null = null;

  ngOnInit(): any {
    this.selectPack();
    // this.selectPlan();
    this.fetchFTAChannels();
    this.providers();
    this.initButtonCodeSubscription();
  }

  // button code management
  initButtonCodeSubscription(): void {
    this.buttonCodeSubscription = this.subject
      .getButtonCodeObservable()
      .subscribe((code) => {
        switch (code) {
          case 37: {
            this.leftBtnClick();
            break;
          }
          case 39: {
            this.rightBtnClick();
            break;
          }
          case 40: {
            this.downBtnClick();
            break;
          }
          case 38: {
            this.upBtnClick();
            break;
          }
          case 13: {
            this.okBtnClick();
            break;
          }
          case 461: {
            this.backBtnClick();
            break;
          }
        }
      });
  }

  leftBtnClick(): void {
    if (this.rowIndex == 0) {
      this.itemIndex = this.itemIndex > 0 ? this.itemIndex - 1 : this.itemIndex;

      this.previousCarouselIndex = this.itemIndex;
      const profileElement = document.querySelector(`#id${this.itemIndex}`);

      const squircleElements = document.querySelectorAll('.pack');
      if (squircleElements && squircleElements.length > 0) {
        
        const profilesContainer = document.querySelector('.packss');
        if (profilesContainer) {
          let scrollOffset = 300;
          profilesContainer.scrollBy({
            top: 0,
            left: -scrollOffset,
            behavior: 'smooth',
          });
        }
      }
    }
  }
  rightBtnClick(): void {
    if (this.rowIndex == 0) {
      const totalPacks = this.pack.length;
      this.itemIndex =
        this.itemIndex < totalPacks - 1 ? this.itemIndex + 1 : this.itemIndex;
      this.previousCarouselIndex = this.itemIndex;
      const profileElement = document.querySelector(`#id${this.itemIndex}`);

      const squircleElements = document.querySelectorAll('.pack');
      if (squircleElements && squircleElements.length > 0) {
       
        const profilesContainer = document.querySelector('.packss');
        if (profilesContainer) {
          let scrollOffset = 335;
          profilesContainer.scrollBy({
            top: 0,
            left: scrollOffset,
            behavior: 'smooth',
          });
        }
      }
    } else {
    }
  }
  downBtnClick(): void {
    this.itemIndex =
      this.previousCarouselIndex !== null ? this.previousCarouselIndex : 0;
    if (this.rowIndex < 1) {
      this.rowIndex++;

      const genreElement: any = document.querySelector(`#id${this.rowIndex}`);
      if (genreElement) {
        // genreElement.scrollLeft = 0;
        // genreElement.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }
    }
  }

  upBtnClick(): void {
    this.previousCarouselIndex = this.itemIndex;

    if (this.rowIndex > 0) {
      this.rowIndex -= 1;
    }

    if (this.previousCarouselIndex !== null) {
      this.itemIndex = this.previousCarouselIndex;

      const carousalItem = document.querySelector(`#id${this.itemIndex}`);
      if (carousalItem) {
        carousalItem.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }
    }
  }

  okBtnClick(): void {
    if (this.rowIndex==0) {
       
        const selecttPack = this.pack[this.itemIndex]; 
        console.log(selecttPack);
        
        if (selecttPack) {
            
          selecttPack.packageStatus = 1;
            
            this.packageSelect(selecttPack.id);
        }
        this.router.navigate(['/summary', this.id]);
    }else{
      this.router.navigate(['/summary', this.id]);
    }
    
}
backBtnClick(){
  
}


  packageSelect(item1: any) {
    this.pack.forEach((item) => {
      item.packageStatus = item.id === item1 ? 0 : 1;
    });
    console.log(item1);

    this.id = item1;
    this.router.navigate(['/summary', this.id]);

    // item.packageStatus = item.packageStatus === 1 ? 0 : 1;
    // console.log(this.pack);
  }

  pack: any[] = [];

 selectPack(): void {
  this.servicee.getPacks().subscribe({
    next: (response) => {
      this.pack = response.data; // Access the 'data' property
    },
    error: (error) => {
      console.error('Error fetching packs: ', error);
    },
  });
}
  ftaChannelsData: any[] = [];

  fetchFTAChannels() {
    this.servicee.ftaChannels().subscribe({
      next: (response) => {
        this.ftaChannelsData = response.data;
      },
      error: (error) => {
        console.log('Error fetching FTA channels:', error);
      },
    });
  }

  ProviderChannelList: any[] = [];
  providers() {
    this.servicee.providerschannel().subscribe({
      next: (response) => {
        this.ProviderChannelList = response;
      },
      error: (error) => {
        console.log('Error fetching Providers:', error);
      },
    });
  }
  proceed() {
    this.router.navigate(['/summary', this.id]);
    // console.log(this.id);
  }
}
