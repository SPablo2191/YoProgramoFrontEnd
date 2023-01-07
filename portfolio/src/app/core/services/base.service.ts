import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export class baseService {
  protected serverUrl: string | undefined;
  constructor(protected httpClient: HttpClient) {}
  get(params = {}): Observable<any[]> {
    const url = `${this.serverUrl}`;
    return this.httpClient.get<any[]>(url, { params });
  }
  post(data: any) {
    return this.httpClient.post(this.serverUrl!, data);
  }
  put() {}
  delete() {}
}
