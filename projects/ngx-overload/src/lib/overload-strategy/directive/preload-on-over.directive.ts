import {Directive, ElementRef, HostListener, Input, OnInit,} from '@angular/core';
import {TriggerPreloadService} from '../trigger-preload.service';

@Directive({
  selector: '[appPreloadOnOver]',
})
export class PreloadOnOverDirective implements OnInit {
  /**
   * override the path taken from href or router link
   */
  @Input() path = '';
  /**
   * define a debounce time to delay the preload on over
   * @default 100ms
   */
  @Input() debounceTime = 100;

  private timer: unknown;

  constructor(
    private triggerPreloadService: TriggerPreloadService,
    private elementRef: ElementRef
  ) {
  }

  @HostListener('mouseover') mouseover() {
    this.timer = setTimeout(() => this.mouseOverCallback(), this.debounceTime);
  }

  @HostListener('mouseleave') mouseleave() {
    clearTimeout(this.timer as number);
  }

  ngOnInit(): void {
    const routerPath =
      this.elementRef.nativeElement?.attributes['ng-reflect-router-link']?.value
      || this.elementRef.nativeElement.getAttribute('href');
    this.path = this.path === '' ? routerPath : this.path;
  }

  mouseOverCallback(): void {
    this.triggerPreloadService.startPreload(this.path);
  }
}
