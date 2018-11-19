import {Component, OnDestroy, OnInit} from '@angular/core';
import {JobService} from '../../services/job.service';
import {JobAdvertModel} from '../../models/job-advert.model';
import {ActivatedRoute} from '@angular/router';
import {map, takeUntil, tap} from 'rxjs/operators';
import {Subject} from 'rxjs';

@Component({
  selector: 'app-application-form',
  templateUrl: './application-form.component.html',
  styleUrls: ['./application-form.component.scss']
})
export class ApplicationFormComponent implements OnInit, OnDestroy {
  advert: JobAdvertModel;
  private ngUnsubscribe = new Subject();

  constructor(
    private readonly js: JobService,
    private readonly route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.paramMap.pipe(
      map(params => this.js.getJobAdvertById(params.get('jobId'))),
      takeUntil(this.ngUnsubscribe)
    ).subscribe((advert: JobAdvertModel) => this.advert = advert);
  }

  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

}
