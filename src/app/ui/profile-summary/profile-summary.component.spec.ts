import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileSummaryComponent } from './profile-summary.component';
import {Component} from '@angular/core';
import {UserModel} from '../../models/user.model';
import {plainToClass} from 'class-transformer';

describe('ProfileSummaryComponent', () => {
  let component: ProfileSummaryComponent;
  let fixture: ComponentFixture<TestWrapperComponent>;
  let compiled: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        TestWrapperComponent,
        ProfileSummaryComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestWrapperComponent);
    // Our 'TestWrapperComponent' has a single child which is the 'ProfileSummaryComponent' we want to test.
    component = fixture.debugElement.children[0].componentInstance;
    compiled = fixture.debugElement.children[0].nativeElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render a "Welcome back" message in an h2 tag', () => {
    expect(compiled.querySelector('h2').textContent).toContain('Welcome back');
  });

  it('should contain 3 card sections', () => {
    expect(compiled.querySelectorAll('.card').length).toEqual(3);
  });
});

/**
 * As our ProfileSummary component relies on a UserModel being passed in, we'll need to account for this.
 * We'll create a simple mock 'wrapper' component that will pass this input in.
 * This will ensure we don't encounter any issues and can mirror the true behaviour of this component.
 */
@Component({
  selector: 'app-test-wrapper-component',
  template: '<app-profile-summary [user]="user"></app-profile-summary>'
})
class TestWrapperComponent {
  user = plainToClass(UserModel, {
    firstname: 'Mock',
    surname: 'User',
    description: 'Mock User',
    availableFrom: new Date(),
    desiredSalary: 99999,
    experience: [],
    references: []
  });
}
