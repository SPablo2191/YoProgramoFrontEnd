import { of } from "rxjs";

export class baseService{
    items! : any[];
    get(){
        console.log(this.items);
        
        return of(this.items);
    }
    post(){}
    put(){}
    delete(){}
}