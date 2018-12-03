import { Launch } from './models/launch';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { Status } from './models/status';
import { Agency } from './models/agency';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  public launches: Launch[];
  constructor(private http: HttpClient) {

  }

  /** GET Launch List */
  public getLaunchList(): Observable<Launch[]> {
    if (this.launches) {return of(this.launches); }
    return this.http.get<any[]>('../assets/data/launches.json')
      .pipe(map((res: any) => res.launches), tap(res => (this.launches = res)));
  }


  /** GET Status List */
  public getStatusList(): Observable<Status[]> {
      return this.http.get<Status[]>('../assets/data/launchstatus.json')
      .pipe(map((res: any) => res.types));
  }

  /** GET Agency List  */
  public getAgencyList(): Observable<Agency[]> {
    return this.http.get<Agency[]>('../assets/data/agencies.json')
      .pipe(map((res: any) => res.agencies));
  }

  /** GET Type List  */
  public getTypeList(): Observable<any[]> {
    return this.http.get<any[]>('../assets/data/missiontypes.json')
      .pipe(map((res: any) => res.types));
  }


}
