import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { ApiServiceService } from '../api-service.service';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
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
red: any;
  constructor() {}
  id:any

  ngOnInit(): any {
    this.selectPack();
    // this.selectPlan();
    this.fetchFTAChannels();
    this.providers();
  }

  // chooseScreen = [{id:1,screen:'1 Screen'},{id:2,screen:'2 Screen'}];
  // choosePlan = [
  //   { id: 1, plan: '1 Month',background:false },
  //   { id: 2, plan: '6 Months',background:false },
  //   { id: 3, plan: '1 Year',background:false },
  // ];

  // choose2 = [
  //   {
  //     chooseScreen: [
  //       { id: 1, screen: '1 Screen' },
  //       { id: 2, screen: '2 Screen' }
  //     ]
  //   },
  //   {
  //     choosePlan: [
  //       { id: 1, plan: '1 Month', background: false },
  //       { id: 2, plan: '6 Months', background: false },
  //       { id: 3, plan: '1 Year', background: false }
  //     ]
  //   }
  // ];





  packageSelect(item1: any) {
    this.pack.forEach(item => {
      item.packageStatus = item.id === item1 ? 0 : 1;
      
  });
  console.log(item1);

  this.id = item1

    // item.packageStatus = item.packageStatus === 1 ? 0 : 1;
    // console.log(this.pack);
    
  }

  

  pack: any[] = [];

  selectPack(): void {
    this.servicee.getPacks().subscribe({
      next: (response) => {
        this.pack = response;
        console.log(this.pack);
        
       
      },
      error: (error) => {
        console.error('Error fetching languages: ', error);
      },
    });
  }



  // choose2: any[] = [];

  // selectPlan(): void {
  //   this.servicee.getPlan().subscribe({
  //     next: (response) => {
  //       this.choose2 = response;
  //       // console.log(response);
  //     },
  //     error: (error) => {
  //       console.error('Error fetching languages: ', error);
  //     },
  //   });
  // }

  ftaChannelsData: any[] =[];

  fetchFTAChannels() {
    this.servicee.ftaChannels().subscribe({
      next:(response)=>{
        this.ftaChannelsData = response;
        
      },
      error:(error) =>{
        console.log('Error fetching FTA channels:', error);
        
      },
    });
  }

  ProviderChannelList:any[]= [];
  providers(){
    this.servicee.providerschannel().subscribe({
      next:(response)=>{
        this.ProviderChannelList = response;
        console.log(this.ProviderChannelList);
        
      },
      error:(error) =>{
        console.log('Error fetching Providers:', error);
        
      }
    })
  }
  proceed() {
    
    this.router.navigate(['/summary',this.id])
    // console.log(this.id);
    
  }
}
