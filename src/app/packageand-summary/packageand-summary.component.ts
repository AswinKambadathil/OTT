import { Component, inject,OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { ApiServiceService } from '../api-service.service';
import { CommonModule } from '@angular/common';
import { SubjectService } from '../Subject/subject.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-packageand-summary',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './packageand-summary.component.html',
  styleUrl: './packageand-summary.component.scss',
  providers: [ApiServiceService],
})
export class PackageandSummaryComponent  {

  selectedScreenId: any;

  private router = inject(Router);
  private servicee =  inject(ApiServiceService);
  private routes = inject(ActivatedRoute)
  private subject = inject(SubjectService)
  id:any;


  itemIndex = 0;
  rowIndex = 0;
  buttonCodeSubscription!: Subscription;
  verticalScrollCount = 0;
 
  constructor() { }

  ngOnInit(): any {

    this.fetchFTAChannels();
    this.providers();
    this.selectPack();
    this.initButtonCodeSubscription()
  }
  // button code management
  initButtonCodeSubscription(): void {
    this.buttonCodeSubscription = this.subject
      .getButtonCodeObservable()
      .subscribe((code) => {
        switch (code) {
          case 4: {
            this.backBtnClick();
            break;
          }
        }
      });
  }
  backBtnClick(){
    this.router.navigate(['/chooseplan1']);
    
    
  }
  proceed(){
    this.router.navigate(['/language']);
  }

  ftaChannelsData: any[] =[];

  fetchFTAChannels(): void {
    this.servicee.ftaChannels().subscribe({
      next: (response) => {
        if (response.source === 'API') {
          console.log('Data fetched from API:', response.data);
        } else if (response.source === 'Cache') {
          console.log('Data fetched from Cache:', response.data);
        }
        this.ftaChannelsData = response.data;
      },
      error: (error) => {
        console.error('Error fetching FTA channels:', error);
      },
    });
  }
  
  ProviderChannelList:any[]= [];
  providers(){
    this.routes.paramMap.subscribe(paraMs =>{
      this.id = paraMs.get('id')
    });
    this.servicee.providerschannel().subscribe({
      next:(response)=>{
        this.ProviderChannelList = response;
      },
      error:(error) =>{
        console.log('Error fetching Providers:', error);
        
      }
    })
  }

pack: any[] = [];

selectPack(): void {
  this.servicee.getPacks().subscribe({
    next: (response) => {
      this.pack = response.data; 
    },
    error: (error) => {
      console.error('Error fetching packs: ', error);
    },
  });
}


}
