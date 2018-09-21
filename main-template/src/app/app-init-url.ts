import { isDevMode, Injectable, Inject } from '@angular/core';
import {DOCUMENT} from '@angular/platform-browser';

@Injectable({
    providedIn: 'root'
})

export class AppInitUrl {
    public baseUrl    
    public get BaseUrl() : string {
        return this.baseUrl
    }
    
    constructor(@Inject(DOCUMENT) private document) {
        console.log(this.document);
        console.log(isDevMode());

        isDevMode() == true ? this.baseUrl = 'http://localhost:3000': this.baseUrl = `${this.document.protocol}//${this.document.hostname}`
    }
}
