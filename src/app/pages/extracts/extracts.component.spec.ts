import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtractsComponent } from './extracts.component';

describe('ExtractsComponent', () => {
  let component: ExtractsComponent;
  let fixture: ComponentFixture<ExtractsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExtractsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExtractsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
