import { Helmet } from "react-helmet-async";
import { Intro } from "../../components/Intro";
import { ProductsList } from "../../components/ProductsList";

export function Home() {
    return (
        <>
            <Helmet title="Home" />

            <div className="bg-background flex min-h-screen flex-col antialiased">
                <Intro />

                <ProductsList />
            </div>
        </>
    )
}