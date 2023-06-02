import { Component } from '@angular/core';
import { TicketService } from 'src/app/services/ticket.service';
import { FilterDetails } from 'src/models/FilterDetails';
import { Category, Priority, Status } from 'src/models/enums';

@Component({
  selector: 'app-ticket-filters',
  templateUrl: './ticket-filters.component.html',
  styleUrls: ['./ticket-filters.component.css']
})
export class TicketFiltersComponent {
  public statusOptions: string[];
  public categoryOptions: string[];
  public priorityOptions: string[];
  private filterDetails: FilterDetails;
  constructor(private ticketService: TicketService) {
    this.statusOptions = Object.keys(Status).filter(key=>isNaN(Number(key)));
    this.categoryOptions = Object.keys(Category).filter(key=>isNaN(Number(key)));
    this.priorityOptions = Object.keys(Priority).filter(key=>isNaN(Number(key)));
    this.filterDetails = { status: Status.All, category: Category.All, priority: Priority.All };
  }

  onTextChanged(event: any) {
    this.ticketService.onSearchTextChanged(event.target.value);
  }
  onStatusSelectionChanged(event: any) {
    this.filterDetails.status = Status[event.target.value as keyof typeof Status];
    this.ticketService.onFiltersChanged(this.filterDetails);
  }
  onCategorySelectionChanged(event:any){
    this.filterDetails.category = Category[event.target.value as keyof typeof Category];
    this.ticketService.onFiltersChanged(this.filterDetails);
  }
  onPrioritySelectionChanged(event:any){
    this.filterDetails.priority = Priority[event.target.value as keyof typeof Priority];
    this.ticketService.onFiltersChanged(this.filterDetails);
  }
  
}

