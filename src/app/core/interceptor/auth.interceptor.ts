import { HttpInterceptorFn, HttpResponse } from "@angular/common/http";
import { tap } from "rxjs";

export const authInterceptor: HttpInterceptorFn = (req, next) => {

    req = req.clone({
      withCredentials: true
    })

return next(req)
}
