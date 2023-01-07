import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-ui-text-area',
  templateUrl: './ui-text-area.component.html',
  styleUrls: ['./ui-text-area.component.css']
})
export class UiTextAreaComponent implements OnInit {
  @Input() label! : string;
  @Input() group!: FormGroup;
  @Input() name!: string;
  constructor() { }

  ngOnInit(): void {
  }

}
