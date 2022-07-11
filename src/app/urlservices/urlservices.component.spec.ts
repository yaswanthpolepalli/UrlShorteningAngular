import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UrlservicesComponent } from './urlservices.component';

describe('UrlservicesComponent', () => {
  let component: UrlservicesComponent;
  let fixture: ComponentFixture<UrlservicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UrlservicesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UrlservicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
