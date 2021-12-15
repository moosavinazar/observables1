import { Component, OnInit } from '@angular/core';
import {Observable, Observer} from "rxjs";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    const interval$ = new Observable((observer: Observer<number>) => {
      observer.next(1);
      observer.next(2);
      observer.next(3);
      observer.error(new Error('Error in app!'))
    });

    interval$.subscribe(
      (val) => { console.log(val); }
    )

  }

}
