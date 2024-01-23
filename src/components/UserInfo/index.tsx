import { Bank, CreditCard, CurrencyDollar, MapPin, Money } from "@phosphor-icons/react";

export function UserInfo() {
    return (
        <div className="flex-1">
            <h1 className="font-baloo font-bold text-[18px]">Complete seu pedido</h1>

            <div className="h-[600px] flex flex-col space-y-4 mt-4">
                <div className="flex-1 p-10 rounded-lg bg-base-card">
                    <div className="flex items-start gap-2">
                        <MapPin size={24} className="text-yellow-dark" />

                        <div className="space-y-0.5 -mt-1">
                            <h1 className="text-[18px] text-base-subtitle">Endereço de entrega</h1>
                            <p className="text-[14px] text-base-text">Infome o endereço onde deseja receber seu pedido</p>
                        </div>
                    </div>

                    <form className="flex flex-col gap-4 mt-8">
                        <input 
                            type="text" 
                            placeholder="CEP" 
                            className="px-4 py-2 rounded bg-base-button text-base-label max-w-[200px]" 
                        />
                        <input 
                            type="text" 
                            placeholder="Rua" 
                            className="px-4 py-2 rounded bg-base-button text-base-label flex-1"  />
                        <div className="w-full flex space-x-3">
                            <input 
                                type="number" 
                                placeholder="Número"
                                className="px-4 py-2 rounded bg-base-button text-base-label max-w-[200px]" 
                            />
                            <input 
                                type="text" 
                                placeholder="Complemento" 
                                className="flex-1 px-4 py-2 rounded bg-base-button text-base-label"  
                            />
                        </div>
                        <div className="space-x-3 flex">
                            <input 
                                type="text" 
                                placeholder="Bairro" 
                                className="flex-1 px-4 py-2 rounded bg-base-button text-base-label" 
                            />
                            <input 
                                type="text" 
                                placeholder="Cidade" 
                                className="flex-1 px-4 py-2 rounded bg-base-button text-base-label" 
                            />
                            <input 
                                type="text" 
                                placeholder="UF" 
                                className="flex-1 px-4 py-2 rounded bg-base-button text-base-label max-w-[60px]" 
                            />
                        </div>
                    </form>
                </div>

                <div className="h-[207px] p-10 rounded-lg bg-base-card">
                    <div className="flex items-start gap-2">
                        <CurrencyDollar size={24} className="text-purple-dark" />

                        <div className="space-y-0.5 -mt-1">
                            <h1 className="text-[18px] text-base-subtitle">Pagamento</h1>
                            <p className="text-[14px] text-base-text">O pagamento é feito na entrega. Escolha a forma que deseja pagar</p>
                        </div>
                    </div>

                    <div className="flex gap-4 mt-8">
                        <button className="flex gap-2 items-center p-4 bg-base-button hover:bg-base-hover transition-all rounded-md">
                            <CreditCard size={18} className="text-purple-dark" />
                            <span className="uppercase text-base-text text-[12px] font-semibold">Cartão de crédito</span>
                        </button>

                        <button className="flex gap-2 items-center p-4 bg-base-button hover:bg-base-hover transition-all rounded-md">
                            <Bank size={18} className="text-purple-dark" />
                            <span className="uppercase text-base-text text-[12px] font-semibold">Cartão de débito</span>
                        </button>

                        <button className="flex gap-2 items-center p-4 bg-base-button hover:bg-base-hover transition-all rounded-md">
                            <Money size={18} className="text-purple-dark" />
                            <span className="uppercase text-base-text text-[12px] font-semibold">Dinheiro</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}