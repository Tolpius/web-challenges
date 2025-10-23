import { Injectable } from '@nestjs/common';
import { QUOTES } from './quotes.data';

export interface Quote {
  id: string;
  quote: string;
  author: string;
}

@Injectable()
export class QuotesRepository {
  private quotes = QUOTES as Quote[];

  findAll(): Quote[] {
    // return shallow copy to avoid external mutation
    return [...this.quotes];
  }

  findById(id: string): Quote | undefined {
    return this.quotes.find((q) => q.id === id);
  }

  findRandom(): Quote | null {
    if (!this.quotes.length) return null;
    const idx = Math.floor(Math.random() * this.quotes.length);
    return this.quotes[idx];
  }

  findByAuthor(author: string): Quote[] {
    const needle = author.trim().toLowerCase();
    return this.quotes.filter((q) => q.author.toLowerCase().includes(needle));
  }
}
