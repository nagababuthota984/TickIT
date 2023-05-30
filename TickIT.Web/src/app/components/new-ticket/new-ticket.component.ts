import { Component } from '@angular/core';
import { Editor } from 'ngx-editor';
import { FormBuilder, FormGroup , FormControl, Validators  } from '@angular/forms';
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
  constructor(private router:Router, private ticketService: TicketService) {
    this.editor = new Editor();
  }

  addTikcet: Ticket = {
    name: "",
    category: Category.All,
    dateCreated: "",
    description: "",
    priority: Priority.All,
    status: Status.All,
    id: ""
  }

  addTicketForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]),
    });
  
  onSubmit():void{
    if(!this.addTicketForm.valid) {
      this.addTicketForm.markAllAsTouched();
    }
    this.addTikcet.name = this.addTicketForm.get('name')?.value ?? '';
    this.ticketService.addTicket(this.addTikcet);
    this.navigateToHome();  
  }

  onCancel(): void{
    this.addTicketForm.reset();
    this.router.navigate(['/']);
  }
  
  ngOnDestroy():void{
    this.editor.destroy();
  }

  navigateToHome(): void{
    if(this.name?.valid)
    {
        this.addTicketForm.reset();
        this.router.navigate(['/']);
    }
  }

  get name() {  
     return this.addTicketForm.get('name'); 
  }
}
