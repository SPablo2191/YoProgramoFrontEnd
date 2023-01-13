import { Component, OnInit } from '@angular/core';
import { ConfirmationService } from 'primeng/api';
import { DialogService } from 'primeng/dynamicdialog';
import { Observable } from 'rxjs';
import { crud } from 'src/app/core/classes/crud.class';
import { Study } from 'src/app/models/Study.interface';
import { AuthService } from 'src/app/services/auth.service';
import { StudiesService } from 'src/app/services/studies.service';
import { EditEducationComponent } from './components/edit-education/edit-education.component';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css'],
})
export class EducationComponent extends crud implements OnInit {
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

  ngOnInit(): void {
    this.read();
  }
  override read() {
    this.items$ = this.studiesService.get();
  }
}
