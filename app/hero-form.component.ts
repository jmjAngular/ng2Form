/**
 * Created by joseph on 10/8/16.
 */
import {Component} from '@angular/core';
import {Hero}    from './hero';
@Component({
    selector: 'hero-form',
    templateUrl: 'app/hero-form.component.html'
})
export class HeroFormComponent {
    /* powers = ['Really Smart', 'Super Flexible',
     'Super Hot', 'Weather Changer'];*/
    model = new Hero(18, 'Joseph', "jmj@gmail.com", '95367667');
    submitted = false;

    onSubmit() {
        console.log(this.model);
       // this.submitted = true;
    }

    // TODO: Remove this when we're done
    get diagnostic() {
        return JSON.stringify(this.model);
    }

    active = true;

    resetHere() {
        this.model = new Hero(12, '', '', '');
    }


}
