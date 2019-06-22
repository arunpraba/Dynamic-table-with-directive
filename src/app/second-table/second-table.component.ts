import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-second-table',
  templateUrl: './second-table.component.html',
  styleUrls: ['./second-table.component.scss']
})
export class SecondTableComponent implements OnInit {
  constructor() {}

  table = [
    {
      fName: 'john',
      lName: 'Doe',
      age: '22',
      innerTable: [
        {
          fName: 'john',
          address: 'San andreas',
          pin: '623423',
          location: '72.33'
        }
      ],
      innerTableOpen: false
    },
    {
      fName: 'Steve',
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
