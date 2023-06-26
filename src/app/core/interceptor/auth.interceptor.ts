import { HttpHandler, HttpHeaders, HttpInterceptorFn, HttpResponse } from "@angular/common/http";
import { inject } from "@angular/core";
import { tap } from "rxjs";
import { AuthService } from "../services";

export const authInterceptor: HttpInterceptorFn = (req, next) => {

  let service = inject(AuthService)
  let headers: HttpHeaders = new HttpHeaders().set("Authorization", "Bearer " + (service.token ?? ''))
  req = req.clone({
    withCredentials: true,
    headers: headers
  })

  return next(req)
}
