import { isDevMode, Injectable, Inject } from '@angular/core';


@Injectable({
    providedIn: 'root'
})

export class AppInitUrl {
    public baseUrl    
    public get BaseUrl() : string {
        return this.baseUrl
    }
    
    constructor() {
        console.log(window.location);
        console.log(window.location.protocol)
        console.log(window.location.hostname)
        console.log(isDevMode());

        isDevMode() == true ? this.baseUrl = 'http://localhost:3000': this.baseUrl = `${window.location.protocol}//${window.location.hostname}`
    }
}
