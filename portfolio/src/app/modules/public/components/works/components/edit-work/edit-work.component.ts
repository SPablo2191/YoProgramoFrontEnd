import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { DynamicDialogRef } from 'primeng/dynamicdialog';
import { catchError, EMPTY, map } from 'rxjs';
import { abstractForm } from 'src/app/core/classes/abstract-form';
import { Work } from 'src/app/models/Work.interface';
import { WorksService } from 'src/app/services/works.service';

@Component({
  selector: 'app-edit-work',
  templateUrl: './edit-work.component.html',
  styleUrls: ['./edit-work.component.css']
})
export class EditWorkComponent extends abstractForm implements OnInit {
  override title: string ='Trabajo';
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
      isFinished : [false],
      endDate : [],
    });
  }
  override submit(): void {
    let data : Work = {
      businessName : this.formGroup.get('businessName')?.value,
      role : this.formGroup.get('role')?.value,
      startDate : this.formGroup.get('startDate')?.value,
      endDate : this.formGroup.get('endDate')?.value,
    } as Work
    console.log(data);
    this.workService
      .post(data)
      .pipe(
        map((response) => {
          console.log(response);

          this.addMessageService(
            'success',
            'Exito',
            'success',
            `¡${this.title} registrado con exito!`
          );
          this.ref.close();
        }),
        catchError((err, caught) => {
          this.addMessageService(
            'warn',
            'Advertencia',
            'warn',
            `¡${err}!`
          );
          return EMPTY;
        })
      )
      .subscribe();
  }
}
