import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Knowledge } from 'src/app/models/Knowledge.interface';
import { KnowledgeService } from 'src/app/services/knowledge.service';

@Component({
  selector: 'app-knowledge',
  templateUrl: './knowledge.component.html',
  styleUrls: ['./knowledge.component.css']
})
export class KnowledgeComponent implements OnInit {
  items$! : Observable<Knowledge[]>;
  constructor(private knowledgeService : KnowledgeService) { }

  ngOnInit(): void {
    this.items$ = this.knowledgeService.get();
  }

}
