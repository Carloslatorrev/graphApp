import { Component, OnInit, Input, SimpleChanges, OnChanges } from '@angular/core';
import {ApidataService} from '../shared/apidata.service';
import { formatDate } from '@angular/common';
import { NgxChartsModule } from '@swimlane/ngx-charts';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit, OnChanges {

  @Input() nemoSelected: '';
  public firstData = JSON.parse('[{"name":" ","series":[{"name":" ","value":"0"}]}]');
  public responseData: any[] = this.firstData;
  public chartData: any[];
  public iterateData: boolean = false;
  view: any[] = [800, 400];

  // options chart
  legend: boolean = true;
  legendTitle: string = 'Nemo';
  showLabels: boolean = true;
  animations: boolean = true;
  roundDomains: boolean = false;
  xAxis: boolean = true;
  yAxis: boolean = true;
  showYAxisLabel: boolean = true;
  showXAxisLabel: boolean = true;
  xAxisLabel: string = 'Date';
  yAxisLabel: string = 'Price';
  timeline: boolean = false;
  schemeType: string = "ordinal";
  colorScheme = {
    domain: ['#5AA454', '#E44D25', '#CFC0BB', '#7aa3e5', '#a8385d', '#aae3f5']
  };

  constructor(public apiServices: ApidataService) {
  }

  ngOnChanges(changes: SimpleChanges) {
    if(this.nemoSelected !== undefined){
      this.getDataChart(this.nemoSelected);
    }
  }

  ngOnInit(): void {
  }

  //Get data from api for data chart.
  getDataChart(nemoIn: string){
    this.apiServices.getHistoricalNemo(nemoIn).subscribe(resp=>{
      this.responseData = [];
      if(Object.keys(resp).length > 0){
        this.responseData = resp.historical;
        let responseAux = JSON.stringify(resp.historical);
        let jsonData = JSON.parse(responseAux);
        jsonData.forEach((data)=>{
          data.name = data.date;
          delete data.date;
          data.value = data.close;
          delete data.close;
        })
        let jsonAux =`[{"name": "${resp.symbol}","series": ${JSON.stringify(jsonData)}}]`;
        let jsonFinal = JSON.parse(jsonAux);
        this.iterateData = true;
        this.responseData = jsonFinal;
      }
    })
  }

  onSelect(data): void {
    console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }

  onActivate(data): void {
    console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data): void {
    console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }

}
