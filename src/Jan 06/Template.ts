export interface IProduct{
    Name:string;
    Price:number;
    Total():number;
    Print():void;
}
abstract class ProductTemplate implements IProduct{
    public Name:string="M";
    public Price:number=0;
    public Qty:number=0;
    abstract Total():number;
    abstract Print():void;
}
class ProductComponent extends ProductTemplate{
    Name="Samsung TV";
    Price=70000;
    Qty=2;
    Total(): number {
        return this.Qty*this.Price;
    }
    Print(): void {
        console.log(`Name=${this.Name}\nPrice=${this.Price}\nQty=${this.Qty}\nTotal=${this.Total()}`);
    }
}
let objj=new ProductComponent();
objj.Print();