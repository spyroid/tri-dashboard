import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class JobsService {

    constructor(private http: HttpClient) { }

    getApi(): any {
        return window
    }

    all(): Observable<JobsResponse> {
        let url = this.getApi().baseApi + 'users?a=1';
        return this.http.get<JobsResponse>(url)
    }
}

export class JobsResponse {
    data: Job[]
}

export class Job {
    id: number
    avatar: string
}
