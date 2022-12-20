import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-ui-study-item',
  templateUrl: './ui-study-item.component.html',
  styleUrls: ['./ui-study-item.component.css']
})
export class UiStudyItemComponent implements OnInit {
  @Input() title! : string;
  @Input() image! : string;
  @Input() description! : string;
  constructor() { }

  ngOnInit(): void {
  }

}
