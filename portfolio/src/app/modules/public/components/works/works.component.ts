import { Component, OnDestroy, OnInit } from '@angular/core';
import { ConfirmationService } from 'primeng/api';
import { DialogService } from 'primeng/dynamicdialog';
import { Observable } from 'rxjs';
import { crud } from 'src/app/core/classes/crud.class';
import { Work } from 'src/app/models/Work.interface';
import { AuthService } from 'src/app/services/auth.service';
import { WorksService } from 'src/app/services/works.service';
import { EditWorkComponent } from './components/edit-work/edit-work.component';

@Component({
  selector: 'app-works',
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.css']
})
export class WorksComponent extends crud implements OnInit,OnDestroy {
  override title: string = 'Experiencia Laboral';
  override editComponent: any = EditWorkComponent;
  constructor(
    dialogService: DialogService,
    private worksService : WorksService,
    confirmationService: ConfirmationService,
    authService : AuthService
    ){
      super(dialogService,worksService,confirmationService,authService);
    }
  ngOnDestroy(): void {
    this.subscriptions$.unsubscribe();
  }
  ngOnInit(): void {
    this.read();
  }

}
