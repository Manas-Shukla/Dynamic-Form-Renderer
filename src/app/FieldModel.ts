export class FieldModel{
    controlType : string;
    type : string;
    value : string;
    key : string;
    label : string;
    id : number;
    style : object;
    options : any;
    validations : string[];

    constructor(obj:{
        controlType : string;
        type : string;
        value : string;
        key : string;
        label : string;
        id : number;
        style : object;
        options : any;
        validations : string[];
    }){
        this.controlType = obj.controlType;
        this.type = obj.type;
        this.value = obj.value;
        this.key = obj.key;
        this.label = obj.label;
        this.id = obj.id;
        this.style = JSON.parse(JSON.stringify(obj.style));
        this.options = JSON.parse(JSON.stringify(obj.options));
        this.validations = JSON.parse(JSON.stringify(obj.validations));
    }
}