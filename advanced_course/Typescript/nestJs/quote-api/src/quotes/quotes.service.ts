import { Injectable } from '@nestjs/common';
import { QuotesRepository, Quote } from './quotes.repository';

@Injectable()
export class QuotesService {
  constructor(private readonly repo: QuotesRepository) {}

  getAll(): Quote[] {
    return this.repo.findAll();
  }

  getRandom(): Quote | null {
    return this.repo.findRandom();
  }

  searchByAuthor(author?: string): Quote[] {
    if (!author) return this.getAll();
    return this.repo.findByAuthor(author);
  }
}
