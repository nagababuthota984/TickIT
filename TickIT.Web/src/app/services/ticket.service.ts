import { Injectable } from '@angular/core';
import { tick } from '@angular/core/testing';
import { Subject } from 'rxjs';
import { FilterDetails } from 'src/models/FilterDetails';
import { Ticket } from 'src/models/Ticket';
import { Category, Priority, Status } from 'src/models/enums';

@Injectable({
  providedIn: 'root'
})
export class TicketService {
  public tickets: Ticket[];
  public filteredTickets: Ticket[];
  public searchTextChanged: Subject<string>;
  public filtersChanged: Subject<FilterDetails>;
  constructor() {
    this.tickets = [];
    this.filteredTickets = [];
    this.searchTextChanged = new Subject<string>();
    this.filtersChanged = new Subject<FilterDetails>();
  }

  searchTicketsById(searchText: string): Ticket[] {
      this.filteredTickets = [];
      for (let ticket of this.tickets) {
        if (ticket.id.includes(searchText)) {
          this.filteredTickets.push(ticket);
        }
      }
      return this.filteredTickets;
  }

  getFilteredResults(filters: FilterDetails) {
    this.filteredTickets = [];
    if (filters.status == Status.All && filters.category == Category.All && filters.priority == Priority.All) {
      return this.tickets;
    }
    else {
      for (let ticket of this.tickets) {
        if ((filters.status == Status.All || ticket.status == filters.status)
          && (filters.category== Category.All || ticket.category == filters.category)
          && (filters.priority == Priority.All || ticket.priority == filters.priority)) {
          this.filteredTickets.push(ticket);
        }
      }
      return this.filteredTickets;
    }
  }

  onSearchTextChanged(newValue: string) {
    this.searchTextChanged.next(newValue);
  }

  onFiltersChanged(newValues: FilterDetails) {
    this.filtersChanged.next(newValues);
  }

  seedTickets() {
    // for (let i = 0; i < 25; i++) {
    //   this.tickets.push(new Ticket({
    //     id: i.toString(),
    //     name: "Ticket " + i,
    //     description: "service ticket " + i,
    //     category: Math.floor(Math.random() * 3) + 1,
    //     priority: Math.floor(Math.random() * 2) + 1,
    //     status: Math.floor(Math.random() * 3) + 1,
    //     dateCreated: new Date(Math.floor(Math.random() * Date.now())).toLocaleDateString()
    //   }))
    // };
  }

  addTicket(ticket: Ticket){
    this.tickets.push(ticket);
  }
}
