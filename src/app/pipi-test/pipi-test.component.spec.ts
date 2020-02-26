import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PipiTestComponent } from './pipi-test.component';

describe('PipiTestComponent', () => {
  let component: PipiTestComponent;
  let fixture: ComponentFixture<PipiTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PipiTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PipiTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});
