import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule, ReactiveFormsModule,FormGroup,FormBuilder,Validators } from '@angular/forms';
import { ViewChild,ElementRef } from '@angular/core';

@Component({
  selector: 'app-welcomescreen',
  standalone: true,
  imports: [CommonModule,FormsModule,ReactiveFormsModule],
  templateUrl: './welcomescreen.component.html',
  styleUrl: './welcomescreen.component.scss'
})
export class WelcomescreenComponent {
  @ViewChild('emailInput') emailInput!: ElementRef;
  emailForm: FormGroup;

  private fb = inject(FormBuilder)
  constructor() {
    this.emailForm = this.fb.group({
      primaryEmail: ['', [Validators.required, Validators.email]],
    });
}
get_email() { 
  if (this.emailForm.valid) {
    const userEmail = this.emailForm.get('primaryEmail')!.value;
    console.log(userEmail);
  } else {
    this.emailInput.nativeElement.focus();
  }
}

}
