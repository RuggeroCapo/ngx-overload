import {PreloadOnOverDirective} from './preload-on-over.directive';
import {Component, DebugElement, ElementRef} from '@angular/core';
import {
  ComponentFixture,
  fakeAsync,
  TestBed,
  tick,
} from '@angular/core/testing';
import {By} from '@angular/platform-browser';
import {TriggerPreloadService} from '../trigger-preload.service';
import {getHrefFromElement} from '../utils/route-path-from-href';

class MockElementRef extends ElementRef {
  nativeElement = {};

  constructor() {
    super(null);
  }
}

describe('PreloadOnOverDirective', () => {
  let fixture: ComponentFixture<TestHoverComponent>;
  let directiveEl: DebugElement;
  let directiveInstance: PreloadOnOverDirective;
  let mouseoverSpy: jasmine.Spy<() => void>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TestHoverComponent, PreloadOnOverDirective],
      providers: [
        {provide: ElementRef, useClass: MockElementRef},
        TriggerPreloadService,
      ],
    }).compileComponents();
    fixture = TestBed.createComponent(TestHoverComponent);
    directiveEl = fixture.debugElement.query(
      By.directive(PreloadOnOverDirective)
    );
    directiveInstance = directiveEl.injector.get(PreloadOnOverDirective);
    mouseoverSpy = spyOn(
      directiveInstance,
      'mouseOverCallback'
    ).and.callThrough();
  });

  it('should create an instance', () => {
    expect(directiveInstance).toBeDefined();
    expect(directiveInstance.debounceTime).toBeDefined();
    expect(directiveInstance.customPath).toBeDefined();
    expect(directiveInstance.path).toBeDefined();
  });

  it('should take the path from href if no path input is provided', () => {
    const element = directiveEl.nativeElement;
    if (directiveInstance.customPath === '') {
      directiveInstance.ngOnInit();
      expect(directiveInstance.path).toEqual(getHrefFromElement(element));
    } else {
      directiveInstance.ngOnInit();
      expect(directiveInstance.path).toEqual(directiveInstance.customPath);
    }
  });

  it('should trigger the preload when the mouse is over the element', fakeAsync(() => {
    directiveEl.triggerEventHandler('mouseover', null);
    fixture.detectChanges();
    // expect mouseOverCallback to be called if mouse over for more than debounce time
    tick(directiveInstance.debounceTime + 1);
    expect(mouseoverSpy).toHaveBeenCalled();

    mouseoverSpy.calls.reset();

    // else it should not have been called
    directiveEl.triggerEventHandler('mouseover', null);
    fixture.detectChanges();
    directiveEl.triggerEventHandler('mouseleave', null);
    fixture.detectChanges();
    expect(mouseoverSpy).toHaveBeenCalledTimes(0);
  }));
});

@Component({
  template: '<a href="/example" appPreloadOnOver>Example link</a>',
})
class TestHoverComponent {}
