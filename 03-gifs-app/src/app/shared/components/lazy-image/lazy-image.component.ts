import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'shared-lazy-image',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: 'lazy-image.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LazyImageComponent {

  @Input()
  public url = "";

  @Input()
  public alt = "";

  public hasLoaded : boolean = false;

  onLoad() : void {
    setTimeout(() => {
      this.hasLoaded = true;
      }, 500
      );
    this.hasLoaded = true;
  }



}
