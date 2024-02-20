import { Component, inject,OnInit } from '@angular/core';
import { Router} from '@angular/router';
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
  private servicee =  inject(ApiServiceService)
 
  constructor() { }

  ngOnInit(): any {

    this.fetchFTAChannels();
  }
  channelIcon = [
    { id: 1 },
    { id: 2 },
    { id: 3 },
    { id: 4 },
    { id: 5 },
    { id: 6 },
    { id: 7 },
    { id: 8 },
    { id: 9 },
  ];
  proceed(){
    this.router.navigate(['/language']);
  }

  ftaChannelsData: any[] =[];

  fetchFTAChannels() {
    this.servicee.ftaChannels().subscribe({
      next:(response)=>{
        this.ftaChannelsData = response;
        console.log(this.ftaChannelsData.length);
      },
      error:(error) =>{
        console.log('Error fetching FTA channels:', error);
        
      },
    });
  }
}
