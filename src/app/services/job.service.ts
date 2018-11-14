import { Injectable } from '@angular/core';
import {plainToClass} from 'class-transformer';
import {JobAdvertModel} from '../models/job-advert.model';
import {UserModel} from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class JobService {
  private jobs: JobAdvertModel[];

  constructor() {
    // @TODO Make job adverts db driven
    this.jobs = [
      { organisation: 'Web Systems Ltd', jobTitle: 'Dev Ops Practitioner', salaryBandLowest: 45000, salaryBandHighest: 90000, minimumYearsExperienceRequired: 5 },
      { organisation: 'Google', jobTitle: 'Cloud Architect', salaryBandLowest: 75000, salaryBandHighest: 120000, minimumYearsExperienceRequired: 5 },
      { organisation: 'Netflix', jobTitle: 'Frontend UI/UX Developer', salaryBandLowest: 30000, salaryBandHighest: 58000, minimumYearsExperienceRequired: 2 },
      { organisation: 'Corporate Automation Inc', jobTitle: 'Data Scientist / Machine Learning Technician', salaryBandLowest: 60000, salaryBandHighest: 100000, minimumYearsExperienceRequired: 5 },
      { organisation: 'Local Bikeshop', jobTitle: 'Web Designer', salaryBandLowest: 18500, salaryBandHighest: 32000, minimumYearsExperienceRequired: 1 },
    ].map(advertObj => plainToClass(JobAdvertModel, advertObj));
  }

  /**
   * Method for getting ALL our job adverts
   * @return Array of all JobAdvertModels within the app
   */
  getAllJobAdverts() {
    return this.jobs;
  }

  /**
   * Method for checking whether a given user has enough experience to be deemed suitable for a job
   * @param user The UserModel of the user we wish to perform our check on
   * @param jobAdvert The JobAdvertModel for the job we wish to check our user against
   * @return A simple true/false representing whether the user is suitable
   */
  evaluateUserForJob(user: UserModel, jobAdvert: JobAdvertModel): boolean {
    if (user.getYearsOfExperience() < jobAdvert.minimumYearsExperienceRequired) {
      return false;
    }
    return true;
  }
}
