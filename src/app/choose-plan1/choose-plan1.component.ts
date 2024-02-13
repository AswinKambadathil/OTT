import { Component } from '@angular/core';

@Component({
  selector: 'app-choose-plan1',
  standalone: true,
  imports: [],
  templateUrl: './choose-plan1.component.html',
  styleUrl: './choose-plan1.component.scss',
})
export class ChoosePlan1Component {
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
          discount:'7.5'
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
          discount:'8.5'
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
          discount:'11.5'
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
}
