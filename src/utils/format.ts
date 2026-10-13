export function formatPrice(price: number, currency:string = "FCFA"): string {
    return `${price} ${currency}`;
}

export function sum(...values: number[]): number {
    return values.reduce((total, curr) => total + curr, 0);
}

export function average(...values: number[]): number {
    if (values.length === 0) {
        return 0;
    }
    const total = sum(...values);
    return total / values.length;
}