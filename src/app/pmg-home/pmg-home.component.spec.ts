import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PmgHomeComponent } from './pmg-home.component';

describe('PmgHomeComponent', () => {
  let component: PmgHomeComponent;
  let fixture: ComponentFixture<PmgHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PmgHomeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PmgHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
