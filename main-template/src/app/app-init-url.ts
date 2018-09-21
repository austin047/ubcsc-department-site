import { isDevMode, Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})

export class AppInitUrl {
    public baseUrl    
    public get BaseUrl() : string {
        return this.baseUrl
    }
    
    constructor() {
        console.log(isDevMode());

        isDevMode() == true ? this.baseUrl = 'http://localhost:3000': this.baseUrl = ''
    }
}
