import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Subject, Subscription, debounceTime } from 'rxjs';

@Component({
  selector: 'shared-search-box',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './search-box.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchBoxComponent implements OnInit, OnDestroy {
 

  @Input()
  public placeholder : string = '';

  @Output()
  public onDebounce : EventEmitter<string> = new EventEmitter;
 
  @Output()
  public onValue : EventEmitter<string> = new EventEmitter;

  public debouncer : Subject<string> = new Subject<string>;

  public debouncerSubscription? : Subscription;

  search( value: string ): void{
    if ( value.length === 0 ) return;
    this.onValue.emit(value);;
  }

  ngOnInit() {
    this.debouncerSubscription = this.debouncer
    .pipe(
      debounceTime(500)
    )
    .subscribe( value => {
      this.onDebounce.emit( value )
    })

  }

  ngOnDestroy(): void {
    this.debouncerSubscription?.unsubscribe();
  }

  onKeyPress( searchValue : string ){
    this.debouncer.next( searchValue )
  }

 }
