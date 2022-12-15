import { truncate } from "fs/promises";

export class Promotion {
    id: string="";
    name: string="";
    image: string="";
    label: string="";
    price: string="";
    featured: boolean=true;
    description: string="";
}