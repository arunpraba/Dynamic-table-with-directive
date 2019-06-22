import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TableDirective } from './table.directive';
import { SubTableComponent } from './sub-table/sub-table.component';
import { FirstTableComponent } from './first-table/first-table.component';
import { SecondTableComponent } from './second-table/second-table.component';

@NgModule({
  declarations: [AppComponent, TableDirective, SubTableComponent, FirstTableComponent, SecondTableComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [SubTableComponent]
})
export class AppModule {}
