import React from 'react';
import Image from "next/image";
import rose from "../../../../public/images/rose.svg";

const RoseSvg = () => {
    return (
        <div style={{
            transform: 'rotate(-270deg)'
        }}>
            <Image
                priority
                src={rose}
                alt="Rose image"
            />
        </div>
    );
};

export default RoseSvg;