import { Injectable, Logger, NestMiddleware } from '@nestjs/common';
import { NextFunction } from 'express';
import { Agent } from 'https';

@Injectable()
export class LogMiddlewareMiddleware implements NestMiddleware {
  private readonly logger = new Logger('HTTP');
  use(req: any, res: any, next: NextFunction) {
    const { method, originalUrl, ip } = req;
    const userAgent = req.get('user-agent') || 'tidak diketahui';
    const startTime = Date.now();

    //jika sudah finish
    res.on('finish', () => {
      //status code, berhasil atau tidak
      const { statusCode } = req;

      //durasi
      const duration = Date.now() - startTime;

      //tentukan pesannya
      const logMessaage = `
        ${method}
        ${originalUrl}
        --
        Status: ${statusCode} (${duration}ms)
        --
        Durasi: ${duration}ms
        --
        IP Address: ${ip}
        --
        Agent: ${userAgent}
      `;

      if (statusCode >= 500) {
        this.logger.error(logMessaage);
      } else if (statusCode >= 400) {
        this.logger.warn(logMessaage);
      } else {
        this.logger.log(logMessaage);
      }


    })

    next();
  }
}
