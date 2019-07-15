import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FieldModel } from '../FieldModel';
import { FormModel } from '../FormModel';


@Injectable({
  providedIn: 'root'
})
export class MakeFormService {

  constructor() { }

  toFormGroup(fields:any[]){
    let group : any = {};
    fields.forEach(field => {
      group[field.key] = field.validations.includes('required') ? 
                                        new FormControl(field.value,Validators.required)
                                        : new FormControl(field.value);
    });
    return new FormGroup(group);
  }

}
