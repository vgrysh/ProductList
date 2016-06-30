import { Component, OnChanges } from 'angular2/core';

@Component({
    selector: 'ai=star',
    templateUrl: 'app/shared/star.component.html',
    styleUrls: ['app/shared/star.component.css']
})
export class StarComponent implements OnChanges {
    rating: number= 4;
    starWidht:number;

    ngOnChanges(): void {
        this.starWidht = this.rating * 86 / 5;
    }
}