import { Component, OnInit,Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FieldModel } from '../../FieldModel';
import { FormModel } from '../../FormModel';


@Component({
  selector: 'app-dynamic-form-helper',
  templateUrl: './dynamic-form-helper.component.html',
  styleUrls: ['./dynamic-form-helper.component.css']
})
export class DynamicFormHelperComponent implements OnInit {
  @Input() field : any;
  @Input() form : FormGroup;

  constructor() { } 

  ngOnInit() {
  }
  get isValid() { 
    return this.form.controls[this.field.key].valid; 
  }

  isFormGroup(f){
    return f instanceof FormModel;
  }
}
