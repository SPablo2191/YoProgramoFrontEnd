import { Component, Input, OnInit } from '@angular/core';
import { ConfirmationService } from 'primeng/api';
import { DialogService } from 'primeng/dynamicdialog';
import { crud } from 'src/app/core/classes/crud.class';
import { Work } from 'src/app/models/Work.interface';
import { EditWorkComponent } from 'src/app/modules/public/components/works/components/edit-work/edit-work.component';
import { AuthService } from 'src/app/services/auth.service';
import { WorksService } from 'src/app/services/works.service';

@Component({
  selector: 'app-ui-workitem',
  templateUrl: './ui-workitem.component.html',
  styleUrls: ['./ui-workitem.component.css']
})
export class UiWorkitemComponent extends crud implements OnInit {
  @Input() item! : Work;
  override title: string = 'Trabajo';
  override editComponent: any = EditWorkComponent;
  constructor(
    dialogService: DialogService,
    api: WorksService,
    confirmationService: ConfirmationService,
    authService : AuthService
  ) {
    super(dialogService,api,confirmationService,authService);
  }

  ngOnInit(): void {
  }

}
