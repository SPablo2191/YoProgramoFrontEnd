import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { abstractForm } from 'src/app/core/classes/abstract-form';
import { ProjectsService } from 'src/app/services/projects.service';

@Component({
  selector: 'app-edit-project',
  templateUrl: './edit-project.component.html',
  styleUrls: ['./edit-project.component.css'],
})
export class EditProjectComponent extends abstractForm implements OnInit {
  override title: string = 'Proyecto';
  constructor(
    private fb: FormBuilder,
    ref: DynamicDialogRef,
    public config: DynamicDialogConfig,
    messageService: MessageService,
    projectService: ProjectsService
  ) {
    super(ref, messageService, projectService);
  }

  ngOnInit(): void {
    this.formGroup = this.fb.group({
      idProject: [],
      title: [],
      description: [],
      releaseDate: [],
      source: [],
    });
    if (this.config.data) {
      this.formGroup.patchValue(this.config.data);
      
    }
  }
}
