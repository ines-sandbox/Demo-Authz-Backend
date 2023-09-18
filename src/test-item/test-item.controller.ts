import { Controller, Get, UseGuards } from '@nestjs/common';

import { Permissions } from '../permissions.decorator';
import { PermissionsGuard } from '../permissions.guard';
import { DebugAuthGuard } from 'src/authz/DebugAuth.guard';

@Controller('dummy')
@UseGuards(DebugAuthGuard, PermissionsGuard)
export class TestItemController {
  @Get()
  withoutLogin() {
    return console.log('without login');
  }

  @Get('/login')
  @Permissions('update:items')
  withLogin() {
    return console.log('with login');
  }
}
