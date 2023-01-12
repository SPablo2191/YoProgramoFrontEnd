import { Component, Input, OnInit } from '@angular/core';
import { ConfirmationService } from 'primeng/api';
import { DialogService } from 'primeng/dynamicdialog';
import { crud } from 'src/app/core/classes/crud.class';
import { Study } from 'src/app/models/Study.interface';
import { EditEducationComponent } from 'src/app/modules/public/components/education/components/edit-education/edit-education.component';
import { AuthService } from 'src/app/services/auth.service';
import { StudiesService } from 'src/app/services/studies.service';

@Component({
  selector: 'app-ui-study-item',
  templateUrl: './ui-study-item.component.html',
  styleUrls: ['./ui-study-item.component.css'],
})
export class UiStudyItemComponent extends crud implements OnInit {
  @Input() item!: Study;
  override title: string = 'Estudio';
  override editComponent: any = EditEducationComponent;
  constructor(
    dialogService: DialogService,
    api: StudiesService,
    confirmationService: ConfirmationService,
    authService: AuthService
  ) {
    super(dialogService, api, confirmationService,authService);
  }
  ngOnInit(): void {}
}
