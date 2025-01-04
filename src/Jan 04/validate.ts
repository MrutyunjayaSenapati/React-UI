function validate(success:Function,failure:Function):Function{
    let password:string="abc";
    if(password==="abc"){
        return success();
    }
    else{
        return failure();
    }
}
validate(function(){console.log(`Success`)},function(){console.log(`Invalid`)});