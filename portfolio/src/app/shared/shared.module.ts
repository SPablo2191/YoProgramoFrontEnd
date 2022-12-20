import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiNavbarComponent } from './ui-navbar/ui-navbar.component';



@NgModule({
  declarations: [
    UiNavbarComponent
  ],
  imports: [
    CommonModule
  ],
  exports :[
    UiNavbarComponent
  ]
})
export class SharedModule { }
