// src/book/interfaces/book.interface.ts
export interface Book {
    name: string;
    author: string;
    price: number;
    stock: number;
    noOfSell: number;
    archive: boolean;
    subject: string;
    image?: string; // Optional, since image might not always be available
  }
  