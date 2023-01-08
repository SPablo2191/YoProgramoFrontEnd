import { FormGroup } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { DynamicDialogRef } from 'primeng/dynamicdialog';
import { baseService } from '../services/base.service';

export class abstractForm {
  formGroup!: FormGroup;
  constructor(
    public ref: DynamicDialogRef,
    private messageService: MessageService,
    private api: baseService
  ) {}

  createForm(): void {}

  submit() {
    console.log(this.formGroup);
    this.api.post({});
  }
  cancel(){
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
