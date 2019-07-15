import { Component } from '@angular/core';
import { JSONFormService } from './jsonform.service';
import { FieldModel } from './FieldModel';
import { FormModel } from './FormModel';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CustomFormMaker';
  index : number=0;
  formModel : FormModel;

  constructor(private jsonFormService : JSONFormService){
    this.formModel = new FormModel(this.jsonFormService.getJSONForm(this.index));
  }
  
}


