import { BrowserModule } from '@angular/platform-browser';
import { NgModule , NO_ERRORS_SCHEMA ,CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';

import {NGXChartsComponentComponent} from './ngxcharts-component/ngxcharts-component.component';
import { TestComponent } from './test/test.component';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import {MatGridListModule} from '@angular/material/grid-list';

@NgModule({
  declarations: [
    AppComponent,
    NGXChartsComponentComponent,
    TestComponent
  ],
  imports: [
    BrowserModule,
    NgxChartsModule,
    NoopAnimationsModule,
    FormsModule,
    MatButtonModule, MatCheckboxModule,
    MatMenuModule,MatIconModule,
    MatGridListModule,
  ],
  schemas:[NO_ERRORS_SCHEMA,CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
