import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { baseService } from '../core/services/base.service';
import { Project } from '../models/Project.interface';
import { pathnameEnum } from '../shared/enums/pathName.enum';

@Injectable({
  providedIn: 'root',
})
export class ProjectsService extends baseService {
  constructor(httpClient: HttpClient) {
    super(httpClient);
  }
  override serverUrl = `${environment.URL}${pathnameEnum.project}`;

}
