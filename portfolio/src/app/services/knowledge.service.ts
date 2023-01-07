import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { baseService } from '../core/services/base.service';
import { Knowledge } from '../models/Knowledge.interface';
import { pathnameEnum } from '../shared/enums/pathName.enum';

@Injectable({
  providedIn: 'root'
})
export class KnowledgeService extends baseService {
  constructor(httpClient: HttpClient) {
    super(httpClient);
  }
  override serverUrl = `${environment.URL}${pathnameEnum.knowledge}`;
}
