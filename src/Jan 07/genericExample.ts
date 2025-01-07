
export interface IProduct{
    Name:string;
    Price:number;
}
function printData<T>(data:T):T{
    return data;
}

 let product=printData<IProduct>({Name:"TV",Price:34000});
// console.log(product);

let product1=printData<IProduct[]>([{Name:"Samsung TV",Price:34000},{Name:"LG TV",Price:43000}]);
console.log(product1[0].Name);
