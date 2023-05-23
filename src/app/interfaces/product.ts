export interface IProduct {
    _id: string | number,
    name: string,
    img: string,
    price: number,
    text: string,
    check: boolean
}

export interface IProducts {
    id?: number,
    img: string,
    name: string,
    price: number,
    priceOriginal?: number,
}