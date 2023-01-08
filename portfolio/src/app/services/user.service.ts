import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { baseService } from '../core/services/base.service';
import { pathnameEnum } from '../enums/pathName.enum';

@Injectable({
  providedIn: 'root',
})
export class UserService extends baseService {
  constructor(httpClient: HttpClient) {
    super(httpClient);
  }
  override serverUrl = `${environment.URL}${pathnameEnum.user}`;
}
