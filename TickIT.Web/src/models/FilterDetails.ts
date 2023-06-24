import { Status,Category,Priority } from "./enums";

export class FilterDetails {
    status: Status;
    category: Category;
    priority: Priority;
    constructor(status:Status, category:Category, priority:Priority) {
        this.status = status;
        this.category = category;
        this.priority = priority;
    }
}