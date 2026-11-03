import {CallHandler, ExecutionContext, Injectable, NestInterceptor,} from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

// Buat dulu response
export interface Response<T> {
  data: T | null;
  statusCode: number;
  message: string;
  success: boolean;
}

@Injectable()
export class TransformResponseInterceptor
  implements NestInterceptor {

  intercept(
    context: ExecutionContext,
    next: CallHandler,
  ): Observable<Response<unknown>> {

    const httpContext = context.switchToHttp();
    const response = httpContext.getResponse();
    const statusCode = response.statusCode;

    return next.handle().pipe(
      map((data: unknown) => {
        return {
          data: data ?? null,
          statusCode: statusCode,
          message: 'Request berhasil',
          success: true,
        };
      }),
    );
  }
}
