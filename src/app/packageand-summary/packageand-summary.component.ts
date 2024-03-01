import { Component, inject,OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { ApiServiceService } from '../api-service.service';
import { CommonModule } from '@angular/common';
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
  id:any;
 
  constructor() { }

  ngOnInit(): any {

    this.fetchFTAChannels();
    this.providers();
    this.selectPack();
  }
  
  proceed(){
    this.router.navigate(['/language']);
  }

  ftaChannelsData: any[] =[];

  fetchFTAChannels() {
  
    this.servicee.ftaChannels().subscribe({
      next:(response)=>{
        this.ftaChannelsData = response;

        // console.log(this.ftaChannelsData);
      },
      error:(error) =>{
        console.log('Error fetching FTA channels:', error);
        
      },
    });
  }

  ProviderChannelList:any[]= [];
  providers(){
    this.routes.paramMap.subscribe(paraMs =>{
      this.id = paraMs.get('id')
      // console.log(this.id);
      
    });
    this.servicee.providerschannel().subscribe({
      next:(response)=>{
        this.ProviderChannelList = response;
        // console.log(this.ProviderChannelList);
        
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
        this.pack = response;
        console.log(this.pack);
        
       
      },
      error: (error) => {
        console.error('Error fetching languages: ', error);
      },
    });
  }

}
