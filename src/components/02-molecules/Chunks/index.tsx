import React from "react";
import './index.scss'
import ChunkCard from "../../01-atoms/ChunkCard";

const chunks = [
    {
        svg: (
            <svg
                width="21"
                height="20"
                viewBox="0 0 21 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <mask
                    id="mask0_19_193"
                    maskUnits="userSpaceOnUse"
                    x="0"
                    y="0"
                    width="21"
                    height="20"
                >
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M10.5 0C4.97746 0 0.459015 4.5 0.459015 10C0.459015 15.5 4.97746 20 10.5 20C16.0225 20 20.541 15.5 20.541 10C20.541 4.5 16.0225 0 10.5 0ZM14.7172 14.2L9.49591 11V5H11.0021V10.2L15.5205 12.9L14.7172 14.2Z"
                        fill="white"
                    />
                </mask>
                <g mask="url(#mask0_19_193)">
                    <rect
                        x="-2.55328"
                        y="-3"
                        width="26.1066"
                        height="26"
                        fill="#34C759"
                    />
                </g>
            </svg>
        ),
        text: "Доставка з 10:00 до 19:000",
        description: "Час роботи",
    },
    {
        svg: (
            <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <mask
                    id="mask0_19_186"
                    maskUnits="userSpaceOnUse"
                    x="0"
                    y="0"
                    width="18"
                    height="18"
                >
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M18 0L0 7.53V8.51L6.84 11.16L9.48 18H10.46L18 0Z"
                        fill="white"
                    />
                </mask>
                <g mask="url(#mask0_19_186)">
                    <rect x="-4" y="-4" width="26" height="26" fill="#34C759" />
                </g>
            </svg>
        ),
        text: "Доставка з 10:00 до 19:001",
        description: "Час роботи",
    },
    {
        svg: 
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<mask id="mask0_2843_597"  maskUnits="userSpaceOnUse" x="0" y="0" width="18" height="18">
<path fillRule="evenodd" clipRule="evenodd" d="M3.62 7.79C5.06 10.62 7.38 12.93 10.21 14.38L12.41 12.18C12.68 11.91 13.08 11.82 13.43 11.94C14.55 12.31 15.76 12.51 17 12.51C17.55 12.51 18 12.96 18 13.51V17C18 17.55 17.55 18 17 18C7.61 18 0 10.39 0 1C0 0.45 0.45 0 1 0H4.5C5.05 0 5.5 0.45 5.5 1C5.5 2.25 5.7 3.45 6.07 4.57C6.18 4.92 6.1 5.31 5.82 5.59L3.62 7.79V7.79Z" fill="white"/>
</mask>
<g mask="url(#mask0_2843_597)">
<rect x="-4" y="-4" width="26" height="26" fill="#34C759"/>
</g>
</svg>

        ,
        text: "Доставка з 10:00 до 19:002",
        description: "Час роботи",
    },
];

const Chunks = () => {
    return <div className="chunks">
        {chunks.map(chunk => <ChunkCard key={chunk.text} {...chunk}></ChunkCard>)}
    </div>;
};

export default Chunks
