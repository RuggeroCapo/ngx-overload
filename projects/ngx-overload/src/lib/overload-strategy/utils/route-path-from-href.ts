export function getHrefFromElement(nativeElement: Element): string {
  return (
    nativeElement.getAttribute('ng-reflect-router-link') ||
    nativeElement.getAttribute('href') ||
    ''
  );
}
