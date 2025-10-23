import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { QuotesModule } from './quotes/quotes.module';
@Module({
  imports: [QuotesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
