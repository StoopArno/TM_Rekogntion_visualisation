import { Component, OnInit } from '@angular/core';
import {ToolbarService} from '../../_services/toolbar.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styles: []
})
export class DashboardComponent implements OnInit {

  constructor(private toolbarService: ToolbarService) { }

  ngOnInit() {
    this.toolbarService.setToolbarTitle('Dashboard');
  }

}
