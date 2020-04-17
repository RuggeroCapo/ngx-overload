import {
  Directive,
  ElementRef,
  HostListener,
  Input,
  OnInit,
} from '@angular/core';
import {TriggerPreloadService} from '../trigger-preload.service';
import {getHrefFromElement} from '../utils/route-path-from-href';

@Directive({
  selector: '[appPreloadOnOver]',
})
export class PreloadOnOverDirective implements OnInit {
  /**
   * override the path taken from href or router link
   */
  @Input() customPath = '';
  /**
   * define a debounce time to delay the preload on over
   * @default 100ms
   */
  @Input() debounceTime = 100;
  public path = '';

  private timer: unknown;

  constructor(
    private triggerPreloadService: TriggerPreloadService,
    private elementRef: ElementRef
  ) {}

  /**
   * when the mouse is over the item trigger the callback
   */
  @HostListener('mouseover') mouseover() {
    this.timer = setTimeout(() => this.mouseOverCallback(), this.debounceTime);
  }
  /**
   * clear the timeout when mouse leaves
   * prevent the preload if the mouse leaves before the debounceTime
   */
  @HostListener('mouseleave') mouseleave() {
    clearTimeout(this.timer as number);
  }

  ngOnInit(): void {
    this.path =
      this.customPath === ''
        ? getHrefFromElement(this.elementRef.nativeElement)
        : this.customPath;
  }

  mouseOverCallback(): void {
    this.triggerPreloadService.startPreload(this.path);
  }
}
