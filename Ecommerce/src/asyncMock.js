import pictures from './assets/imagenes'

const platos = [
    {
        id: '1',
        name: 'Salmon la Caballeriza',
        price: 14000,
        category: 'principales',
        img: pictures.salmonImg,
        stock: 10,
        description: 'Salmon con arroz emperador y vegetales asados'
    },
    {
        id: '2',
        name: 'Bife de lomo',
        price: 11000,
        category: 'principales',
        img: pictures.lomoImg,
        stock: 12,
        description: 'Lomo lardeado con pure de boniato'
    },
    {
        id: '3',
        name: 'Risotto de Hongos',
        price: 7000,
        category: 'principales',
        img: pictures.risottoImg,
        stock: 15,
        description: 'Risotto con hongos de pino'
    },
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(platos)
        }, 500);
    })
}

export const getProductsById = (productId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(platos.find(prod => prod.id === productId))
        }, 500);
    })
}