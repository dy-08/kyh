import CameraFeatureTabs from './CameraFeatureTabs';
import DeviceMockup from './DeviceMockup';

export default function CameraFeatureSection() {
    return (
        <>
            <DeviceMockup>
                <img src='/images/project/p-youtube.jpg' alt='유튜브 클론코딩' className='w-full h-full object-cover' />
            </DeviceMockup>
            <CameraFeatureTabs />
        </>
    );
}
