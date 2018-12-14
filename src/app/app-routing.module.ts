import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { JobsComponent } from './jobs/jobs.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
    { path: '', redirectTo: '/jobs', pathMatch: 'full' },
    { path: 'jobs', component: JobsComponent },
    { path: 'about', component: AboutComponent },
    { path: '**', redirectTo: '/jobs' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [
    JobsComponent
]