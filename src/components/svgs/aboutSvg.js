import React from 'react';

const AboutSvg = ({cancelAnimation}) => {
    const style = cancelAnimation ? {
        animation: "none",
        transform: "none",
        opacity: 1
    } : {}
    return (
        <svg style={style} xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24">
            <path fill="currentColor"
                  d="M6 15h2.4q.475 0 .813-.338t.337-.812v-3.7q0-.475-.338-.813T8.4 9H6v6Zm1.15-1.15v-3.7H8.4v3.7H7.15ZM10.875 15l2.45-.025V13.85h-2.05v-1.3h1.3V11.4h-1.3v-1.25h2.05V9h-2.45q-.325 0-.537.212t-.213.538v4.5q0 .325.213.537t.537.213Zm5.15-.025q.325 0 .563-.213t.312-.537L18.3 9h-1.2l-1.075 4.1L14.95 9h-1.2l1.4 5.225q.075.325.313.538t.562.212ZM5 21q-.825 0-1.413-.588T3 19V5q0-.825.588-1.413T5 3h14q.825 0 1.413.588T21 5v14q0 .825-.588 1.413T19 21H5Zm0-2h14V5H5v14ZM5 5v14V5Z"/>
        </svg>
    );
};

export default AboutSvg;