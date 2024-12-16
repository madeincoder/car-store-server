import { Date } from "mongoose";

export interface ICar {
  brand: string;
  model: string;
  year: Date;
  price: number;
  category: string;
  description: string;
  quantity: number;
  inStock: boolean;
}
