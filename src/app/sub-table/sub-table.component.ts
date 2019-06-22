import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sub-table',
  templateUrl: './sub-table.component.html',
  styleUrls: ['./sub-table.component.scss']
})
export class SubTableComponent implements OnInit {
  innerTableDetails: any[] = [];
  constructor() {}

  ngOnInit() {}
}
