import { Route } from "@angular/router";

export const ROUTES: Route[] = [
  {
    path: "list",
    title: "order list",
    loadComponent: () => import("./order-list/order-list.component").then(c => c.OrderListComponent)
  },
  {
    path: "detail/:id",
    title: "order detail",
    loadComponent: () => import("./order-detail/order-detail.component").then(c => c.OrderDetailComponent)
  },
  {
    path: "",
    redirectTo: "list",
    pathMatch: "full"
  }
];
