import { useState } from 'react';
import FeatureTabButton from './FeatureTabButton';

export default function FeatureTabs({ activeIndex, setActiveIndex }) {
    const TABS = [
        { id: 'center-stage-photo', text1: '사진을 위한', text2: '센터 스테이지' },
        { id: 'dual-capture-video', text1: '듀얼 캡쳐', text2: '동영상' },
        { id: 'stabilization-video', text1: '초강력 흔들림 보정', text2: '동영상' },
    ];

    return (
        <ul className='bg-zinc-700/90 max-w-[80%] h-24 m-auto p-1 rounded-2xl flex'>
            {TABS.map((tab, idx) => (
                <li key={tab.id}>
                    <FeatureTabButton
                        text1={tab.text1}
                        text2={tab.text2}
                        onClick={() => setActiveIndex(idx)}
                        isActive={activeIndex === idx}
                    />
                </li>
            ))}
        </ul>
    );
}
