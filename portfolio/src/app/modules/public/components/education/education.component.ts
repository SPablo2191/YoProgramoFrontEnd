import {  AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { ConfirmationService } from 'primeng/api';
import { DialogService } from 'primeng/dynamicdialog';
import { Observable } from 'rxjs';
import { crud } from 'src/app/core/classes/crud.class';
import { Study } from 'src/app/models/Study.interface';
import { AuthService } from 'src/app/services/auth.service';
import { StudiesService } from 'src/app/services/studies.service';
import { UiCarouselComponent } from 'src/app/shared/ui-carousel/ui-carousel.component';
import { EditEducationComponent } from './components/edit-education/edit-education.component';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css'],
})
export class EducationComponent extends crud implements OnInit,OnDestroy,AfterViewInit {
  @ViewChild("carousel")
  componentCarousel! : UiCarouselComponent;
  override title: string = 'Educación';
  override editComponent: any = EditEducationComponent;
  constructor(
    protected studiesService: StudiesService,
    dialogService: DialogService,
    confirmationService: ConfirmationService,
    authService : AuthService
  ) {
    super(dialogService, studiesService, confirmationService,authService);
  }
  ngAfterViewInit(): void {
    // this.carousel = this.componentCarousel;
    // this.items$.subscribe(response => this.carousel.items = response)

  }
  ngOnDestroy(): void {
    this.subscriptions$.unsubscribe();
  }

  ngOnInit(): void {
    this.read();
  }

}
