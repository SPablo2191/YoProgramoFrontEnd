import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-ui-project-item',
  templateUrl: './ui-project-item.component.html',
  styleUrls: ['./ui-project-item.component.css'],
})
export class UiProjectItemComponent implements OnInit {
  @Input() title!: string;
  @Input() releaseDate!: Date;
  @Input() description!: string;
  @Input() source!: string;

  constructor() {}

  ngOnInit(): void {}
}
