import {Component} from 'angular2/core';
import{NavbarComponent}from './navbar.component'

@Component({
    selector: 'my-app',
    template:'<nav-bar></nav-bar>',
    directives:[NavbarComponent]
})
export class AppComponent {
}

