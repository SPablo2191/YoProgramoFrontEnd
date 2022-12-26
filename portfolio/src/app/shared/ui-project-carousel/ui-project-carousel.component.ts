import { Component, Input, OnInit } from '@angular/core';
import { Project } from 'src/app/models/Project.interface';

@Component({
  selector: 'app-ui-project-carousel',
  templateUrl: './ui-project-carousel.component.html',
  styleUrls: ['./ui-project-carousel.component.css']
})
export class UiProjectCarouselComponent implements OnInit {
  @Input() items! : Project[];
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
