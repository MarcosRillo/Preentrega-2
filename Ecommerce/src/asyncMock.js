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
    {
        id: '4',
        name: 'Pechuga de Pollo a la Parrilla',
        price: 9500,
        category: 'principales',
        img: pictures.pechugaImg,
        stock: 8,
        description: 'Pechuga de pollo a la parrilla con salsa de hierbas'
    },
    {
        id: '5',
        name: 'Canelones de Carne',
        price: 8000,
        category: 'principales',
        img: pictures.canelonesImg,
        stock: 10,
        description: 'Canelones rellenos de carne con salsa de tomate y queso'
    },
    {
        id: '6',
        name: 'Lomo a la Mostaza',
        price: 12000,
        category: 'principales',
        img: pictures.lomoMostazaImg,
        stock: 7,
        description: 'Lomo con salsa de mostaza y acompañamiento de papas al horno'
    },
    {
        id: '7',
        name: 'Ensalada de Pollo Caesar',
        price: 9000,
        category: 'principales',
        img: pictures.ensaladaImg,
        stock: 12,
        description: 'Ensalada fresca con pollo a la parrilla y aderezo Caesar'
    },
    {
        id: '8',
        name: 'Spaghetti Bolognese',
        price: 8500,
        category: 'principales',
        img: pictures.spaghettiImg,
        stock: 9,
        description: 'Spaghetti con salsa boloñesa y queso parmesano'
    },
    {
        id: '9',
        name: 'Bruschetta Caprese',
        price: 6500,
        category: 'entradas',
        img: pictures.bruschettaImg,
        stock: 15,
        description: 'Pan tostado con tomate, mozzarella y albahaca'
    },
    {
        id: '10',
        name: 'Empanadas de Queso y Jamón',
        price: 7500,
        category: 'entradas',
        img: pictures.empanadasImg,
        stock: 20,
        description: 'Empanadas rellenas de queso y jamón'
    },
    {
        id: '11',
        name: 'Carpaccio de Res',
        price: 9800,
        category: 'entradas',
        img: pictures.carpaccioImg,
        stock: 12,
        description: 'Finas láminas de res marinadas con aceite de oliva y parmesano'
    },
    {
        id: '12',
        name: 'Palitos de Mozzarella',
        price: 7200,
        category: 'entradas',
        img: pictures.palitosImg,
        stock: 18,
        description: 'Palitos de mozzarella empanizados con salsa de tomate'
    },
    {
        id: '13',
        name: 'Aguacate Relleno de Cangrejo',
        price: 8900,
        category: 'entradas',
        img: pictures.aguacateImg,
        stock: 10,
        description: 'Aguacate relleno de carne de cangrejo y aderezo especial'
    },
    {
        id: '14',
        name: 'Tartar de Atún',
        price: 11000,
        category: 'entradas',
        img: pictures.tartarImg,
        stock: 8,
        description: 'Tartar fresco de atún con aguacate y salsa de soja'
    },
    {
        id: '15',
        name: 'Sopa de Calabaza',
        price: 6800,
        category: 'entradas',
        img: pictures.sopaImg,
        stock: 14,
        description: 'Sopa cremosa de calabaza con crutones'
    },
    {
        id: '16',
        name: 'Quesadillas de Pollo',
        price: 8200,
        category: 'entradas',
        img: pictures.quesadillasImg,
        stock: 16,
        description: 'Quesadillas rellenas de pollo y queso derretido'
    },
    {
        id: '17',
        name: 'Margarita de Fresa',
        price: 9500,
        category: 'bebidas',
        img: pictures.margaritaImg,
        stock: 20,
        description: 'Cóctel refrescante de margarita con sabor a fresa'
    },
    {
        id: '18',
        name: 'Café Frappé',
        price: 7800,
        category: 'bebidas',
        img: pictures.cafeImg,
        stock: 15,
        description: 'Café helado con crema y jarabe de vainilla'
    },
    {
        id: '19',
        name: 'Limonada de Mango',
        price: 7200,
        category: 'bebidas',
        img: pictures.limonadaImg,
        stock: 18,
        description: 'Limonada refrescante con un toque de mango'
    },
    {
        id: '20',
        name: 'Smoothie de Frutas',
        price: 8500,
        category: 'bebidas',
        img: pictures.smoothieImg,
        stock: 12,
        description: 'Batido suave de frutas frescas y yogur'
    },
    {
        id: '21',
        name: 'Agua Mineral con Gas',
        price: 5000,
        category: 'bebidas',
        img: pictures.sodaImg,
        stock: 25,
        description: 'Agua mineral con gas, perfecta para acompañar la comida'
    },
    {
        id: '22',
        name: 'Té Helado de Durazno',
        price: 6800,
        category: 'bebidas',
        img: pictures.teImg,
        stock: 14,
        description: 'Té helado con sabor a durazno, endulzado y servido con hielo'
    },
    {
        id: '23',
        name: 'Cerveza Artesanal',
        price: 9000,
        category: 'bebidas',
        img: pictures.cervezaImg,
        stock: 10,
        description: 'Cerveza artesanal de la casa, elaborada con ingredientes seleccionados'
    },
    {
        id: '24',
        name: 'Zumo de Naranja Fresco',
        price: 7500,
        category: 'bebidas',
        img: pictures.zumoImg,
        stock: 16,
        description: 'Zumo de naranja recién exprimido, natural y lleno de vitaminas'
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

export const getProductsByCategory = (productCategory) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(platos.filter(prod => prod.category === productCategory))
        }, 500);
    })
}