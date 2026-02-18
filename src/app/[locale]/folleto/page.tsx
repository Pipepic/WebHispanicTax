import Navbar from "@/components/Navbar";
import BrochureScene from "../../../components/Brochure3D/Scene";
import { useLocale } from "next-intl";
import { notFound } from "next/navigation";

export default function FolletoPage() {
    const locale = useLocale();

    // Restringir el acceso para el idioma español
    if (locale === 'es') {
        notFound();
    }

    return (
        <main className="min-h-screen bg-[#333333]">
            <Navbar />
            <div className="h-[calc(100vh-80px)] w-full">
                <BrochureScene />
            </div>
        </main>
    );
}
