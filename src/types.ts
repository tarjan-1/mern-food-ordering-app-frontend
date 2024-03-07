export type User = {
    _id: string,
    name: string,
    email: string,
    city: string,
    country: string,
    addressLine1: string,
}

export type MenuItem = {
    _id: string;
    name: string;
    price: number;
}

export type Restaurant = {
    _id: string,
    user: string,
    restaurant_name: string,
    city: string,
    country: string,
    delivaryPrice: number,
    estimatedDelivaryTime: number,
    cuisine: string[],
    menuItems: MenuItem[];
    imageUrl: string,
    lastUpdated: string 
}