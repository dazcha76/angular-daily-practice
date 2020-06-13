import { Component } from '@angular/core';

@Component({
    selector: 'app-day1',
    templateUrl: './day1.component.html',
    styleUrls: ['./day1.component.css']
})

export class Day1Component {
    public iteration = '1st';
    public reversed = false;
    public buttonText = '';
    public buttonTarget = '';
    public name = '';

    constructor(){
        setTimeout(() => {
            this.reversed = true;
        }, 2000)
    }

    onClick(event){
        this.buttonText = 'You clicked me!';
        this.buttonTarget = event.target.baseURI
        console.log(event)
    }
}