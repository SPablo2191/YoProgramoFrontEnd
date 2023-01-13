import { Component, OnDestroy, OnInit } from '@angular/core';
import { ConfirmationService } from 'primeng/api';
import { DialogService } from 'primeng/dynamicdialog';
import { Observable } from 'rxjs';
import { crud } from 'src/app/core/classes/crud.class';
import { Knowledge } from 'src/app/models/Knowledge.interface';
import { AuthService } from 'src/app/services/auth.service';
import { KnowledgeService } from 'src/app/services/knowledge.service';
import { EditKnowledgeComponent } from './components/edit-knowledge/edit-knowledge.component';

@Component({
  selector: 'app-knowledge',
  templateUrl: './knowledge.component.html',
  styleUrls: ['./knowledge.component.css'],
})
export class KnowledgeComponent extends crud implements OnInit,OnDestroy {
  // items$!: Observable<Knowledge[]>;
  override title: string = 'Conocimiento';
  override editComponent: any = EditKnowledgeComponent;
  constructor(
    dialogService: DialogService,
    protected knowledgeService: KnowledgeService,
    confirmationService: ConfirmationService,
    authService: AuthService
  ) {
    super(dialogService, knowledgeService, confirmationService,authService);
  }
  ngOnDestroy(): void {
    this.subscriptions$.unsubscribe();
  }

  ngOnInit(): void {
    this.read();
  }
}
