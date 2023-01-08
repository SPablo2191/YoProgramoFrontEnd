import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-ui-check-box',
  templateUrl: './ui-check-box.component.html',
  styleUrls: ['./ui-check-box.component.css']
})
export class UiCheckBoxComponent implements OnInit {
  @Input() label! : string;
  @Input() name! : string;
  @Input() group! : FormGroup;
  constructor() { }

  ngOnInit(): void {
  }

}
