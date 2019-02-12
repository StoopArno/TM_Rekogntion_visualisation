import { Component, OnInit } from '@angular/core';
import {ToolbarService} from '../../_services/toolbar.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent implements OnInit {

  constructor(private toolbarService: ToolbarService) { }

  ngOnInit() {
    this.toolbarService.setToolbarTitle('Search');
  }

}
