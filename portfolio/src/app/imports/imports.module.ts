import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbCarouselModule, NgbProgressbarModule } from '@ng-bootstrap/ng-bootstrap';
import {CarouselModule} from 'primeng/carousel';
import {CardModule} from 'primeng/card';

@NgModule({
  imports: [
    CommonModule
  ],
  exports :[
    NgbCarouselModule,
    NgbProgressbarModule,
    CarouselModule,
    CardModule
  ]
})
export class ImportsModule { }
