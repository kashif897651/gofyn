import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import 'rxjs/add/operator/map';

@Injectable()

export class getData {
    
    constructor(private http: Http) { }

    fetchData(){
        var responseData=this.http.get('http://demo4126999.mockable.io/images')
    .map((res:Response)=>res.json());
    return responseData;
    }
}