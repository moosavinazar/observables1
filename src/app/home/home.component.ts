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
      let count = 0;
      setInterval(() => {
        observer.next(count++);
        if (count ===5) {
          //observer.error(new Error('We reached 5'));
          observer.complete();
        }
      },1000)
    });

    interval$.subscribe(
      (val) => { console.log(val); },
      (error) => { console.log(error); },
      () => { console.log('Completed'); }
    )

  }

}
