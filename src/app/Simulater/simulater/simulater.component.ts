import { Component, OnInit, inject } from '@angular/core';
import { SubjectService } from '../../Subject/subject.service';

@Component({
  selector: 'app-simulater',
  standalone: true,
  imports: [],
  templateUrl: './simulater.component.html',
  styleUrl: './simulater.component.scss',
  providers:[]
})
export class SimulatorComponent implements OnInit {

  showButtons = false;

  constructor(
    private subject: SubjectService,
    // private config: ConfigService
  ) { }

  ngOnInit(): void {
    // this.showButtons = this.config.json.showButtons;
  }

  propagateButtonCode(code: number): void {
    this.subject.propagateButtonCode(code);
  }

}
