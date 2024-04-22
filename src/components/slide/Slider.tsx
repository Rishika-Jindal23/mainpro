import React, { useState } from "react";
import styles from "./Slider.module.css";

interface SliderProps {
    min: number;
    max: number;
    step?: number;
    onChange: (value: number) => void;
    cards: CatCard[];
}

interface CatCard {
    id: number;
    title: string;
}

const Slider: React.FC<SliderProps> = ({
    min,
    max,
    step = 1,
    onChange,
    cards,
}) => {
    const [value, setValue] = useState(min);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = parseInt(e.target.value);
        setValue(newValue);
        onChange(newValue);
    };

    return (
        <div>
            <div className={styles.sliderContainer}>
                <input
                    type="range"
                    min={min}
                    max={max}
                    step={step}
                    value={value}
                    onChange={handleChange}
                    className={styles.slider}
                />
                <span className={styles.value}>{value}</span>
            </div>
            <div>
                {cards
                    .filter((card) => card.id <= value)
                    .map((card) => (
                        <CatCard key={card.id} card={card} />
                    ))}
            </div>
        </div>
    );
};

interface CatCardProps {
    card: CatCard;
}

const CatCard: React.FC<CatCardProps> = ({ card }) => {
    return (
        <div>
            <h3>{card.title}</h3>
            {/* Add whatever content you want to show for each card */}
        </div>
    );
};

export default Slider;
