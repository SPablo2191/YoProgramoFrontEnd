import { Component, Input, OnInit } from '@angular/core';
import { Study } from 'src/app/models/Study.interface';

@Component({
  selector: 'app-ui-carousel',
  templateUrl: './ui-carousel.component.html',
  styleUrls: ['./ui-carousel.component.css']
})
export class UiCarouselComponent implements OnInit {
  @Input() items! : Study[];
  constructor() { }

  ngOnInit(): void {
  }

}
