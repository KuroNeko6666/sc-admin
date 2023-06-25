import { Route } from "@angular/router";
import { DeviceDetailComponent } from "./device-detail/device-detail.component";
import { DeviceListComponent } from "./device-list/device-list.component";

export const ROUTES: Route[] = [
  {
    path: "list",
    title: "device list",
    loadComponent: () => import("./device-list/device-list.component").then(c => c.DeviceListComponent)
  },
  {
    path: "detail/:id",
    title: "device detail",
    loadComponent: () => import("./device-detail/device-detail.component").then(c => c.DeviceDetailComponent)
  },
  {
    path: "create",
    title: "device create",
    loadComponent: () => import("./device-add/device-add.component").then(c => c.DeviceAddComponent)
  },
  {
    path: "update/:id",
    title: "device create",
    loadComponent: () => import("./device-edit/device-edit.component").then(c => c.DeviceEditComponent)
  },
  {
    path: "",
    redirectTo: "list",
    pathMatch: "full"
  }
];
