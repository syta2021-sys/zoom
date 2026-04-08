import type { FC } from 'react';
import ZoomLogo from '@/assets/zoom-logo.png';
import { useLocation } from 'react-router';

const Header: FC = () => {
    const location = useLocation();
    return (
        <div className='fixed flex w-full items-center justify-center border-b border-b-black/10 bg-white'>
            <div className='mx-6 flex h-16 w-full max-w-350 items-center justify-between'>
                <img src={ZoomLogo} alt='' className='ml-[6.36px] h-[24.68px] w-[108.64px]' />
                <div className='flex cursor-pointer items-center justify-center gap-6 text-[12px] tracking-normal text-[#0e71eb]'>
                    {location.pathname === '/login' && (
                        <div className='flex items-center gap-2'>
                            <p className='hidden cursor-text text-[14px] leading-8 tracking-[.03em] text-[#232333] hover:no-underline md:block'>New to Zoom?</p>
                            <p className='hover:underline'>Sign Up</p>
                        </div>
                    )}
                    <p className='hover:underline'>Support</p>
                    <div className='flex items-center justify-center hover:underline'>
                        <p>English </p>
                        <div className='ml-1 h-0 w-0 border-t-4 border-r-4 border-l-4 border-t-current border-r-transparent border-l-transparent'></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
