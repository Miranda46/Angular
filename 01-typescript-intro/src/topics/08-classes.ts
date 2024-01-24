export class Person{
    public name: string;
    private address: string;

    constructor(name: string, address: string = 'palmacaoba') {
        this.name = name;
        this.address = address;
    }
}

// export class Hero extends Person {
//     constructor(
//         public alterEgo:string,s
//         public realName:string
//     ) {
//     super(realName, 'Pangea')
//     }

// }

export class Hero{

    public person: Person;

    constructor(
        public alterEgo:string,
        public age:number,
        public realName:string,
        person: Person
    ) {
        this.person = new Person(realName);
    }
}

const bruce = new Person("Bruce")

const batman = new Hero( 'batman', 50, 'Bruce', bruce);

console.log(batman) 