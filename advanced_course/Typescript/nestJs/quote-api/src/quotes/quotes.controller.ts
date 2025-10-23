import { Controller, Get, Query } from '@nestjs/common';
import { QuotesService } from './quotes.service';

@Controller('quotes')
export class QuotesController {
  constructor(private readonly quotesService: QuotesService) {}

  // GET /quotes -> returns all quotes or filters by ?author=
  @Get()
  findAll(@Query('author') author?: string) {
    return this.quotesService.searchByAuthor(author);
  }

  // GET /quotes/random -> returns a random quote
  @Get('random')
  random() {
    return this.quotesService.getRandom();
  }
}
