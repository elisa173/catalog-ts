export function formatPrice(price: number, currency:string = "FCFA"): string {
    return `${price} ${currency}`;
}

export function sum(...values: number[]): number {
    return values.reduce((total, curr) => total + curr, 0);
}
