export interface productContract{
    Name:string;
    Price:number;
    Qty:number;
    Total():number;
    Print():void;
}