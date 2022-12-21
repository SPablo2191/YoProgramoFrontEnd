import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiNavbarComponent } from './ui-navbar/ui-navbar.component';
import { ImportsModule } from '../imports/imports.module';
import { UiCarouselComponent } from './ui-carousel/ui-carousel.component';
import { UiStudyItemComponent } from './ui-study-item/ui-study-item.component';
import { UiProjectItemComponent } from './ui-project-item/ui-project-item.component';



@NgModule({
  declarations: [
    UiNavbarComponent,
    UiCarouselComponent,
    UiStudyItemComponent,
    UiProjectItemComponent
  ],
  imports: [
    CommonModule,
    ImportsModule
  ],
  exports :[
    UiNavbarComponent,
    UiCarouselComponent
  ]
})
export class SharedModule { }
