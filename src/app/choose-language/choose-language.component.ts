import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { ApiServiceService } from '../api-service.service';
import response from '../response';
import { SubjectService } from '../Subject/subject.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-choose-language',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './choose-language.component.html',
  styleUrl: './choose-language.component.scss',
  providers: [ApiServiceService],
})
export class ChooseLanguageComponent implements OnInit{

  private languageSevice = inject(ApiServiceService)
  private subject = inject(SubjectService)

  itemIndex = 0;
  rowIndex = 0;
  buttonCodeSubscription!: Subscription
  verticalScrollCount = 0;



  constructor(){}

  ngOnInit():any{
    this.selectLanguages();
    this.selectGenre();
    this.initButtonCodeSubscription();
  };

  // button code management
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
          case 20: {
            this.downBtnClick();
            break;
          }
          case 19: {
            this.upBtnClick();
            break;
          }
        }
      });      
  }

  leftBtnClick(): void {
    this.itemIndex = this.itemIndex > 0 ? this.itemIndex - 1 : this.itemIndex;
    const profileElement = document.querySelector(`#id${this.itemIndex}`);    
    if (profileElement) {
      let scrollOffset = 400;
      const profilesContainer = document.querySelector('.languages-icon');
      if (profilesContainer) {
        scrollOffset = 415;
        profilesContainer.scrollBy({
          top: 0,
          left: -scrollOffset,
          behavior: 'smooth',
        });
      }
    }
  }

  rightBtnClick(): void {
    if(this.rowIndex==0){
      const totalProfiles = this.languages.length
      this.itemIndex = this.itemIndex < totalProfiles - 1 ? this.itemIndex + 1 : this.itemIndex;
    }
    else{
      const totalProfiles = this.genre.length
      this.itemIndex = this.itemIndex < totalProfiles - 1 ? this.itemIndex + 1 : this.itemIndex;
    }
    
    
    
    const profileElement = document.querySelector(`#id${this.itemIndex}`);
    console.log(profileElement);
    
    const squircleElements = document.querySelectorAll('.squircle');
    if (squircleElements && squircleElements.length > 0 ) {  
      let scrollOffset = 400;
      const profilesContainer = document.querySelector('.languages-icon') ;
  
      
      if (profilesContainer) {
        scrollOffset = 415;
        profilesContainer.scrollBy({
          top: 0,
          left: scrollOffset,
          behavior: 'smooth',
        });
      }
    }
  }

  downBtnClick(): void {
    this.itemIndex = 0;
    const squircleElements = document.querySelectorAll('.squircle2');
    if (squircleElements.length > 0) {
      this.rowIndex += 1;
      console.log(this.rowIndex);
      
      const genreElement:any = document.querySelector(`#id${this.rowIndex}`);
      genreElement.scrollLeft=0;
      console.log(genreElement);
      
      if (genreElement) {
        genreElement.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }
    }
  }
  upBtnClick(): void {
    this.itemIndex = 0;
    let carousalItem = document.querySelector(`#id${this.rowIndex}`);
    
    if (carousalItem) {
     
      carousalItem.scrollLeft = 0;
    }
    
    if (this.rowIndex > 0) {
      
      this.rowIndex -= 1;
    }
  }
  
  
  

 
  selectedLanguages:any[] = [];



  languages: any[] = [];
  selectLanguages(){
    this.languageSevice.selectLanguage().subscribe({
      next:(response) =>{
        this.languages = response;      
      },
      error: (error) => {
        console.error('Error fetching profiles: ', error);
      },
    })
  }
    toggleLanguageSelection(item: any) {
    const selecteLang = this.languages.filter(lang => lang.clicked);
    if (selecteLang.length === 3 && !item.clicked) {
      console.log('Maximum selection reached.');
      return;
    }

    item.clicked = !item.clicked;
  }

  genre: any[] = [];
  selectGenre(){
    this.languageSevice.selectGenre().subscribe({
      next:(response) =>{
        this.genre = response
      },
      error:(error) =>{
        console.log('Error featching genre',error);
        
      }      
    })
  }
  toggleColor(item: any) {
    const selectedGenres = this.genre.filter(genre => genre.clicked);
    if (selectedGenres.length === 3 && !item.clicked) {
      console.log('Maximum selection reached.');
      return;
    }

    item.clicked = !item.clicked;
  }

}
