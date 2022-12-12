import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit,
         Component, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-pagina1',
  templateUrl: './pagina1.component.html',
  styles: [
  ]
})
export class Pagina1Component 
  implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit,
              AfterViewChecked, OnDestroy {

  nombre: string = 'jesussss';
  segundos: number = 0;
  timerSubscription!: Subscription;


  constructor() { 
    console.log( 'constructor' )
  }

  ngOnInit(): void {
    console.log('init');

    this.timerSubscription = interval( 1000 ).subscribe ( i => {
      this.segundos = i;
      console.log( i );
    });

  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('OnChanges');
  }
  ngDoCheck(): void {
    console.log('DoCheck');
  }
  ngAfterContentInit(): void {
    console.log('AfterContentInit');
  }
  ngAfterContentChecked(): void {
    console.log('AfterContentChecked');
  }
  ngAfterViewInit(): void {
    console.log('AfterViewInit');
  }
  ngAfterViewChecked(): void {
    console.log('AfterViewChecked');
  }
  ngOnDestroy(): void {
    this.timerSubscription.unsubscribe();
    console.log('OnDestroy');
  }

  guardar() {

  }
 


}
