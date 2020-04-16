import {PreloadOnOverDirective} from './preload-on-over.directive';
import {Component, DebugElement, ElementRef} from '@angular/core';
import {ComponentFixture, TestBed} from '@angular/core/testing';
import {By} from '@angular/platform-browser';
import {TriggerPreloadService} from '../trigger-preload.service';
import {RouterModule} from '@angular/router';

class MockElementRef extends ElementRef {
  nativeElement = {};

  constructor() {
    super(null);
  }
}

describe('PreloadOnOverDirective', () => {

  let component: TestHoverComponent;
  let fixture: ComponentFixture<TestHoverComponent>;
  let directiveEl: DebugElement;
  let directiveInstance: PreloadOnOverDirective;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestHoverComponent, PreloadOnOverDirective],
      providers: [{provide: ElementRef, useClass: MockElementRef}, TriggerPreloadService]
    }).compileComponents();
    fixture = TestBed.createComponent(TestHoverComponent);
    component = fixture.componentInstance;
    directiveEl = fixture.debugElement.query(By.directive(PreloadOnOverDirective));
    directiveInstance = directiveEl.injector.get(PreloadOnOverDirective);
  });

  it('should create an instance', () => {
    expect(directiveInstance).toBeDefined();
  });

  it('should take the path from href if no path input is provided', () => {
    const routerPath =
      directiveEl.nativeElement?.attributes['ng-reflect-router-link']?.value ||
      directiveEl.nativeElement.getAttribute('href');
    expect(routerPath).toEqual('/example');
  });
});


@Component({
  template: `<a href="/example" appPreloadOnOver>Example link</a>`
})
class TestHoverComponent {
}
