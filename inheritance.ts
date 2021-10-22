 class Person {
     name: string;
     constructor(name: string){
         this.name = name;
     }

    dance(){
        console.log(this.name + " is dancing");
    }
}

var bran = new Person("Santy");
bran.dance();

class AwesomPerson extends Person {
    dance(){
        super.dance();
        console.log("SO AWESOME!");
        
    }
}

var jaz = new AwesomPerson("Jaz");
jaz.dance();



