import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ConfirmationService } from 'primeng/api';
import { DialogService } from 'primeng/dynamicdialog';
import { crud } from 'src/app/core/classes/crud.class';
import { Project } from 'src/app/models/Project.interface';
import { EditProjectComponent } from 'src/app/modules/public/components/projects/components/edit-project/edit-project.component';
import { AuthService } from 'src/app/services/auth.service';
import { ProjectsService } from 'src/app/services/projects.service';

@Component({
  selector: 'app-ui-project-item',
  templateUrl: './ui-project-item.component.html',
  styleUrls: ['./ui-project-item.component.css'],
})
export class UiProjectItemComponent extends crud implements OnInit,OnDestroy {
  @Input() item!: Project;
  override title: string = 'Proyecto';
  override editComponent: any = EditProjectComponent;
  constructor(
    dialogService: DialogService,
    api: ProjectsService,
    confirmationService: ConfirmationService,
    authService : AuthService
  ) {
    super(dialogService, api, confirmationService,authService);
  }
  ngOnDestroy(): void {
    this.subscriptions$.unsubscribe();
  }

  ngOnInit(): void {}
}
