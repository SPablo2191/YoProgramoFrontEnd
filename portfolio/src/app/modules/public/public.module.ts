import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicRoutingModule } from './public-routing.module';
import { PublicComponent } from './public.component';
import { HomeComponent } from './components/home/home.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ProfileComponent } from './components/profile/profile.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { EducationComponent } from './components/education/education.component';
import { KnowledgeComponent } from './components/knowledge/knowledge.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { WorksComponent } from './components/works/works.component';


@NgModule({
  declarations: [
    PublicComponent,
    HomeComponent,
    ProfileComponent,
    AboutMeComponent,
    EducationComponent,
    KnowledgeComponent,
    ProjectsComponent,
    WorksComponent
  ],
  imports: [
    CommonModule,
    PublicRoutingModule,
    SharedModule 
  ]
})
export class PublicModule { }
