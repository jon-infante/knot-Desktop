import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KnotComponent } from './knot.component';

describe('KnotComponent', () => {
  let component: KnotComponent;
  let fixture: ComponentFixture<KnotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KnotComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KnotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
