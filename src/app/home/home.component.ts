import {Component, OnDestroy, OnInit} from '@angular/core';
import {Observable, Observer, Subscription} from "rxjs";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  intervalSubscription!: Subscription;

  constructor() { }

  ngOnInit(): void {

    /*document.addEventListener('click', (event) => {
      console.log(event);
    });*/

    const interval$ = new Observable((observer: Observer<number>) => {
      let count = 0;
      setInterval(() => {
        observer.next(count++);
        if (count ===5) {
          //observer.error(new Error('We reached 5'));
          //observer.complete();
        }
      },1000)
    });

    this.intervalSubscription = interval$.subscribe(
      (val) => { console.log(val); },
      (error) => { console.log(error); },
      () => { console.log('Completed'); }
    );

  }

  ngOnDestroy(): void {
    this.intervalSubscription.unsubscribe();
  }

}
