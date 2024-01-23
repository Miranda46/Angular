export interface Product {
    description: string,
    price: number,

}

const phone: Product = {
    description: 'Nokia A1',
    price: 150.0
}

const tablet: Product = {
    description: 'iPad Air',
    price: 250.0
}

interface TaxCalculationOptions{
    tax: number;
    products: Product[];
}



export function taxCalculation( options: TaxCalculationOptions ): number[] {
    const { products, tax} = options
    let total = 0;
    products.forEach( product => {
        total += product.price;
    })

    return [total, total * tax];
}


export function taxCalculation2( options: TaxCalculationOptions ): [number, number] {
    let total = 0;
    options.products.forEach( ({ price }) => {
        total += price;
    })

    return [total, total * options.tax];
}



// const [ art1, art2 ] = [phone, tablet];
const shoppingCart = [phone, tablet];
const tax = 0.19;


const [resultProduct, resultTax] = taxCalculation({
    products: shoppingCart,
    tax
});



console.log('Total', resultProduct);
console.log('Tax:', resultTax);

