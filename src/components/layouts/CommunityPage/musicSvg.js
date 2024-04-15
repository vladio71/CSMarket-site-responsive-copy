import React from 'react';
import Image from "next/image";

const MusicSvg = () => {
    return (
        <div style={{
            transform: 'rotate(-90deg)'
        }}>
            <Image
                priority
                src={"/images/music.svg"}
                width={150}
                height={150}
                alt="music image"
            />
        </div>
    );
};

export default MusicSvg;