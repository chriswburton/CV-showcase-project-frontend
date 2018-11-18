import {Component, OnDestroy, OnInit} from '@angular/core';
import {JobService} from '../../services/job.service';
import {JobAdvertModel} from '../../models/job-advert.model';
import {UserService} from '../../services/user.service';
import {UserModel} from '../../models/user.model';
import {Subject, Subscription} from 'rxjs';
import {debounceTime, map, tap} from 'rxjs/operators';

@Component({
  selector: 'app-job-advert-table',
  templateUrl: './job-advert-table.component.html',
  styleUrls: ['./job-advert-table.component.scss']
})
export class JobAdvertTableComponent implements OnInit, OnDestroy {
  activeUser: UserModel;
  jobAdverts: JobAdvertModel[];
  jobSearchInput$: Subject<string> = new Subject();
  jobSearchSubscription: Subscription;
  searching = false;

  constructor(
    private readonly js: JobService,
    private readonly us: UserService
  ) { }

  ngOnInit() {
    this.jobAdverts = this.js.getAllJobAdverts();
    this.activeUser = this.us.getActiveUser();
    this.jobSearchSubscription = this.jobSearchInput$
      .pipe(
        tap(() => this.searching = true),
        debounceTime(500),
        map((queryStr: string) => this.js.filterJobAdverts(queryStr)),
        tap(() => this.searching = false)
      )
      .subscribe((results: JobAdvertModel[]) => this.jobAdverts = results);
  }

  filterJobs(queryStr: string): void {
    this.jobSearchInput$.next(queryStr);
  }

  /**
   * We'll clean up our active subscriptions to avoid memory leaks
   */
  ngOnDestroy() {
    this.jobSearchSubscription.unsubscribe();
  }

}
