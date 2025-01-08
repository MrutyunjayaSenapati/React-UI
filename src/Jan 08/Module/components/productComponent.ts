import { ProductTemplate } from "../templates/productTemplate";

export class ProductComponent extends ProductTemplate{
   public Name:string="Samsung TV";
   public Price:number=40000;
    Qty=2;
    Total(){
        return this.Qty*this.Price;
    }
    Print(){
        console.log(`Name=${this.Name}\nPrice=${this.Price}\nQty=${this.Qty}\nTotal=${this.Total()}`);


    }

}