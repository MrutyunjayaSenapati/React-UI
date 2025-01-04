    function Name(...args:any[]){
        let [id,name,stock]=args;
        console.log(`id=${id}\nname=${name}\nstock=${stock}`);
    }
    Name(1,'TV',true);