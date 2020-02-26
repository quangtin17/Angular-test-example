/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { ServiceTestComponent } from './service-test.component';
import { QuoteService } from '../service/test.service';
import { Test } from '../model/service-test';
import { FormsModule } from '@angular/forms';

describe('ServiceTestComponent', () => {
  let component: ServiceTestComponent;
  let fixture: ComponentFixture<ServiceTestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [ServiceTestComponent]
    });
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceTestComponent);
    component = fixture.debugElement.componentInstance;
  });

  it('should create Quote component', () => {
    expect(component).toBeTruthy();
  });

  it('should use the quoteList from the service', () => {
    const quoteService = fixture.debugElement.injector.get(QuoteService);
    fixture.detectChanges();
    expect(quoteService.getQuote()).toEqual(component.quoteList);
  });

  it('should create a new post', () => {
    component.quoteText = 'I love this test';
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.innerHTML).toContain('I love this test');
  });

  it('should disable the button when textArea is empty', () => {
    fixture.detectChanges();
    const button = fixture.debugElement.query(By.css('button'));
    expect(button.nativeElement.disabled).toBeTruthy();
  });

  it('should enable button when textArea is not empty', () => {
    component.quoteText = 'I love this test';
    fixture.detectChanges();
    const button = fixture.debugElement.query(By.css('button'));
    expect(button.nativeElement.disabled).toBeFalsy();
  });

  it('should remove post upon card click', () => {
    component.quoteText = 'This is a fresh post';
    fixture.detectChanges();

    fixture.debugElement
      .query(By.css('.row'))
      .query(By.css('.card'))
      .triggerEventHandler('click', null);
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.innerHTML).toContain('This is a fresh post');
  });

  it('should fetch data asynchronously', async () => {
    const fakedFetchedList = [
      new Test('I love unit testing', 'Mon 24, 2020')
    ];
    const quoteService = fixture.debugElement.injector.get(QuoteService);
    let spy = spyOn(quoteService, 'fetchQuotesFromServer').and.returnValue(
      Promise.resolve(fakedFetchedList)
    );
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      expect(component.fetchedList).toBe(fakedFetchedList);
    });
  });
});
