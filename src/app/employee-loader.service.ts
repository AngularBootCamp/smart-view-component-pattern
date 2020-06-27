import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

export interface Employee {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  hoursWorked: number;
  hourlyWage: number;
}

const apiUrl = 'https://api.angularbootcamp.com';

@Injectable({
  providedIn: 'root'
})
export class EmployeeLoader {
  constructor(private http: HttpClient) {}

  getEasternStoreEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>(apiUrl + '/employees').pipe(
      map(longList => longList.slice(0, 9)),
      shareReplay(1)
    );
  }

  getWesternStoreEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>(apiUrl + '/employees').pipe(
      map(longList => longList.slice(9, 18)),
      shareReplay(1)
    );
  }

  getAllEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>(apiUrl + '/employees').pipe(
      map(longList => longList.slice(1, 18)),
      shareReplay(1)
    );
  }

  getDetails(employeeId: number): Observable<Employee> {
    return this.http.get<Employee>(
      `${apiUrl}/employees/${employeeId}`
    );
  }
}
