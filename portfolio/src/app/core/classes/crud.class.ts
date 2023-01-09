import { ConfirmationService } from 'primeng/api';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { map } from 'rxjs';
import { baseService } from '../services/base.service';

export class crud {
  ref!: DynamicDialogRef;
  title!: string;
  editComponent!: any;
  constructor(
    protected dialogService: DialogService,
    protected api: baseService,
    private confirmationService: ConfirmationService
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
  update(item: any) {
    this.getDialog(this.editComponent, `Editar ${this.title}`,item);
    this.ref.onClose.pipe(map((response) => {
      this.api.get();
    })).subscribe();
  }
  delete(id : number) {
    this.confirmationService.confirm({
      message: `¿Estás seguro que deseas eliminar este item #${id}?`,
      accept: () => {
          console.log('hola');
          this.api.delete(`/${id}`).subscribe();
      }
  });
  }
}
