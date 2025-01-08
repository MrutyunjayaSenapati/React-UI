import { productContract } from "../contracts/productContract";

export abstract class ProductTemplate implements productContract{
    public Name="";
    public Price=0;
    public Qty=0;
    public abstract Total(): number;
    public abstract Print(): void;
}