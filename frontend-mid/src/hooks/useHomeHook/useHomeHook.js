import { useNavigate } from "react-router-dom";

import { homeService } from '../../services'


export function useHomeHook() {
    const navigate = useNavigate();

    const navigateToOrder = () => {
        navigate("/order");
    }

    return { navigateToOrder }
}
