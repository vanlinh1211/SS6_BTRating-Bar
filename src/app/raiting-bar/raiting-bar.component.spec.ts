import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RaitingBarComponent } from './raiting-bar.component';

describe('RaitingBarComponent', () => {
  let component: RaitingBarComponent;
  let fixture: ComponentFixture<RaitingBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RaitingBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RaitingBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
