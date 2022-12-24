import { Injectable } from '@angular/core';
import { baseService } from '../core/services/base.service';
import { Knowledge } from '../models/Knowledge.interface';

@Injectable({
  providedIn: 'root'
})
export class KnowledgeService extends baseService {
  constructor() {
    super();
    this.items = [
      {
        idKnowledge : 1,
        name : 'Python',
        value : 75,
        color : 'success'
      } as Knowledge
    ];
  }
}
