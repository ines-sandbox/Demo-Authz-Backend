import { Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class DebugAuthGuard extends AuthGuard('jwt') {
  handleRequest(
    ...args: Parameters<
      InstanceType<ReturnType<typeof AuthGuard>>['handleRequest']
    >
  ) {
    console.log(args);
    return super.handleRequest(...args);
  }
}
