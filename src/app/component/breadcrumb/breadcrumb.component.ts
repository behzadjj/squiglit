import { Params, ActivatedRoute, Router, NavigationEnd, PRIMARY_OUTLET } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { filter } from 'rxjs/operators';


interface IBreadcrumb {
  label: string;
  params: Params;
  url: string,
  urls: string
}

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss']
})
export class BreadcrumbComponent implements OnInit {

  public breadcrumbs: IBreadcrumb[];

  constructor(private activatedRoute: ActivatedRoute,
              private router: Router) {
    this.breadcrumbs = [];
  }

  ngOnInit() {
    const ROUTE_DATA_BREADCRUMB: string = 'breadcrumb';

    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)).subscribe(
      (event) => {
        let root: ActivatedRoute = this.activatedRoute.root;
        this.breadcrumbs = this.getBreadcrumbs(root);
      }
    );
  }

  route(url: string){
      if(url){
           this.router.navigateByUrl(url);
      }
  }

  private getBreadcrumbs(route: ActivatedRoute, url = '', breadcrumbs = []): IBreadcrumb[] {
    const ROUTE_DATA_BREADCRUMB: string = 'breadcrumb';

    let children: ActivatedRoute[] = route.children;

    if (children.length === 0) {
      return breadcrumbs;
    }


    for (let child of children) {

      if (child.outlet !== PRIMARY_OUTLET) {
        continue;
      }

      if (!child.snapshot.data.hasOwnProperty(ROUTE_DATA_BREADCRUMB)) {
        return this.getBreadcrumbs(child, url, breadcrumbs);
      }

      let routeUrl: string = child.snapshot.url.map(segment => segment.path).join('/');

      url += `/${routeUrl}`;

      let breadcrumb: IBreadcrumb = {
        label: child.snapshot.data[ROUTE_DATA_BREADCRUMB],
        params: child.snapshot.params,
        url: url,
        urls: child.snapshot.data['url']
      };

      breadcrumbs.push(breadcrumb);

      return this.getBreadcrumbs(child, url, breadcrumbs);
    }

  }

}
