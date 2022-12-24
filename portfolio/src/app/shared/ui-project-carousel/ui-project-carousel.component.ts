import { Component, Input, OnInit } from '@angular/core';
import { Project } from 'src/app/models/Project.interface';

@Component({
  selector: 'app-ui-project-carousel',
  templateUrl: './ui-project-carousel.component.html',
  styleUrls: ['./ui-project-carousel.component.css']
})
export class UiProjectCarouselComponent implements OnInit {
  @Input() items! : Project[];
  constructor() { }

  ngOnInit(): void {
  }

}
