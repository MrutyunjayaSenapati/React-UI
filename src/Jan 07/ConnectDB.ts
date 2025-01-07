    interface IMongodb{
        url:string;
    }
    interface IMysql{
        Host:string;
        UserName:string;
        Password:string;
    }
    class Database<T>{
        public conectionString:T|null=null;
        public  Print():void{
            for(let property in this.conectionString){
                console.log(`${property} :: ${this.conectionString[property]}`);
            }
        }
    }
    let mongo=new Database<IMongodb>();
    mongo.conectionString={url:"127.0.0.1:27017"};
    mongo.Print();

    let mysql=new Database<IMysql>();
    mysql.conectionString={Host:"MrNobody",UserName:"G007",Password:"404"};
    mysql.Print();
