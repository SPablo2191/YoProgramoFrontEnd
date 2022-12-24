import { Component, Input, OnInit } from '@angular/core';
import { NgbProgressbarConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-ui-progress-bar',
  templateUrl: './ui-progress-bar.component.html',
  styleUrls: ['./ui-progress-bar.component.css']
})
export class UiProgressBarComponent implements OnInit {
  @Input() color! : string;
  @Input() label! : string;
  @Input() value! : number;
  constructor(private config: NgbProgressbarConfig) { }

  ngOnInit(): void {
    this.config.height = '40px';
  }

}
