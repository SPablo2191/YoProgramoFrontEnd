import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import {CarouselModule} from 'primeng/carousel';
import {CardModule} from 'primeng/card';
@NgModule({
  imports: [
    CommonModule
  ],
  exports :[
    NgbCarouselModule,
    CarouselModule,
    CardModule
  ]
})
export class ImportsModule { }
