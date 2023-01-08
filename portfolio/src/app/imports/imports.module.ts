import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  NgbCarouselModule,
  NgbProgressbarConfig,
  NgbProgressbarModule,
} from '@ng-bootstrap/ng-bootstrap';
import { CarouselModule } from 'primeng/carousel';
import { CardModule } from 'primeng/card';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { DialogService, DynamicDialogModule } from 'primeng/dynamicdialog';
import {InputTextModule} from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import {CalendarModule} from 'primeng/calendar';
@NgModule({
  imports: [CommonModule],
  exports: [
    NgbCarouselModule,
    NgbProgressbarModule,
    CarouselModule,
    CardModule,
    InputTextareaModule,
    DynamicDialogModule,
    InputTextModule,
    ButtonModule,
    CalendarModule
  ],
  providers: [
    NgbProgressbarConfig,
     DialogService
    ],
})
export class ImportsModule {}
