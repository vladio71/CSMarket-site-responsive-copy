import React from 'react';
import Image from "next/image";
import music from "public/images/music.svg";

const MusicSvg = () => {
    return (
        <div style={{
            transform: 'rotate(-90deg)'
        }}>
            <Image
                priority
                src={music}
                width={150}
                height={150}
                alt="music image"
            />
        </div>
    );
};

export default MusicSvg;