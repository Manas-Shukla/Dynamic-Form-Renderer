export class FormModel{
    label : string;
    style : object;
    id : number;
    fields : any[];

    constructor(obj:{
        label : string;
        style : object;
        id : number;
        fields : any[];
    }){
        this.label = obj.label;
        this.style = JSON.parse(JSON.stringify(obj.style));
        this.id = obj.id;
        this.fields = JSON.parse(JSON.stringify(obj.fields));
    }
}