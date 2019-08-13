import { HttpClient } from '@angular/common/http';

import {
  Inject,
  Injectable
} from '@angular/core';

import { Observable } from 'rxjs';

@Injectable()
export class DataService {
  constructor(@Inject(HttpClient) private http: HttpClient) {
  }

  getData(): Observable<Object> {
    return this.http.get(
      'https://jsonplaceholder.typicode.com/todos/'
    );
  }
}
