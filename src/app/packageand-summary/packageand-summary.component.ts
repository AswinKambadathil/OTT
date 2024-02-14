import { Component, inject,OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { ApiServiceService } from '../api-service.service';
@Component({
  selector: 'app-packageand-summary',
  standalone: true,
  imports: [],
  templateUrl: './packageand-summary.component.html',
  styleUrl: './packageand-summary.component.scss',
  providers: [ApiServiceService],
})
export class PackageandSummaryComponent  {

  selectedScreenId: any;

  private router = inject(Router);
 
  constructor() { }


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
}
