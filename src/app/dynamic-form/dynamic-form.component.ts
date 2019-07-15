import { Component, OnInit,Input } from '@angular/core';
import { MakeFormService } from './make-form.service';
import { FormGroup } from '@angular/forms';
import { FieldModel } from '../FieldModel';
import { FormModel } from '../FormModel';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.css']
})
export class DynamicFormComponent implements OnInit {
  

  @Input() formModel : FormModel;
  form : FormGroup;
  payLoad = '';

  constructor(private makeFormService : MakeFormService) { }

  ngOnInit() {
    this.form = this.makeFormService.toFormGroup(this.formModel.fields);
  }

  onSubmit() {
    this.payLoad = JSON.stringify(this.form.value);
  }

}
