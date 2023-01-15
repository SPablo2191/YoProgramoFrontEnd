import { ConfirmationService } from 'primeng/api';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { BehaviorSubject, map, Observable, Subscription } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { baseService } from '../services/base.service';

export class crud {
  //items : BehaviorSubject<any []> = new BehaviorSubject([] as any[]);
  items$!: Observable<any[]>;
  ref!: DynamicDialogRef;
  title!: string;
  editComponent!: any;
  isLogged!: boolean;
  subscriptions$ : Subscription = new Subscription();
  constructor(
    protected dialogService: DialogService,
    protected api: baseService,
    private confirmationService: ConfirmationService,
    private authService: AuthService
  ) {
    this.subscriptions$.add(this.authService
      .getUserSession()
      .pipe(
        map((response) => {
          this.isLogged = response.authToken ? true : false;
        })
      )
      .subscribe());
  }
  getDialog(component: any, title: string, data = {}) {
    this.ref = this.dialogService.open(component, {
      header: `${title}`,
      width: '60%',
      data: data,
      maximizable: true,
    });
  }
  create() {
    this.getDialog(this.editComponent, `Añadir ${this.title}`);
    this.subscriptions$.add(this.ref.onClose
      .pipe(
        map((response) => {
          if (response) {
            this.read();
          }
        })
      )
      .subscribe());
  }
  read(): void {
    this.items$ = this.api.get();
  }
  update(item: any) {
    this.getDialog(this.editComponent, `Editar ${this.title}`, item);
    this.subscriptions$.add(this.ref.onClose
      .pipe(
        map((response) => {
          if (response) {
            this.read();
          }
        })
      )
      .subscribe());
  }
  delete(id: number) {
    this.confirmationService.confirm({
      message: `¿Estás seguro que deseas eliminar este item # ${id}?`,
      accept: () => {
        this.subscriptions$.add(this.api
          .delete(`/${id}`)
          .pipe(
            map((response) => {
              this.read();
            })
          )
          .subscribe());
      },
    });
  }
}
