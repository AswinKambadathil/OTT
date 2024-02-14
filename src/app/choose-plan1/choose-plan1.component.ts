import { Component,inject } from '@angular/core';
import { Router } from '@angular/router';
import { ApiServiceService } from '../api-service.service';
import { HttpClientModule,HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { NgModel } from '@angular/forms';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-choose-plan1',
  standalone: true,
  imports: [HttpClientModule,CommonModule,FormsModule],
  templateUrl: './choose-plan1.component.html',
  styleUrl: './choose-plan1.component.scss',
  providers: [ApiServiceService],
})
export class ChoosePlan1Component {
  private router= inject(Router)
  private servicee = inject(ApiServiceService)
  constructor() { }
  chooseScreen = [{id:1,screen:'1 Screen'},{id:2,screen:'2 Screen'}];
  selectedScreenId: number = -1;
  trackById(index: number, item: any) {
    return item.id;}
  choosePlan = [
    { id: 1, plan: '1 Month',background:false },
    { id: 2, plan: '6 Months',background:false },
    { id: 3, plan: '1 Year',background:false },
  ];

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

  pack = [{
    
      pack: [
        {
          id:1,
          month:'One',
          match:'100',
          price:'550',
          discount:'7.5',
          selectPack:false
        },
        
      ],
  },
    {
      pack:[
        {
          id:2,
          month:'Two',
          match:'93',
          price:'580',
          discount:'8.5',
          selectPack:false,
        }
      ]
    },
    {
      pack:[
        {
          id:3,
          month:'Three',
          match:'84',
          price:'625',
          discount:'11.5',
          selectPack:false
        }
      ]
    },
  ];

  planselect(item:any) {
    this.choosePlan.forEach(plan => {
      if (plan.id !== item.id) {
          plan.background = false;
      }
  });
    item.background = !item.background;
}
packageSelect(item: any) {
  this.pack.forEach(plan => {
    plan.pack.forEach(packItem => {
      if (packItem.id !== item.id) {
        packItem.selectPack = false;
      }
    });
  });
  item.selectPack = !item.selectPack;
}

proceed(index: number) {
  if (index !== -1) {
    this.servicee.setSelectedScreenId(index);
    // console.log(this.servicee.setSelectedScreenId(index));
    
    this.router.navigate(['/summary']);
  } else {
    console.error('No screen selected');
  }
}
}