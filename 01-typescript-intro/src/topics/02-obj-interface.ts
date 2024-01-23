export {}

//let skills : string[] = ['Bash', 'counter', 'Heal', true, 123];

const skills : string[] = ['Bash', 'counter', 'Heal'];


interface Character {
    name: string;
    hp: number;
    skills: string[];
    hometown?: string; //? es opcional
}

const strider: Character = 
{
    name: 'Strider',
    hp: 100,
    skills: ['Bash', 'Counter'],
}

strider.hometown = 'Ravenclaw';

console.table(strider);
