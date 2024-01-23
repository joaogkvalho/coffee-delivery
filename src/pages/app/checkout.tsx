import { Helmet } from "react-helmet-async";
import { SelectedProducts } from "../../components/SelectedProducts";
import { UserInfo } from "../../components/UserInfo";

export function Checkout() {
    return (
        <>
            <Helmet title="Checkout" />

            <div className="bg-background flex antialiased w-screen max-w-[1220px] mx-auto mb-24 mt-14 space-x-12">
                <UserInfo />

                <SelectedProducts />
            </div>
        </>
    )
}