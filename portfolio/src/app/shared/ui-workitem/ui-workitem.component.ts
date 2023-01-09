import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-ui-workitem',
  templateUrl: './ui-workitem.component.html',
  styleUrls: ['./ui-workitem.component.css']
})
export class UiWorkitemComponent implements OnInit {
  @Input() businessName! : string;
  @Input() role! : string;
  @Input() startDate! : Date;
  @Input() endDate! : Date;
  @Input() source! : string;
  constructor() { }

  ngOnInit(): void {
  }

}
