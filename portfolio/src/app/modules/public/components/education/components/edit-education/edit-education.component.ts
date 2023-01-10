import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { abstractForm } from 'src/app/core/classes/abstract-form';
import { StudiesService } from 'src/app/services/studies.service';

@Component({
  selector: 'app-edit-education',
  templateUrl: './edit-education.component.html',
  styleUrls: ['./edit-education.component.css'],
})
export class EditEducationComponent extends abstractForm implements OnInit {
  override title: string ='Estudio';
  constructor(
    private fb: FormBuilder,
    ref: DynamicDialogRef,
    public config: DynamicDialogConfig,
    messageService: MessageService,
    studyService: StudiesService
  ) {
    super(ref,messageService, studyService);
  }

  ngOnInit(): void {
    this.formGroup = this.fb.group({
      idStudy : [],
      title: [],
      description: [],
      startDate: [],
      endDate: [],
      isFinished : [false]
    });
    if(this.config.data){
      this.formGroup.patchValue(this.config.data);
      console.log(this.formGroup.value);
    }
  }

}
