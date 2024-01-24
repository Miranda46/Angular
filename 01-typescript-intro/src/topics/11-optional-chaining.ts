
export interface Passenger {
    name:string;
    children?: string[];
}

const passenger1:Passenger = {
    name: 'COco',
    children: ['Cuernavac', 'lolancio']
}
 
const passenger2:Passenger = {
    name: 'Gandalf',
}

const printChildren = ( passenger: Passenger ): number => {

    const howManyChildren = passenger.children?.length || 0;
    // con ! se asegura de que nunca va a ser undefined. 
    // de lo contrario tira error. 
    // const howManyChildren = passenger.children!.length

    console.log(passenger.name, howManyChildren);
    return howManyChildren;
}

printChildren( passenger1 );
printChildren( passenger2 );


 
