export class JobAdvertModel {
  organisation: string;
  jobTitle: string;
  salaryBandLowest: number;
  salaryBandHighest: number;
  minimumYearsExperienceRequired: number;

  /**
   * Useful method for getting a human-friendly summary of the job
   * @return A sentence listing "Job Title", "Organisation" and "Salary Banding"
   */
  getJobSummary(): string {
    return `Opportunity for a ${this.jobTitle} at ${this.organisation}
            (£${this.salaryBandLowest} - £${this.salaryBandHighest} depending on experience)`;
  }
}
