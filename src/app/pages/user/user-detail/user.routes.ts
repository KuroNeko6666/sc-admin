import { Route } from "@angular/router";

export const ROUTES: Route[] = [
  {
    path: "",
    title: "user detail",
    loadComponent: () => import("./user-detail.component").then(c => c.UserDetailComponent)
  },
  {
    path: "create",
    title: "user detail",
    loadComponent: () => import("./user-device-create/user-device-create.component").then(c => c.UserDeviceCreateComponent)
  },
  {
    path: "",
    redirectTo: "list",
    pathMatch: "full"
  }
];
