# Creating Dynamic Inner table component with directive 

created a directive, normally table will render with data. sometimes when we want to show extra data on click of table cell, that time we can use this directive.

```html

<tbody *ngFor="let i of table; let j = index">
    <tr innerTable [innerTableDirective]="i.innerTable">
      <td>{{i.fName | titlecase}}</td>
      <td>{{i.lName | titlecase}}</td>
      <td>{{i.age}}</td>
      <td style="cursor:pointer" (click)="makeOpen(i.innerTable, j)">
        {{i.innerTableOpen ? 'Less': 'View More'}}
      </td>
    </tr>
</tbody>

```


`[innerTableDirective]="i.innerTable"` directive will take the data on click `td` sub-table will be created dynamically and on click of other inner cell, current inner table will be destroyed and new table will be created.


This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.1.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
