import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from '@nestjs/common';
import { map, Observable } from 'rxjs';

//definisikan formatnya terlebih dahulu
export interface StandardResponse<T> {
  success: boolean;
  statusCode: number;
  message: string;
  data: T | null;
}

@Injectable()
export class TransformResponseInterceptor<T> implements NestInterceptor<T, StandardResponse<T>> {
  intercept(context: ExecutionContext, next: CallHandler): Observable<StandardResponse<T>> {
    //update content
    const httpContext = context.switchToHttp();
    const response = httpContext.getResponse();
    const statusCode = response.statusCode;

    return next.handle().pipe(
      map((OriginalData: T): StandardResponse<T> => ({
        success: true,
        message: 'Data Berhasil diambil',
        statusCode: statusCode,
        data: OriginalData ?? null,
      })),
    );
  }
}