import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketsDatagridComponent } from './tickets-datagrid.component';

describe('TicketsDatagridComponent', () => {
  let component: TicketsDatagridComponent;
  let fixture: ComponentFixture<TicketsDatagridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TicketsDatagridComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TicketsDatagridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
