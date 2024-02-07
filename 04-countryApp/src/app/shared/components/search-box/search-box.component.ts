import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { Subject, debounceTime } from 'rxjs';

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
export class SearchBoxComponent implements OnInit {

  @Input()
  public placeholder : string = '';

  @Output()
  public onDebounce : EventEmitter<string> = new EventEmitter;
 
  @Output()
  public onValue : EventEmitter<string> = new EventEmitter;

  public debouncer : Subject<string> = new Subject<string>;

  search( value: string ): void{
    if ( value.length === 0 ) return;
    this.onValue.emit(value);;
  }

  ngOnInit() {
    this.debouncer
    .pipe(
      debounceTime(500)
    )
    .subscribe( value => {
      this.onDebounce.emit( value )
    })

  }

  onKeyPress( searchValue : string ){
    this.debouncer.next( searchValue )
  }

 }
