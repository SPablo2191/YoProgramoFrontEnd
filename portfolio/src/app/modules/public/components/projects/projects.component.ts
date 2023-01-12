import { Component, OnInit } from '@angular/core';
import { ConfirmationService } from 'primeng/api';
import { DialogService } from 'primeng/dynamicdialog';
import { Observable } from 'rxjs';
import { crud } from 'src/app/core/classes/crud.class';
import { Project } from 'src/app/models/Project.interface';
import { AuthService } from 'src/app/services/auth.service';
import { ProjectsService } from 'src/app/services/projects.service';
import { EditProjectComponent } from './components/edit-project/edit-project.component';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent extends crud implements OnInit {
  projects$!: Observable<Project[]>;
  override title: string = 'Proyectos';
  override editComponent: any = EditProjectComponent;
  constructor(
    dialogService: DialogService,
    private projectsService: ProjectsService,
    confirmationService: ConfirmationService,
    authService : AuthService
  ) {
    super(dialogService, projectsService, confirmationService,authService);
  }

  ngOnInit(): void {
    this.get();
  }
  get() {
    this.projects$ = this.projectsService.get();
  }
}
