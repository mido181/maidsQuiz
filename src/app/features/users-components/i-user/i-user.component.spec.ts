import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IUserComponent } from './i-user.component';

describe('IUserComponent', () => {
  let component: IUserComponent;
  let fixture: ComponentFixture<IUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IUserComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
