function classDecorator<T extends { new (...args:any[]): {} }>(
    constructor: T
){
    return class extends constructor {
        newProperty = 'New Prp';
        hello = 'Override'
    }
}

@classDecorator
export class SuperClass{
    public myProperty: string = 'Abc123';
    print() {
        console.log('Hola Mundo')
    }
}