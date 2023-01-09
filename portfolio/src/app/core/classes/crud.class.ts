import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { map } from 'rxjs';
import { baseService } from '../services/base.service';

export class crud {
  ref!: DynamicDialogRef;
  title!: string;
  editComponent!: any;
  constructor(
    protected dialogService: DialogService,
    protected api: baseService
  ) {}
  getDialog(component: any, title: string, data = {}) {
    this.ref = this.dialogService.open(component, {
      header: `${title}`,
      width: '60%',
      data: data,
      maximizable: true
    });
  }
  create() {
    this.getDialog(this.editComponent, `Añadir ${this.title}`);
    this.ref.onClose.pipe(map((response) => {
      this.api.get();
    })).subscribe();
  }
  read(): void {}
  update(item: any) {}
  delete(item: any) {}
}
