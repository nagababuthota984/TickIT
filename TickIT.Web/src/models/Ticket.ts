import { Category, Priority, Status } from "./enums";

export class Ticket{
    id:string;
    name?:string;
    description:string;
    status:Status;
    category:Category;
    priority:Priority;
    dateCreated:string;

constructor(args: any) {
    this.id = args.id;
    this.name = args.name;
    this.description = args.description;
    this.status = args.status;
    this.category = args.category;
    this.priority = args.priority;
    this.dateCreated = args.dateCreated;
}
}

