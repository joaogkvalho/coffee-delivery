import { Clock, CurrencyDollar, MapPin } from '@phosphor-icons/react'
import banner from '../../assets/checkout-banner.png'

export function OrderFinishedMessage() {
    return (
        <div className="w-full flex items-end justify-between">
            <div className="flex flex-col items-start gap-12">
                <div>
                    <h1 className="text-[38px] text-yellow-dark font-baloo">Uhu! Pedido confirmado</h1>
                    <p className="text-base-subtitle text-[18px]">Agora é só aguardar que logo o café chegará até você</p>
                </div>

                <div className="flex flex-col gap-6 border-[0.5px] border-purple rounded-tr-[36px] rounded-bl-[36px] rounded-tl-md rounded-br-md w-[526px] p-10">
                    <div className="flex items-center gap-4">
                        <div className="bg-purple p-2 rounded-full">
                            <MapPin size={18} weight="fill" className="text-white" />
                        </div>
                        <p className="text-base-text">
                            Entrega em {' '}
                            <span className="font-semibold">Rua Hilário Moro, 526 <br/> Tingui - Curitiba, PR</span>
                        </p>
                    </div>

                    <div className="flex items-center gap-4">
                        <div className="bg-yellow p-2 rounded-full">
                            <Clock size={18} weight="fill" className="text-white" />
                        </div>
                        <p className='text-base-text'>
                            Previsão de entrega<br/> 
                            <span className="font-semibold">20 min - 30 min</span>
                        </p>
                    </div>

                    <div className="flex items-center gap-4">
                        <div className="bg-yellow-dark p-2 rounded-full">
                            <CurrencyDollar size={18} weight="fill" className="text-white" />
                        </div>
                        <p className="text-base-text">
                            Pagamento na entrega <br/>
                            <span className="font-semibold">Cartão de Crédito</span>
                        </p>
                    </div>
                </div>
            </div>

            
            <img src={banner} className="w-[550px]" />
        </div>
    )
}