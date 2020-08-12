import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

import { DemoComponent } from './demo-component.ts';

@NgModule({
  imports:      [ BrowserModule, FormsModule, NgxDatatableModule ],
  declarations: [ DemoComponent ],
  bootstrap:    [ DemoComponent ]
})
export class AppModule { }
