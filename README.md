# ngx-overload

[![Codacy Badge](https://api.codacy.com/project/badge/Grade/bb364a22d5f844d2a0c69d6414c8ab86)](https://app.codacy.com/manual/RuggeroCapo/ngx-overload?utm_source=github.com&utm_medium=referral&utm_content=RuggeroCapo/ngx-overload&utm_campaign=Badge_Grade_Dashboard)

> Faster page-loads by prefetching lazy modules when mouse is over a link a link

## How it works

NGX-Overload attempts to make navigations to pages load faster. It:

* **Detect angular router links**
* **Checks if the user isn't on a slow connection** (using `navigator.connection.effectiveType`) or has data-saver enabled (using `navigator.connection.saveData`) **TODO**
* **Prevent unnecessary loading using a customizable debounce stategy**

## Why

This project aims to be a simple solution to improve performance for lazy loaded module in Angular

### Installation

The library is created with [Angular v9](https://angular.io/)
To install simply run

```sh
npm install ngx-overload
```

### Usage
Once installed follow these step for a quickstart
1. Import the OverloadStrategyModule
``` typescript
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    ...
    AppRoutingModule,
    ...
    OverloadStrategyModule],
    providers: [],
    bootstrap: [AppComponent]
})
```
2. Define the ngx overload strategy in the lazy-router module
``` typescript
    RouterModule.forRoot(appRoutes, {
      preloadingStrategy: OverloadStrategy,
    })
```
3. Add the ngxPreloadOnOver directive to the navigation links 
```html
<a [routerLink]="'example'" appPreloadOnOver>Example link</a>
```
For example, you can initialize after the `load` event fires:

```html
<script>
window.addEventListener('load', () =>{
  quicklink.listen();
});
</script>
```

## Inputs

### customPath

The path for the route to be loaded is automatically retrived using the angular routerLink but can be also defined using this input

#### debounceTime
Type: `number`<br>
Default: `100`

Wait n seconds before trigger the prefetch

## Version Support

This library was generated with Angular CLI version 9.1.1. 

## Demo

## Contributing

Want to contribute to Web API Confluence? Great!

### Filing issues and contributing code

Please use GitHub’s issue tracker and pull request features.

### Running locally

1. Clone this repository.

2. Install: `npm install`

> test: `ng test ngx-overload`

> serve: `ng serve`

> build: `ng build ngx-overload`

## License

Licensed under the GPL-3.0 license.
