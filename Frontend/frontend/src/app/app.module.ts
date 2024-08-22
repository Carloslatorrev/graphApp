import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MainComponent } from './main/main.component';
import { ChartComponent } from './chart/chart.component';
import { NemosComponent } from './nemos/nemos.component';
import { PricesComponent } from './prices/prices.component';
import { ApidataService } from './shared/apidata.service';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxChartsModule } from '@swimlane/ngx-charts';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    ChartComponent,
    NemosComponent,
    PricesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    NgxChartsModule,
    BrowserAnimationsModule
  ],
  providers: [ApidataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
