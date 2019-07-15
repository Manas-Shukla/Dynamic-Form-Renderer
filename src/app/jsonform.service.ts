import { Injectable } from '@angular/core';
import { FormModel } from './FormModel';
import { FieldModel } from './FieldModel';

@Injectable({
  providedIn: 'root'
})
export class JSONFormService {
  formArray : FormModel[];

  constructor() { }

  getJSONForm(index : number){
    this.formArray =[
      new FormModel({
        label : 'Profile Form',
        style : {},
        id : 0,
        fields : [
          new FieldModel({
        
            controlType : 'textbox',
            type : 'text',
            key: 'firstName',
            label: 'First name',
            value: 'Bombasto',
            id : 1,
            style : {},
            options : null,
            validations:['required']
            
          }),
      
          new FieldModel({
            
            controlType : 'dropdown',
            type : 'type',
            key: 'brave',
            label: 'Bravery Rating',
            value: '',
            id : 2,
            style : {},
            options : [
              {key: 'solid',  value: 'Solid'},
              {key: 'great',  value: 'Great'},
              {key: 'good',   value: 'Good'},
              {key: 'unproven', value: 'Unproven'}
            ],
            validations:[]
          })
        ]
      })
      
    ];
    console.log(this.formArray[index]);
    return JSON.parse(JSON.stringify(this.formArray[index]));
  }
}
