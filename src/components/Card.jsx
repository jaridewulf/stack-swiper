import {
    motion,
    useMotionValue,
} from "framer-motion"

import { useEffect, useState } from "react";
import { cardStore } from "../store/cardStore";

const Card = ({ backgroundColor, index }) => {
    const [isRendered, setIsRendered] = useState(true);
    const { addCard } = cardStore((state) => state);
    const x = useMotionValue(0)
    const y = useMotionValue(-index * 10)

    useEffect(() => {
        const handleDrag = () => {
            if (x.get() > 250) {
                setIsRendered(false);
                console.log('added to keep pile');
                addCard({ backgroundColor });
            }
            if (x.get() < -250) {
                setIsRendered(false);
                console.log('added to discard pile');
            }
            if (y.get() > 50) {
                console.log('DOWN DOWN DOWN');
            }
            if (y.get() < -50) {
                console.log('UP UP UP');
            }
        }

        document.addEventListener("mouseup", handleDrag);

        return () => {
            document.removeEventListener("mouseup", handleDrag);
        }
    }, [x, y])

    if (isRendered) {
        return (
            <motion.div
                className="card"
                drag
                dragConstraints={{ top: 0, bottom: 0 }}
                dragSnapToOrigin
                whileDrag={{ scale: 1.05 }}
                style={{ x, y, backgroundColor }}
            ></motion.div>
        );
    } else {
        return null;
    }
}

export default Card;