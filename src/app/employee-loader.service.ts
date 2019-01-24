import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

export interface Employee {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  hours_worked: number;
  hourly_wage: number;
}

const API_URL = 'https://api.angularbootcamp.com';

@Injectable({
  providedIn: 'root'
})
export class EmployeeLoader {
  constructor(private http: HttpClient) { }

  getEasternStoreEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>(API_URL + '/employees')
      .pipe(
        map(longList => longList.slice(0, 9)),
        shareReplay(1)
      );
  }

  getWesternStoreEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>(API_URL + '/employees')
      .pipe(
        map(longList => longList.slice(9, 18)),
        shareReplay(1)
      );
  }

  getAllEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>(API_URL + '/employees')
      .pipe(
        map(longList => longList.slice(1, 18)),
        shareReplay(1)
      );
  }

  getDetails(employeeId: number): Observable<Employee> {
    return this.http.get<Employee>(`${API_URL}/employees/${employeeId}`);
  }
}
