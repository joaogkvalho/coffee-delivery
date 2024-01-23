import { Outlet } from "react-router-dom";
import { Header } from "../../components/Header";

export function AppLayout() {
    return (
        <div className="bg-background flex min-h-screen flex-col antialiased">
            <Header />

            <div>
                <Outlet />
            </div>
        </div>
    )
}