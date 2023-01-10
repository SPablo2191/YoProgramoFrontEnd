import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { catchError, EMPTY, map } from 'rxjs';
import { abstractForm } from 'src/app/core/classes/abstract-form';
import { Work } from 'src/app/models/Work.interface';
import { WorksService } from 'src/app/services/works.service';

@Component({
  selector: 'app-edit-work',
  templateUrl: './edit-work.component.html',
  styleUrls: ['./edit-work.component.css'],
})
export class EditWorkComponent extends abstractForm implements OnInit {
  override title: string = 'Trabajo';
  constructor(
    private fb: FormBuilder,
    ref: DynamicDialogRef,
    public config: DynamicDialogConfig,
    messageService: MessageService,
    private workService: WorksService
  ) {
    super(ref, messageService, workService);
  }

  ngOnInit(): void {
    this.formGroup = this.fb.group({
      idWork: [],
      businessName: [],
      role: [],
      startDate: [],
      isFinished: [false],
      endDate: [],
    });
    if (this.config.data) {
      this.formGroup.patchValue(this.config.data);
      console.log(this.formGroup.value);
    }
  }
}
