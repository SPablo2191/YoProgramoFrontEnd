import { Component, OnInit } from '@angular/core';
import { DialogService } from 'primeng/dynamicdialog';
import { Observable } from 'rxjs';
import { crud } from 'src/app/core/classes/crud.class';
import { Knowledge } from 'src/app/models/Knowledge.interface';
import { KnowledgeService } from 'src/app/services/knowledge.service';
import { EditKnowledgeComponent } from './components/edit-knowledge/edit-knowledge.component';

@Component({
  selector: 'app-knowledge',
  templateUrl: './knowledge.component.html',
  styleUrls: ['./knowledge.component.css'],
})
export class KnowledgeComponent extends crud implements OnInit {
  items$!: Observable<Knowledge[]>;
  override title: string = 'Conocimiento';
  override editComponent: any = EditKnowledgeComponent;
  constructor(
    dialogService: DialogService,
    protected knowledgeService: KnowledgeService
  ) {
    super(dialogService, knowledgeService);
  }

  ngOnInit(): void {
    this.items$ = this.knowledgeService.get();
  }
}
