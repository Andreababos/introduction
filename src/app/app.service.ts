import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Songs } from './songs';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class appService {
    constructor(private http : Http) { }

    public getData(search: string) {
        return this.http.get('http://ws.audioscrobbler.com/2.0/?method=track.search&track='+search+'&api_key=7fe1ce53531d0d3549c73fdc310d0220&format=json')
            .map(res => res.json().results.trackmatches.track as Songs[]);
    }
    public getSong(mbid: string) {
        const url = 'http://ws.audioscrobbler.com/2.0/?method=track.getInfo&api_key=7fe1ce53531d0d3549c73fdc310d0220&mbid='+mbid+'&format=json';
        return this.http.get(url)
            .map(response => response.json().results.track.wiki as Songs);
    }
}