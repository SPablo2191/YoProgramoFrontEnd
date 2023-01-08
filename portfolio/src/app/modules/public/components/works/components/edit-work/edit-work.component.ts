import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { DynamicDialogRef } from 'primeng/dynamicdialog';
import { abstractForm } from 'src/app/core/classes/abstract-form';
import { WorksService } from 'src/app/services/works.service';

@Component({
  selector: 'app-edit-work',
  templateUrl: './edit-work.component.html',
  styleUrls: ['./edit-work.component.css']
})
export class EditWorkComponent extends abstractForm implements OnInit {

  constructor(
    private fb : FormBuilder,
    ref: DynamicDialogRef,
    messageService: MessageService,
    private workService : WorksService
  ) {
    super(ref,messageService,workService);
  }

  ngOnInit(): void {
    this.formGroup = this.fb.group({
      businessName : [],
      role : [],
      startDate : [],
      endDate : [],
    });
  }

}
