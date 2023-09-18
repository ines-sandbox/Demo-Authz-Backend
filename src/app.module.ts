import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthzModule } from './authz/authz.module';
import { TestItemModule } from './test-item/test-item.module';

@Module({
  imports: [AuthzModule, TestItemModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
