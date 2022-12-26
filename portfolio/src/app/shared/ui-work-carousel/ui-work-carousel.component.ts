import { Component, Input, OnInit } from '@angular/core';
import { Work } from 'src/app/models/Work.interface';

@Component({
  selector: 'app-ui-work-carousel',
  templateUrl: './ui-work-carousel.component.html',
  styleUrls: ['./ui-work-carousel.component.css']
})
export class UiWorkCarouselComponent implements OnInit {
  @Input() items! : Work[];
  protected responsiveOptions = [
    {
      breakpoint: '1024px',
      numVisible: 3,
      numScroll: 3,
    },
    {
      breakpoint: '768px',
      numVisible: 2,
      numScroll: 2,
    },
    {
      breakpoint: '560px',
      numVisible: 1,
      numScroll: 1,
    },
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
