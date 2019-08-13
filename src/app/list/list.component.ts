import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import {
  Inject,
} from '@angular/core';

import { DataService } from '../data.service';

@Component({
  selector: 'list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  private data$;

  constructor(
    @Inject(DataService) private data: DataService
  ) { }

  ngOnInit() {
    this.data$ = this.data.getData();
  }
}
