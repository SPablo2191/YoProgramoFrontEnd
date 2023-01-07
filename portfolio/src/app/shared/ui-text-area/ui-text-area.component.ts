import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-ui-text-area',
  templateUrl: './ui-text-area.component.html',
  styleUrls: ['./ui-text-area.component.css']
})
export class UiTextAreaComponent implements OnInit {
  @Input() label! : string;
  constructor() { }

  ngOnInit(): void {
  }

}
