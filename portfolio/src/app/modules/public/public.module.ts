import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicRoutingModule } from './public-routing.module';
import { PublicComponent } from './public.component';
import { HomeComponent } from './components/home/home.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ProfileComponent } from './components/profile/profile.component';


@NgModule({
  declarations: [
    PublicComponent,
    HomeComponent,
    ProfileComponent
  ],
  imports: [
    CommonModule,
    PublicRoutingModule,
    SharedModule 
  ]
})
export class PublicModule { }
