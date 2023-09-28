import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetPersonComponent } from './get-person.component';

describe('GetPersonComponent', () => {
  let component: GetPersonComponent;
  let fixture: ComponentFixture<GetPersonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GetPersonComponent]
    });
    fixture = TestBed.createComponent(GetPersonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
