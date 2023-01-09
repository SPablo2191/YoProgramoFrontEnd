import { FormGroup } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { DynamicDialogRef } from 'primeng/dynamicdialog';
import { baseService } from '../services/base.service';

export class abstractForm {
  formGroup!: FormGroup;
  title! : string;
  constructor(
    public ref: DynamicDialogRef,
    private messageService: MessageService,
    private api: baseService
  ) {}

  createForm(): void {}

  submit() {
    console.log(this.formGroup.value);
    let data = this.formGroup.value;
    this.addMessageService(
      'success',
      'Exito',
      'success',
      `¡${this.title} registrado con exito!`
    );
    // this.api.post(data).subscribe();
  }
  cancel() {
    this.ref.close();
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
