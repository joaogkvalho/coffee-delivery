import { Coffee, Cube, ShoppingCart, Timer } from "@phosphor-icons/react";
import banner_img from '../../assets/Banner.png';

export function Intro() {
    return (
        <div className="w-screen max-w-[1220px] mx-auto h-[544px] flex items-center">
            <div className="w-screen max-w-[1220px] mx-auto flex items-center justify-between">
                <div className="max-w-[600px]">
                    <div className="mb-16 space-y-3">
                        <h1 className="text-[48px] font-black font-baloo text-base-title">Encontre o café perfeito para qualquer hora do dia</h1>
                        <p className="text-[20px] font-normal font-roboto text-base-subtitle">Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</p>
                    </div>

                    <div className="grid grid-cols-2 gap-6">
                        <p className="flex items-center gap-2 font-normal text-[16px] text-base-text">
                            <span className="bg-yellow-dark p-2 rounded-full">
                                <ShoppingCart className="text-white" weight="fill" />
                            </span>
                            Compra simples e segura
                        </p>
                        <p className="flex items-center gap-2 font-normal text-[16px] text-base-text">
                            <span className="bg-base-text p-2 rounded-full">
                                <Cube className="text-white" weight="fill" />
                            </span>
                            Embalagem mantém o café intacto
                        </p>
                        <p className="flex items-center gap-2 font-normal text-[16px] text-base-text">
                            <span className="bg-yellow p-2 rounded-full">
                                <Timer className="text-white" weight="fill" />
                            </span>
                            Entrega rápida e rastreada
                        </p>
                        <p className="flex items-center gap-2 font-normal text-[16px] text-base-text">
                            <span className="bg-purple p-2 rounded-full">
                                <Coffee className="text-white" weight="fill" />
                            </span>
                            O café chega fresquinho até você
                        </p>
                    </div>
                </div>

                <img src={banner_img} className="w-[476px] h-[360px]" />
            </div>
        </div>
    )
}