import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  imports: [
    CommonModule
  ],
  exports :[
    NgbCarouselModule
  ]
})
export class ImportsModule { }
