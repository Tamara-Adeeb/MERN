class card{
    constructor(name,cost){
        this.name =name;
        this.cost = cost;
    }
}

class Unit extends card {
    constructor(name,cost,power,resilience){
        super(name,cost);
        this.power = power;
        this.resilience = resilience;
    }
    attack(target){
        target.resilience -= this.power;
        if(target.resilience <= 0 ){
            console.log("You died!");
        }
    }
}

class Effect extends card {
    constructor(name,cost,text,stat,magnitude){
        super(name,cost);
        this.text = text;
        this.stat = stat;
        this.magnitude = magnitude;
    }
    play(target){
        if(this.stat == "resilience"){
        target.resilience = target.resilience + this.magnitude;
        }
        if(this.stat == "power"){
            target.power = target.power + this.magnitude;
        }
    }
}

const RedBeltNinja = new Unit("Red Belt Ninja", 3,3,4);
const BlackBeltNinja = new Unit("Black Belt Ninja", 4,5,4);

const HardAlgorithm = new Effect("Hard Algorithm",2,"increase target's resilience by 3","resilience", 3);

BlackBeltNinja.attack(RedBeltNinja);

