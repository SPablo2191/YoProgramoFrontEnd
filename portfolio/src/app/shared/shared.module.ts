import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiNavbarComponent } from './ui-navbar/ui-navbar.component';
import { ImportsModule } from '../imports/imports.module';
import { UiCarouselComponent } from './ui-carousel/ui-carousel.component';
import { UiStudyItemComponent } from './ui-study-item/ui-study-item.component';
import { UiProjectItemComponent } from './ui-project-item/ui-project-item.component';
import { UiWorkitemComponent } from './ui-workitem/ui-workitem.component';
import { UiProjectCarouselComponent } from './ui-project-carousel/ui-project-carousel.component';
import { UiWorkCarouselComponent } from './ui-work-carousel/ui-work-carousel.component';



@NgModule({
  declarations: [
    UiNavbarComponent,
    UiCarouselComponent,
    UiStudyItemComponent,
    UiProjectItemComponent,
    UiWorkitemComponent,
    UiProjectCarouselComponent,
    UiWorkCarouselComponent
  ],
  imports: [
    CommonModule,
    ImportsModule,
  ],
  exports :[
    UiNavbarComponent,
    UiCarouselComponent,
    UiProjectCarouselComponent,
    UiWorkCarouselComponent
  ]
})
export class SharedModule { }
