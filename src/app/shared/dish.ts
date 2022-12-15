import { Comment } from './comment';

export class Dish {
    id:  string="";
    name: string="";
    image: string="";
    category: string="";
    featured: boolean=true;
    label: string="";
    price: string="";
    description: string="";
    comments: Comment[] | undefined;

}