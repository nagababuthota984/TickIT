import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketFiltersComponent } from './ticket-filters.component';

describe('TicketFiltersComponent', () => {
  let component: TicketFiltersComponent;
  let fixture: ComponentFixture<TicketFiltersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TicketFiltersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TicketFiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
