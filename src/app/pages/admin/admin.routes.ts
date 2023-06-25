import { Route } from "@angular/router";

export const ROUTES: Route[] = [
  {
    path: "list",
    title: "admin list",
    loadComponent: () => import("./admin-list/admin-list.component").then(c => c.AdminListComponent)
  },
  {
    path: "detail/:id",
    title: "admin detail",
    loadComponent: () => import("./admin-detail/admin-detail.component").then(c => c.AdminDetailComponent)
  },
  {
    path: "create",
    title: "admin create",
    loadComponent: () => import("./admin-add/admin-add.component").then(c => c.AdminAddComponent)
  },
  {
    path: "update/:id",
    title: "admin create",
    loadComponent: () => import("./admin-update/admin-update.component").then(c => c.AdminUpdateComponent)
  },
  {
    path: "",
    redirectTo: "list",
    pathMatch: "full"
  }
];
