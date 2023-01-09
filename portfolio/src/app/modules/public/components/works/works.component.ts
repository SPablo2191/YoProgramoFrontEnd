import { Component, OnInit } from '@angular/core';
import { ConfirmationService } from 'primeng/api';
import { DialogService } from 'primeng/dynamicdialog';
import { Observable } from 'rxjs';
import { crud } from 'src/app/core/classes/crud.class';
import { Work } from 'src/app/models/Work.interface';
import { WorksService } from 'src/app/services/works.service';
import { EditWorkComponent } from './components/edit-work/edit-work.component';

@Component({
  selector: 'app-works',
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.css']
})
export class WorksComponent extends crud implements OnInit {
  works$! : Observable<Work[]>;
  override title: string = 'Experiencia Laboral';
  override editComponent: any = EditWorkComponent;
  constructor(
    dialogService: DialogService,
    private worksService : WorksService,
    confirmationService: ConfirmationService
    ){
      super(dialogService,worksService,confirmationService);
    }
  ngOnInit(): void {
    this.works$ = this.worksService.get();
  }

}
