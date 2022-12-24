import { Component, Input, OnInit } from '@angular/core';
import { Work } from 'src/app/models/Work.interface';

@Component({
  selector: 'app-ui-work-carousel',
  templateUrl: './ui-work-carousel.component.html',
  styleUrls: ['./ui-work-carousel.component.css']
})
export class UiWorkCarouselComponent implements OnInit {
  @Input() items! : Work[];
  constructor() { }

  ngOnInit(): void {
  }

}
