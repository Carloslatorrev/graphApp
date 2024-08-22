import { Component, OnInit,Input, SimpleChanges, OnChanges } from '@angular/core';
import {ApidataService} from '../shared/apidata.service';


@Component({
  selector: 'app-prices',
  templateUrl: './prices.component.html',
  styleUrls: ['./prices.component.css']
})
export class PricesComponent implements OnInit, OnChanges {

  @Input() nemoSelected: '';
  public responseData: [];
  public iterateData: boolean = false;
  constructor(public apiService: ApidataService) { }

  ngOnChanges(changes: SimpleChanges) {
    if(this.nemoSelected !== '' || this.nemoSelected !== undefined){
      this.getDataNemo(this.nemoSelected);
    }
  }
  ngOnInit(): void {
  }
  getDataNemo(nemoIn: string){
    this.apiService.getHistoricalNemo(nemoIn).subscribe(resp=>{
      this.responseData = [];
      if(Object.keys(resp).length > 0){
        this.iterateData = true;
        this.responseData = resp.historical;
      }
    })
  }

}
