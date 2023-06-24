import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription, isEmpty } from 'rxjs';
import { TicketService } from 'src/app/services/ticket.service';
import { Ticket } from 'src/models/Ticket';
import { Status,Priority,Category } from 'src/models/enums';

@Component({
  selector: 'app-tickets-datagrid',
  templateUrl: './tickets-datagrid.component.html',
  styleUrls: ['./tickets-datagrid.component.css']
})
export class TicketsDatagridComponent implements OnInit, OnDestroy {
  public tickets: Ticket[];
  public currentPage: number;
  public Status = Status;
  public Priority= Priority;
  public Category = Category;
  public pageSize: number = 10;
  private searchTextChangedSubscription!: Subscription;
  private filtersChangedSubscription!: Subscription;
  public hasTickets: boolean;
  @Input() public searchKeyword: string;

  constructor(private ticketService: TicketService) {
    this.tickets = this.ticketService.tickets;
    this.currentPage = 1;
    this.searchKeyword = '';
    this.ticketService.seedTickets();
    this.hasTickets = this.tickets.length > 0;

  }
  ngOnInit(): void {
    this.searchTextChangedSubscription = this.ticketService.searchTextChanged.subscribe((value) => {
        this.tickets = this.ticketService.searchTicketsById(value);
        this.hasTickets = this.tickets.length > 0;
    });
    this.filtersChangedSubscription = this.ticketService.filtersChanged.subscribe((value) => {
      if (value) {
        this.tickets = this.ticketService.getFilteredResults(value);
        this.hasTickets = this.tickets.length > 0;
      }
    })

  }
  ngOnDestroy(): void {
    if (this.searchTextChangedSubscription)
      this.searchTextChangedSubscription.unsubscribe();
    if (this.filtersChangedSubscription)
      this.filtersChangedSubscription.unsubscribe();
  }



}
