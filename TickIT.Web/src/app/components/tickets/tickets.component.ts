import { Component, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.css']
})
export class TicketsComponent {
  public searchWord:string;
  constructor() {
    this.searchWord = '';

  }


  handleSearch(searchValue : any){
    this.searchWord = searchValue;
  }
}
