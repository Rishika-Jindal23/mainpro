import React from "react";
import payment from "../../../../public/img/payment.webp";
import Image from "next/image";

function Success() {
    return (
        <div>
            <div className="w-45 h-70  relative mt-5 ">
                <Image
                    src={payment}
                    //   layout={"fill"}*
                    //    objectFit={"contain"}
                    alt="payment Successful"
                    // layout="responsive"
                ></Image>
                <div>
                    <p>
                        Don't close you will be redirected to nextpage soon...
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Success;
