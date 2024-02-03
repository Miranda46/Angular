import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';

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
export class SearchBoxComponent {

  @Input()
  public placeholder : string = '';

  @Output()
  public onValue : EventEmitter<string> = new EventEmitter;

  search( value: string ): void{
    if ( value.length === 0 ) return;
    this.onValue.emit(value);;
  }
 }
