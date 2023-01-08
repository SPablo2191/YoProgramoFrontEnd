import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { DynamicDialogRef } from 'primeng/dynamicdialog';
import { abstractForm } from 'src/app/core/classes/abstract-form';
import { ProjectsService } from 'src/app/services/projects.service';

@Component({
  selector: 'app-edit-project',
  templateUrl: './edit-project.component.html',
  styleUrls: ['./edit-project.component.css']
})
export class EditProjectComponent extends abstractForm implements OnInit {

  constructor(
    private fb : FormBuilder,
    ref: DynamicDialogRef,
    messageService: MessageService,
    projectService : ProjectsService
  ) {
    super(ref,messageService,projectService);
  }

  ngOnInit(): void {
    this.formGroup = this.fb.group({
      title : [],
      description : [],
      releaseDate : [],
      source : []
    });
  }

}
