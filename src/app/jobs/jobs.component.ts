import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription, timer } from 'rxjs';
import { JobsService, Job } from '../jobs.service';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css']
})
export class JobsComponent implements OnInit, OnDestroy {

  jobs: Job[] = []
  to: Subscription

  constructor(private jobsService: JobsService) { }

  ngOnInit(): void {
      this.to = timer(0, 10000).subscribe(val => this.loadJobs())
  }

  loadJobs() {
      this.jobsService.all().subscribe(res => this.jobs = res.data)
  }

  ngOnDestroy(): void {
      this.to.unsubscribe()
  }

  jobTrackBy(index: number, item) {
      return item.id;
  }


}
