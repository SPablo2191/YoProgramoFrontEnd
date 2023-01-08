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
import { UiProgressBarComponent } from './ui-progress-bar/ui-progress-bar.component';
import { UiTextAreaComponent } from './ui-text-area/ui-text-area.component';
import { ContactMeComponent } from './contact-me/contact-me.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { LoginComponent } from './login/login.component';
import { UiInputComponent } from './ui-input/ui-input.component';
import { UiPasswordInputComponent } from './ui-password-input/ui-password-input.component';
import { UiCalendarComponent } from './ui-calendar/ui-calendar.component';
import { DialogService } from 'primeng/dynamicdialog';
import { UiInputNumberComponent } from './ui-input-number/ui-input-number.component';
import { UiDropdownComponent } from './ui-dropdown/ui-dropdown.component';
import { UiCheckBoxComponent } from './ui-check-box/ui-check-box.component';



@NgModule({
  declarations: [
    UiNavbarComponent,
    UiCarouselComponent,
    UiStudyItemComponent,
    UiProjectItemComponent,
    UiWorkitemComponent,
    UiProjectCarouselComponent,
    UiWorkCarouselComponent,
    UiProgressBarComponent,
    UiTextAreaComponent,
    ContactMeComponent,
    LoginComponent,
    UiInputComponent,
    UiPasswordInputComponent,
    UiCalendarComponent,
    UiInputNumberComponent,
    UiDropdownComponent,
    UiCheckBoxComponent
  ],
  imports: [
    CommonModule,
    ImportsModule,
    ReactiveFormsModule
  ],
  exports :[
    UiNavbarComponent,
    UiCarouselComponent,
    UiProjectCarouselComponent,
    UiWorkCarouselComponent,
    UiProgressBarComponent,
    UiTextAreaComponent,
    UiInputComponent,
    UiPasswordInputComponent,
    UiCalendarComponent,
    UiInputNumberComponent,
    UiDropdownComponent
  ],
  providers : [
    MessageService,
    DialogService
  ]
})
export class SharedModule { }
