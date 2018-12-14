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
        this.jobsService.all().subscribe(res => this.jobs = res.jobs)
    }

    ngOnDestroy(): void {
        this.to.unsubscribe()
    }

    jobTrackBy(index: number, item) {
        return item.id;
    }

    getJobProgessValue(job: Job): number {
        if (job.status >= 1 && job.status <=5) { return 100/7 * job.status } 
        else if (job.status == 90) { return 100/7 * 6 } 
        else if (job.status == 99) { return 100 } 
        else if (job.status == 100) { return 100 } 
        else { return 0 }
    }

    getJobStatus(job: Job): string {
        let css = ''
        if (job.status >= 1 && job.status <=5) { css = 'progress-bar-animated' } 
        else if (job.status == 90) { css = 'progress-bar-animated' } 
        else if (job.status == 99) { css = 'bg-danger' } 
        else if (job.status == 100) { css = 'bg-success' } 
        else { return '' }
        return css
    }
}
