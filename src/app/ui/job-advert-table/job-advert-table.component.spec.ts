import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JobAdvertTableComponent } from './job-advert-table.component';

describe('JobAdvertTableComponent', () => {
  let component: JobAdvertTableComponent;
  let fixture: ComponentFixture<JobAdvertTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JobAdvertTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobAdvertTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
