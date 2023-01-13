import { FormGroup } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { DynamicDialogRef } from 'primeng/dynamicdialog';
import { catchError, EMPTY, map } from 'rxjs';
import { baseService } from '../services/base.service';

export class abstractForm {
  formGroup!: FormGroup;
  title!: string;
  constructor(
    public ref: DynamicDialogRef,
    private messageService: MessageService,
    private api: baseService
  ) {}

  createForm(): void {}

  submit() {
    let data = this.formGroup.value;
    this.api
      .post(data)
      .pipe(
        map((response) => {
          this.addMessageService(
            'success',
            'Exito',
            'success',
            `¡${this.title} registrado con exito!`
          );
          this.ref.close(true);
        }),
        catchError((err, caught) => {
          this.addMessageService('warn', 'Advertencia', 'warn', `¡${err}!`);
          return EMPTY;
        })
      )
      .subscribe();
  }
  cancel() {
    this.ref.close(false);
  }
  addMessageService(
    severity: string,
    summary: string,
    key: string,
    detail: string,
    data?: string
  ) {
    this.messageService.add({
      severity: severity,
      summary: summary,
      key: key,
      detail: detail,
      data: data,
      life: 3000,
    });
  }
}
