import { Helmet } from "react-helmet-async";
import { OrderFinishedMessage } from "../../components/OrderFinishedMessage";

export function OrderFinished() {
    return (
        <>
            <Helmet title="Checkout" />

            <div className="bg-background flex antialiased w-screen max-w-[1220px] mx-auto mb-24 mt-32 space-x-12">
                <OrderFinishedMessage />
            </div>
        </>
    )
}