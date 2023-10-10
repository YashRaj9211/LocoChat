import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NearByUsersComponent } from './near-by-users.component';

describe('NearByUsersComponent', () => {
  let component: NearByUsersComponent;
  let fixture: ComponentFixture<NearByUsersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NearByUsersComponent]
    });
    fixture = TestBed.createComponent(NearByUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
