import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ToolbarService {

  public toolbarTitle = new BehaviorSubject<string>(null);

  constructor() { }

  setToolbarTitle (title: string) {
    this.toolbarTitle.next(title);
  }

}
