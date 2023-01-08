import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { DynamicDialogRef } from 'primeng/dynamicdialog';
import { abstractForm } from 'src/app/core/classes/abstract-form';
import { StudiesService } from 'src/app/services/studies.service';

@Component({
  selector: 'app-edit-education',
  templateUrl: './edit-education.component.html',
  styleUrls: ['./edit-education.component.css'],
})
export class EditEducationComponent extends abstractForm implements OnInit {
  constructor(
    private fb: FormBuilder,
    ref: DynamicDialogRef,
    messageService: MessageService,
    studyService: StudiesService
  ) {
    super(ref,messageService, studyService);
  }

  ngOnInit(): void {
    this.formGroup = this.fb.group({
      title: [],
      description: [],
      startDate: [],
      endDate: [],
    });
  }

}
