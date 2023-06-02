import { Component } from '@angular/core';
import { Editor } from 'ngx-editor';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TicketService } from 'src/app/services/ticket.service';
import { Ticket } from 'src/models/Ticket';
import { Category, Priority, Status } from 'src/models/enums';
import { StmtModifier } from '@angular/compiler';

@Component({
  selector: 'app-new-ticket',
  templateUrl: './new-ticket.component.html',
  styleUrls: ['./new-ticket.component.css']
})

export class NewTicketComponent {
  public editor: Editor;
  public statusOptions: string[];
  public categoryOptions: string[];
  public priorityOptions: string[];
  constructor(private router: Router, private ticketService: TicketService) {
    this.editor = new Editor();
    this.statusOptions = Object.keys(Status).filter(key=>isNaN(Number(key))&& key!="All");
    this.categoryOptions = Object.keys(Category).filter(key=>isNaN(Number(key))&& key!="All");
    this.priorityOptions = Object.keys(Priority).filter(key=>isNaN(Number(key))&& key!="All");
  }

  newTicket: Ticket = {
    name: "",
    category: Category.All,
    dateCreated: '',
    description: "",
    priority: Priority.All,
    status: Status.All,
    id: "",
    dueDate: ""
  }

  addTicketForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]),
    description : new FormControl('',[Validators.minLength(3), Validators.maxLength(256)]),
    status : new FormControl(),
    category: new FormControl(),
    priority: new FormControl(),
    dueDate :new FormControl(Date.now().toLocaleString())
  });

  onSubmit(): void {
    if (!this.addTicketForm.valid) {
      this.addTicketForm.markAllAsTouched();
    }
    this.prepareTicketFromForm(this.newTicket);
    this.ticketService.addTicket(this.newTicket);
    this.navigateToHome();
  }

  prepareTicketFromForm(ticket: Ticket) {
    this.newTicket.name = this.addTicketForm.get('name')?.value ?? '';
    this.newTicket.status = Status[(this.addTicketForm.get('status')?.value ?? "Unassigned") as keyof typeof Status];
    this.newTicket.category = Category[(this.addTicketForm.get('category')?.value ?? "Misc") as keyof typeof Category];
    this.newTicket.description = this.addTicketForm.get("description")?.value ?? '';
    this.newTicket.priority = Priority[(this.addTicketForm.get("priority")?.value ?? "Low") as keyof typeof Priority];
    this.newTicket.dateCreated = new Date().toDateString();
    this.newTicket.dueDate = this.addTicketForm.get("dueDate")?.value ?? '';
  }
  onCancel(): void {
    this.addTicketForm.reset();
    this.router.navigate(['/']);
  }

  ngOnDestroy(): void {
    this.editor.destroy();
  }

  navigateToHome(): void {
    if (this.name?.valid) {
      this.addTicketForm.reset();
      this.router.navigate(['/']);
    }
  }

  get name() {
    return this.addTicketForm.get('name');
  }
}
