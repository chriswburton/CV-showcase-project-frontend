import { Component, OnInit } from '@angular/core';
import {JobService} from '../../services/job.service';
import {JobAdvertModel} from '../../models/job-advert.model';
import {UserService} from '../../services/user.service';
import {UserModel} from '../../models/user.model';

@Component({
  selector: 'app-job-advert-table',
  templateUrl: './job-advert-table.component.html',
  styleUrls: ['./job-advert-table.component.scss']
})
export class JobAdvertTableComponent implements OnInit {
  jobAdverts: JobAdvertModel[];
  activeUser: UserModel;

  constructor(
    private readonly js: JobService,
    private readonly us: UserService
  ) { }

  ngOnInit() {
    this.jobAdverts = this.js.getAllJobAdverts();
    this.activeUser = this.us.getActiveUser();
  }

}
