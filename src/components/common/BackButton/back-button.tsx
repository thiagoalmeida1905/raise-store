import { useRouter } from "next/navigation";
import { BackIcon } from "../../ui/icons/back-icon";

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
            className="flex items-center justify-center gap-2 mt-20"
            onClick={handleNavigate}
        >
            <BackIcon/>
            <p className="font-bold text-sm ">Back</p>
        </button>
    )
}