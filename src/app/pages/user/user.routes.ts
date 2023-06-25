import { Route } from "@angular/router";

export const ROUTES: Route[] = [
  {
    path: "list",
    title: "user list",
    loadComponent: () => import("./user-list/user-list.component").then(c => c.UserListComponent)
  },
  {
    path: "detail/:id",
    title: "user detail",
    loadComponent: () => import("./user-detail/user-detail.component").then(c => c.UserDetailComponent),
    loadChildren: () => import("./user-detail/user.routes").then(r => r.ROUTES)
  },
  {
    path: "create",
    title: "user create",
    loadComponent: () => import("./user-add/user-add.component").then(c => c.UserAddComponent)
  },
  {
    path: "update/:id",
    title: "user create",
    loadComponent: () => import("./user-update/user-update.component").then(c => c.UserUpdateComponent)
  },
  {
    path: "",
    redirectTo: "list",
    pathMatch: "full"
  }
];
