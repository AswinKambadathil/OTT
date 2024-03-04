import { Component, OnInit } from '@angular/core';
import { SubjectService } from '../Subject/subject.service';
import { ConfigService } from '../Config/config.service';

@Component({
  selector: 'app-simulator',
  standalone: true,
  imports: [],
  templateUrl: './simulator.component.html',
  styleUrl: './simulator.component.scss'
})
export class SimulatorComponent implements OnInit {

  // showButtons = false;

  constructor(
    private subject:SubjectService,
    private config:ConfigService
  ) { }

  ngOnInit(): void {
    // this.showButtons = this.config.json.showButtons;
  }

  propagateButtonCode(code: number): void {
    this.subject.propagateButtonCode(code);
  }
}
