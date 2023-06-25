import { Routes } from '@angular/router';
import { authGuard, noAuthGuard } from './core/guard';

export const routes: Routes = [
  {
    path: "dashboard",
    loadComponent: () => import("./pages/dashboard/dashboard.component").then(c => c.DashboardComponent),
    canActivate: [authGuard],
  },
  {
    path: "admin",
    loadComponent: () => import("./pages/admin/admin.component").then(c => c.AdminComponent),
    loadChildren: () => import("./pages/admin/admin.routes").then(r => r.ROUTES),
    canActivate: [authGuard],
  },
  {
    path: "user",
    loadComponent: () => import("./pages/user/user.component").then(c => c.UserComponent),
    loadChildren: () => import("./pages/user/user.routes").then(r => r.ROUTES),
    canActivate: [authGuard],
  },
  {
    path: "device",
    loadComponent: () => import("./pages/device/device.component").then(c => c.DeviceComponent),
    loadChildren: () => import("./pages/device/device.routes").then(r => r.ROUTES),
    canActivate: [authGuard],
  },
  {
    path: "order",
    loadComponent: () => import("./pages/order/order.component").then(c => c.OrderComponent),
    loadChildren: () => import("./pages/order/order.routes").then(r => r.ROUTES),
    canActivate: [authGuard],
  },
  {
    path: "login",
    loadComponent: () => import("./pages/login/login.component").then(c => c.LoginComponent),
    canActivate: [noAuthGuard],
  },
  {
    path: "forgot",
    loadComponent: () => import("./pages/forgot/forgot.component").then(c => c.ForgotComponent),
  },
  {
    path: "",
    redirectTo: "login",
    pathMatch: "full"
  }
];
