import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';


@Component({
  selector: 'app-choose-language',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './choose-language.component.html',
  styleUrl: './choose-language.component.scss'
})
export class ChooseLanguageComponent {
 
  languages = [
    {id:'1', color: '#CE7AEC',textColor: '#3C1A62', lang:'Kannada' ,borderColor: 'red',sign:'ಕೆ' , showBorder: false  },
    {id:'2', color: '#ECE47A',textColor: '#62601A', lang: 'English',borderColor: 'red', sign:'E',  showBorder: false },
    {id:'3', color: '#EC7A7A',textColor: '#621A1A', lang: 'Tamil'  ,borderColor: 'red',sign:'டி' , showBorder: false  },
    {id:'4', color: '#7AEC82',textColor: '#1A621C', lang: 'Bengali',borderColor: 'red',sign:'ধা' , showBorder: false },
    {id:'5', color: '#7AD6EC',textColor: '#1A621C', lang: 'Hindi'  ,borderColor: 'red',sign:'ह' ,  showBorder: false }
];

genre = [
  {id:'1',lang:'Action'   , clicked: false },
  {id:'2',lang: 'Romance' , clicked: false },
  {id:'3',lang: 'Thriller', clicked: false },
  {id:'4',lang: 'Horror'  , clicked: false },
  {id:'5',lang: 'Comedy'  , clicked: false },
]


    toggleBorder(item:any) { 
      item.showBorder = !item.showBorder;
    }
    toggleColor(item: any) {  
      item.clicked = !item.clicked;
  }
  

}


