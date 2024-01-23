import { Minus, Plus, ShoppingCart } from "@phosphor-icons/react"
import { useEffect, useState } from "react"
import { api } from "../../lib/axios"

type Product = {
    id: number,
    type: string[]
    name: string
    description: string
    image_url: string
    price: number
}

export function ProductsList() {
    const [products, setProducts] = useState<Product[]>([])

    async function fecthProducts() {
        const response = await api.get('products')

        setProducts(response.data)
    }

    useEffect(() => {
        fecthProducts()
    }, [])

    return (
        <div className="w-screen max-w-[1220px] mx-auto my-[45px]">
            {products.length > 0 && (
                <h1 className="font-black font-baloo text-[32px] text-base-subtitle mb-16">Nossos Cafés</h1>
            )}

            <div className="grid grid-cols-4 gap-12">
                {products.map((product) => {
                    return (
                        <div
                            key={product.id}
                            className="
                                bg-base-card w-[236px] h-[310px] p-12 rounded-tl-md rounded-br-md rounded-tr-3xl rounded-bl-3xl
                                flex flex-col items-center text-center
                            " 
                        >
                            <img
                                className="-mt-20"
                                src={product.image_url} 
                                alt={product.name} 
                            />

                            <div className="flex flex-col gap-2">
                                <div className="w-full flex item-center justify-center gap-3 mt-3">
                                    {product.type.map((product_type) => {
                                        return (
                                            <div 
                                                className="bg-yellow-light text-yellow-dark px-2 py-1 rounded-full" 
                                                key={Math.random()}
                                            >
                                                <p className="text-[11px] uppercase font-bold">{product_type}</p>
                                            </div>
                                        )
                                    })}
                                </div>

                                <h1 className="text-[20px] font-baloo font-bold text-base-subtitle">{product.name}</h1>
                                <p className="text-[14px] text-base-label">{product.description}</p>

                                <div className="flex items-center justify-center gap-4 mt-12">
                                    <p className="font-black font-baloo text-base-text text-xl">
                                        {product.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
                                    </p>

                                    <div className="flex items-center gap-2">
                                        <div className="flex items-center gap-3 bg-base-button p-2 rounded-md">
                                            <button>
                                                <Minus size={16} className="text-purple hover:text-purple-dark" />
                                            </button>
                                            1
                                            <button className="hover:text-purple-dark">
                                                <Plus size={16} className="text-purple hover:text-purple-dark" />
                                            </button>
                                        </div>
                                        <button className="bg-purple-dark hover:bg-purple transition-all p-2 rounded-md">
                                            <ShoppingCart size={22} weight="fill" className="text-white" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}