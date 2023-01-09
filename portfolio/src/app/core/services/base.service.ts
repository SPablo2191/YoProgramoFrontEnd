import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export class baseService {
  protected serverUrl: string | undefined;
  constructor(protected httpClient: HttpClient) {}
  get(pathVariable =''): Observable<any[]> {
    const url = `${this.serverUrl}${pathVariable}`;
    return this.httpClient.get<any[]>(url);
  }
  post(data: any) {
    console.log('entro a post');
    return this.httpClient.post(this.serverUrl!, data);
  }
  put() {}
  delete(pathVariable ='') {
    const url = `${this.serverUrl}${pathVariable}`;
    return this.httpClient.delete(url);
  }
}
