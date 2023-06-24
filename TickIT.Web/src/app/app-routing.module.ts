import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { TicketsComponent } from './components/tickets/tickets.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NewTicketComponent } from './components/new-ticket/new-ticket.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'tickets', component: TicketsComponent },
  { path: 'newticket', component: NewTicketComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), ReactiveFormsModule],
  exports: [RouterModule, ReactiveFormsModule]
})
export class AppRoutingModule { }
