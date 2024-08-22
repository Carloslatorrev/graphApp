import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import {ApidataService} from '../shared/apidata.service';


@Component({
  selector: 'app-nemos',
  templateUrl: './nemos.component.html',
  styleUrls: ['./nemos.component.css']
})
export class NemosComponent implements OnInit {

  public nemos: [];
  public page = 1;
  public pageSize = 20;
  @Output()
  nemoSelected = new EventEmitter<string>();

  constructor(public apiServices: ApidataService) { }

  ngOnInit(): void {
    this.apiServices.getSymbols().subscribe(resp=>{
      this.nemos = [];
      this.nemos = resp.symbolsList;
    })
  }

  onClick(nemoIn: string){
    this.nemoSelected.emit(nemoIn);
  }
}
