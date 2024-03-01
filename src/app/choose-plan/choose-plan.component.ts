import { Component,inject } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-choose-plan',
  standalone: true,
  imports: [],
  templateUrl: './choose-plan.component.html',
  styleUrl: './choose-plan.component.scss'
})
export class ChoosePlanComponent {

  private router = inject(Router)
  ott = [{id:1,background:false},{id:2,background:false},{id:3,background:false},{id:4,background:false},{id:5,background:false},{id:6,background:false},
    {id:7,background:false},{id:8,background:false},{id:9,background:false},{id:10,background:false},{id:11,background:false},{id:12,background:false},
    {id:13,background:false},{id:14,background:false},{id:15,background:false},{id:16,background:false},{id:17,background:false},{id:18,background:false},
    {id:19,background:false},{id:20,background:false},{id:21,background:false},{id:22,background:false},{id:23,background:false},{id:24,background:false},
    {id:25,background:false},{id:26,background:false},{id:27,background:false},,{id:28,background:false},{id:29,background:false}
    ]

    ottselect(item:any) {
      item.background = !item.background;
  }

  finfPlan()
{
  this.router.navigate(['/chooseplan1']);
}
}
