import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CasterListComponent } from './caster-list.component';

describe('CasterListComponent', () => {
  let component: CasterListComponent;
  let fixture: ComponentFixture<CasterListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CasterListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CasterListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
