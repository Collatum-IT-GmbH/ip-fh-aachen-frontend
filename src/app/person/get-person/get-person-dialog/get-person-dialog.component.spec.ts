import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetPersonDialogComponent } from './get-person-dialog.component';

describe('GetPersonDialogComponent', () => {
  let component: GetPersonDialogComponent;
  let fixture: ComponentFixture<GetPersonDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GetPersonDialogComponent]
    });
    fixture = TestBed.createComponent(GetPersonDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
