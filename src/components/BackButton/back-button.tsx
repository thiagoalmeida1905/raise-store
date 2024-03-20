import { useRouter } from "next/navigation";
import { BackIcon } from "../icons/back-icon";

interface BtnProps{
    navigate: string;
}

export function BackButton({ navigate }: BtnProps){
    const router = useRouter();

    const handleNavigate = () => {
        router.push(navigate)
    }

    return(
        <button 
            className="flex items-center justify-center gap-2"
            onClick={handleNavigate}
        >
            <BackIcon/>
            <p className="font-bold text-sm">Voltar</p>
        </button>
    )
}