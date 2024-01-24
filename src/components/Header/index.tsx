import { MapPin, ShoppingCart } from '@phosphor-icons/react'
import { Link } from 'react-router-dom'
import logoImg from '../../assets/Logo.png'

export function Header() {
    return (
        <div className="bg-background w-screen max-w-[1440px] h-[104px] mx-auto px-32 flex items-center justify-between sticky top-0 border-b-[1px]">
            <Link to="/">
                <img src={logoImg} alt="" />
            </Link>

            <div className="flex items-center justify-center gap-3">
                <button className="flex items-center justify-center gap-1 rounded-md bg-purple-light p-2 hover:bg-base-hover transition-all">
                    <MapPin size={22} weight="fill" className="text-purple" />
                    <span className="text-purple">Curitiba, PR</span>
                </button>

                <Link to="/checkout">
                    <button className="bg-yellow-light p-2 rounded-md">
                        <ShoppingCart size={22} weight="fill" className="text-yellow-dark" />
                    </button>
                </Link>
            </div>
        </div>
    )
}