import {EmploymentRecord} from '../interfaces/employment-record.interface';
import {Reference} from '../interfaces/reference.interface';

export class UserModel {
  private firstname: string;
  private surname: string;
  private description = 'No description provided';
  private availableFrom: Date;
  private desiredSalary: number;
  private experience: EmploymentRecord[];
  private references: Reference[];

  /**
   * Useful method for getting a user's full name.
   */
  getFullName(): string {
    return `${this.firstname} ${this.surname}`;
  }

  /**
   * Method for getting the statement that describes a user
   */
  getDescription(): string {
    return this.description;
  }

  /**
   * Useful method for getting the number of years of 'experience' this user has
   * @return The number of years (rounded to the nearest year)
   */
  getYearsOfExperience(): number {
    // we'll calculate the total time employed in milliseconds
    const totalMilliseconds = this.experience
      .reduce((acc, employment) => {
        if (!employment.endDate) {
          employment.endDate = new Date();
        }
        return acc + (+employment.endDate - +employment.startDate);
      }, 0);
    // we can now return this an a number of years (approximate)
    return Math.round(totalMilliseconds / (1000 * 60 * 60 * 24 * 365));
  }

  /**
   * Method for retrieving the number of jobs a user has had in their career
   */
  getJobCount(): number {
    return this.experience.length;
  }
}
