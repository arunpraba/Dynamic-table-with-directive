import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-table',
  templateUrl: './first-table.component.html',
  styleUrls: ['./first-table.component.scss']
})
export class FirstTableComponent implements OnInit {
  constructor() {}

  table = [
    {
      fName: 'Arun',
      lName: 'Praba',
      age: '27',
      innerTable: [
        {
          fName: 'Arun',
          address: 'BLR',
          pin: '560068',
          location: '77.33'
        }
      ],
      innerTableOpen: false
    },
    {
      fName: 'Thor',
      lName: 'Smith',
      age: '33',
      innerTable: [
        {
          fName: 'Steve',
          address: 'Los angels',
          pin: '443423',
          location: '12.33'
        }
      ],
      innerTableOpen: false
    },
    {
      fName: 'Will',
      lName: 'Sneak',
      age: '12',
      innerTable: [
        {
          fName: 'Will',
          address: 'New York',
          pin: '343423',
          location: '12.33'
        }
      ],
      innerTableOpen: false
    },
    {
      fName: 'Jones',
      lName: 'Tra',
      age: '41',
      innerTable: [
        {
          fName: 'Jones',
          address: 'Jonex',
          pin: '423423',
          location: '12.33'
        }
      ],
      innerTableOpen: false
    }
  ];

  innerTableDetails: any[];

  ngOnInit(): void {}

  makeOpen(data, index) {
    this.innerTableDetails = data;
    this.table[index].innerTableOpen = !this.table[index].innerTableOpen;
  }
}
