import {Injectable} from '@angular/core';
import {UserModel} from '../models/user.model';
import {plainToClass} from 'class-transformer';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private readonly activeUser: UserModel;

  constructor() {
    // @TODO Make activeUser db driven
    this.activeUser = plainToClass(UserModel, {
      firstname: 'Chris',
      surname: 'Burton',
      description: 'Full Stack TypeScript Developer',
      availableFrom: new Date(2018, 12, 1),
      desiredSalary: 54321,
      experience: [{
        organisation: 'My Learning Cloud',
        jobTitle: 'Developer',
        startDate: new Date(2017, 11, 20),
        endDate: null
      }],
      references: []
    });
  }

  /**
   * Method for getting our active User
   * @return the UserModel of our authenticated user
   */
  getActiveUser(): UserModel {
    return this.activeUser;
  }
}
