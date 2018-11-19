import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogOutComponent } from './log-out.component';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';
import {RouterStub} from '../../test.stubs';

describe('LogOutComponent', () => {
  let component: LogOutComponent;
  let fixture: ComponentFixture<LogOutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogOutComponent ],
      providers: [
        AuthService,
        { provide: Router, useClass: RouterStub }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogOutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should log us out "onload"', () => {
    const service = TestBed.get(AuthService);
    expect(service.getAuthenticationStatus()).toEqual(false);
  });
});
