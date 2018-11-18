import {NavigationExtras, UrlTree} from '@angular/router';

export class RouterStub {
  url = '';
  navigateByUrl(url: string | UrlTree, extras?: NavigationExtras) { }
}
