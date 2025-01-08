///<reference path="../contracts/productContract.ts" />

namespace Project {
    export namespace Templates {
        export abstract class ProductTemplate implements project.productContract {
            public Name = "";
            public Price = 0;
            public Qty = 0;

            public abstract Total(): number;
            public abstract Print(): void;
        }
    }
}
