import { Minus, Plus, Trash } from '@phosphor-icons/react'
import { Link } from 'react-router-dom'
import productImg from '../../assets/Americano.png'

export function SelectedProducts() {
    return (
        <div className="w-[448px]">
            <h1 className="font-baloo font-bold text-[18px]">Cafés selecionados</h1>

            <div 
                className="
                    h-[500px] flex flex-col items-center bg-base-card mt-4 px-10
                    rounded-tr-[44px] rounded-bl-[44px] rounded-tl-md rounded-br-md
                "
            >
               <div className="w-full flex-1 flex flex-col">
                    <div className="w-full flex-1 flex flex-row items-start justify-between mt-8 border-b-[1px]">
                        <div className="flex flex-row items-center gap-4">
                            <img src={productImg} className="w-[64px] h-[64px]" />

                            <div className="space-y-2">
                                <span>Expresso Tradicional</span>

                                <div className="flex items-center gap-2">
                                    <div className="flex items-center gap-3 bg-base-button p-[5px] rounded-md">
                                        <button>
                                            <Minus size={16} className="text-purple hover:text-purple-dark" />
                                        </button>
                                        1
                                        <button className="hover:text-purple-dark">
                                            <Plus size={16} className="text-purple hover:text-purple-dark" />
                                        </button>
                                    </div>
                                    <button className="flex items-center justify-center space-x-1 bg-base-button hover:bg-base-hover transition-all p-2 rounded-md">
                                        <Trash size={18} className="text-purple" />
                                        <span className="uppercase text-[12px]">remover</span>
                                    </button>
                                </div>
                            </div>
                        </div>

                        <span className="font-semibold">R$ 9,90</span>
                    </div>

                    <div className="w-full flex-1 flex flex-row items-start justify-between mt-8">
                        <div className="flex flex-row items-center gap-4">
                            <img src={productImg} className="w-[64px] h-[64px]" />

                            <div className="space-y-2">
                                <span>Expresso Tradicional</span>

                                <div className="flex items-center gap-2">
                                    <div className="flex items-center gap-3 bg-base-button p-[5px] rounded-md">
                                        <button>
                                            <Minus size={16} className="text-purple hover:text-purple-dark" />
                                        </button>
                                        1
                                        <button className="hover:text-purple-dark">
                                            <Plus size={16} className="text-purple hover:text-purple-dark" />
                                        </button>
                                    </div>
                                    <button className="flex items-center justify-center space-x-1 bg-base-button hover:bg-base-hover transition-all p-2 rounded-md">
                                        <Trash size={18} className="text-purple" />
                                        <span className="uppercase text-[12px]">remover</span>
                                    </button>
                                </div>
                            </div>
                        </div>

                        <span className="font-semibold">R$ 9,90</span>
                    </div>
               </div>

                <div className="w-full h-[220px] flex flex-col items-center space-y-6 pt-6 border-t-[1px]">
                    <div className="w-full space-y-2">
                        <div className="w-full flex justify-between">
                            <span className="text-sm text-base-text">Total de itens</span>
                            <span className="text-base-text">R$ 29,70</span>
                        </div>

                        <div className="w-full flex justify-between">
                            <span className="text-sm text-base-text">Entrega</span>
                            <span className="text-base-text">R$ 3,50</span>
                        </div>

                        <div className="w-full flex justify-between">
                            <span className="text-[20px] font-bold text-base-subtitle">Total</span>
                            <span className="text-[20px] font-bold text-base-subtitle">R$ 33,20</span>
                        </div>
                    </div>

                    <Link 
                        to="/order-finished"  
                        className="
                            w-full mt-6 text-white py-3 bg-yellow hover:bg-yellow-dark 
                            transition-all rounded-md text-center
                        ">
                        <button className="uppercase text-[14px] font-semibold">Confirmar pedido</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}