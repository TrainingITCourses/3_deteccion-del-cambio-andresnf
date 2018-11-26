import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Launch } from './models/launch';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  public launches: Launch[];
  public statuses: any[];
  private key = 'launches';
  constructor(private http: HttpClient) {
    const launches = localStorage.getItem(this.key);
    if (launches) {
      this.launches = JSON.parse(launches);
    }
  }

  public getAgencies = (): Observable<any[]> =>
    this.http
      .get(environment.url + '/assets/data/agencies.json')
      .pipe(map((res: any) => res.agencies))

  public getMissionTypes = (): Observable<any[]> =>
    this.http
      .get(environment.url + '/assets/data/missiontypes.json')
      .pipe(map((res: any) => res.types))

  public getStatusTypes$ = (): Observable<any[]> =>
    this.http
      .get(environment.url + '/assets/data/launchstatus.json')
      .pipe(map((res: any) => res.types))
}
