import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject } from 'rxjs';
import { ApiService } from './api.service';
import { Actions } from './store.actions';
import { reducer } from './store.reducer';

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  private state: any[] = [];
  private state$ = new Subject<any[]>();

  constructor(private api: ApiService) {}

  public dispatch = (action: Actions) => {
    this.state = reducer(this.state, action);
    this.state$.next(this.getSnapshot());
  }

  public getSnapshot = () => {
    return { ...this.state };
  }

  public select$ = () => this.state$.asObservable();
}


