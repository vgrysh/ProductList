import { Component, OnChanges, Input } from 'angular2/core';

@Component({
    selector: 'ai-star',
    templateUrl: 'app/shared/star.component.html',
    styleUrls: ['app/shared/star.component.css']
})
export class StarComponent implements OnChanges {
    @Input() rating: number;
    starWidht:number;

    ngOnChanges(): void {
        this.starWidht = this.rating * 86 / 5;
    }
}