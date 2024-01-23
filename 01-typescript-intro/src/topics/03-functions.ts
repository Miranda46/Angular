export {};

function addNumber(a:number, b:number):number {
    return a+b;
}

const addNumber2 = (a:number, b:number):string => {
    return `${ a + b }`;
}

function multiply(a:number,b?:number,base:number = 2):number {
    return a * base;
}


const result: number = addNumber(1,2);
const result2: string = addNumber2(1,2);
const result3: number = multiply(5);


interface Character{
    hp: number;
    //skills: string[];
    name:string;
    showHp: () => void;
}

const healCharacter = (character : Character, amount : number) => {

    character.hp += amount;
}

const strider : Character = {
    name: 'Strider',
    hp:50,
    showHp() {
        console.log(`Puntos de vida ${this.hp}`);
    }
}

healCharacter(strider, 20);
strider.showHp() ;

console.log({result, result2, result3});
