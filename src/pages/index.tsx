import Header from '@/components/header';
import type { FC } from 'react';
import { Link } from 'react-router';

const Index: FC = () => {
    return (
        <>
            <Header />
            <div className='flex items-center justify-center px-4 pt-32.5 pb-12 md:mx-5 md:px-10'>
                <div className='w-full max-w-190'>
                    <p className='py-3 text-center text-[20px] leading-10 text-[#232333]'>
                        If you are the meeting host, sign in to start the meeting <b className='font-bold'>829 6337 9976</b>
                    </p>
                    <Link to='/login' className='mt-3 flex h-12 w-full items-center justify-center rounded-xl bg-[#0e72ed] text-white hover:bg-[#2681f2]'>
                        Sign in to Start
                    </Link>
                    <hr className='my-12 h-px border-0 bg-[#ededf4]' />
                    <p className='text-center text-[14px] leading-6 text-[#232333]'>
                        I'm not the meeting host,{' '}
                        <a href='co-cai-lon' className='text-[#0E72ED] hover:underline'>
                            Join Meeting as an Attendee
                        </a>
                    </p>
                </div>
            </div>
            <div className='px-6'>
                <p className='text-center text-[12px] leading-4.5 text-[#0404138F] md:text-[14px]'>©2026 Zoom Communications, Inc. All rights reserved.</p>
                <div className='flex w-full flex-wrap items-center justify-center text-center text-[12px] text-[#0404138F] md:text-[14px]'>
                    <p className='px-1.5'>Trust Center</p>
                    <p className='border-l border-l-[#0404138f] px-1.5'>Acceptable Use Guidelines</p>
                    <p className='border-l border-l-[#0404138f] px-1.5'>Legal & Compliance</p>
                    <p className='border-l border-l-[#0404138f] px-1.5'>Do Not Sell My Personal Information</p>
                    <p className='border-l border-l-[#0404138f] px-1.5'>Cookie Preferences</p>
                </div>
            </div>
        </>
    );
};

export default Index;
