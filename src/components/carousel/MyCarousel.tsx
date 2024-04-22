import React from "react";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

export default function MyCarousel() {
    return (
        <>
            <Carousel>
                <div>
                    <img src="https://images.pexels.com/photos/18873395/pexels-photo-18873395/free-photo-of-tea-coffee-and-a-vase-with-blooming-flowers-on-a-table-standing-by-a-window.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src="https://images.pexels.com/photos/18873395/pexels-photo-18873395/free-photo-of-tea-coffee-and-a-vase-with-blooming-flowers-on-a-table-standing-by-a-window.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src="https://images.pexels.com/photos/18873395/pexels-photo-18873395/free-photo-of-tea-coffee-and-a-vase-with-blooming-flowers-on-a-table-standing-by-a-window.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" />
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>
        </>
    );
}
