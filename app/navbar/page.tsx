'use client';
import Image from 'next/image'
import React from 'react'
import navbarlogo from '../../public/assests/navbarlogo.svg'
import { Button } from "@/components/ui/button"
import { useRouter } from 'next/navigation'
import secondpart from '../../public/assests/secondpart.svg'
import logobar from '../../public/assests/logobar.svg'
import userlogo from '../../public/assests/userlogo.svg'
import afteruserlogo from '../../public/assests/afteruser.svg'
import afterafteruser from '../../public/assests/afterafteruser.svg'

const Navbar = () => {
    const router = useRouter();
    return (
        <div>
            <div className='w-auto h-[59px] flex flex-row'>
                <div className='flex flex-row'>
                    <Image src={navbarlogo} alt='navbar' className='ml-[120px]'></Image>
                    <div className='flex flex-row items-center justify-center gap-x-28 ml-[650px]'>
                        <div>Home</div>
                        <div>Features</div>
                        <div>Community</div>
                        <div>Blog</div>
                        <div>Pricing</div>
                        <div>
                            <Button onClick={() => router.push('/')} className='bg-[#4CAF4F]'>Register Now ➡</Button>
                        </div>
                    </div>
                </div>


            </div>
            <div>
            <div className='h-[450px] w-auto flex flex-row gap-x-44  bg-[#F5F7FA]'>

                <div className=' ml-[350px]'>
                    <div className='flex flex-row '>
                    <div className='w-[650px] h-[250px] mt-[100px] flex flex-col gap-y-7'>
                        <div className='flex flex-col mt-[40px]  ml-[30px] gap-y-3'>
                            <div className='text-6xl font-bold text-[#4D4D4D]'>Lessons and insights </div>
                            <div className='text-6xl font-bold text-[#4CAF4F] '>from 8 years</div>
                        </div>
                        <div className='flex text-left text-[#717171] text-sm ml-[30px]'>Where to grow your business as a photographer: site or social media?</div>
                        <div>
                            <Button onClick={() => router.push('/')} className='bg-[#4CAF4F] ml-[30px]'>Register </Button>
                            </div>
                            </div>


                            <div className='flex flex-row ml-[180px] mt-[70px]'>
                                
                                    <Image src={secondpart} alt='secod'></Image>
                                
                            </div>
                        
                       

                    
                </div>
                </div>
            </div>
            </div>
            <div className='w-auto h-[180px] flex flex-col gap-y-2 items-center justify-center'>
                <div className='flex flex-col mt-[20px]  ml-[30px]'>
                    <div className='text-2xl font-bold text-[#4D4D4D]'>Our clients </div>
                </div>
                <div className='flex items-center justify-center text-left text-[#717171] text-sm ml-[0]'>We have been working with some Fortune 500+ clients</div>

                <div>
                    <Image src={logobar} alt='logobar'></Image>
                </div>
            </div>

            <div className='w-auto h-[140px] flex flex-col gap-y-2 items-center justify-center'>
                <div className='flex flex-col mt-[18px]  ml-[30px]'>
                    <div>
                    <div className='text-2xl font-bold text-[#4D4D4D]'>Manage your entire community </div>
                    <div className='text-2xl font-bold text-[#4D4D4D] text-center'>in a single system</div>
                    </div>
                </div>
                <div className='flex items-center justify-center text-left text-[#717171] text-sm ml-[0]'>Who is Nextcent suitable for?</div>

            </div>

            <div>
                <div className='flex flex-row gap-x-36 items-center justify-center mt-[30px] text-center'>
                    <div className='w-[240px] h-[182px] items-center justify-center'>
                        <Image src={userlogo} alt='user' className='items-center justify-center ml-[100px] mt-[5px]'></Image>
                        <div className='flex flex-col items-center justify-center gap-y-2'>
                            <div className='items-center justify-center text-center text-[20px] text-[#4D4D4D] font-bold'>Membership Organisations</div>
                            <div className='text-[11px] text-light items-center justify-center text-center text-[#717171]'>Our membership management software provides full automation of membership renewals and payments</div>
                        </div>
                    </div>
                    <div>
                    <div className='w-[240px] h-[182px] items-center justify-center'>
                        <Image src={afteruserlogo} alt='user' className='items-center justify-center ml-[100px] mt-[5px]'></Image>
                        <div className='flex flex-col items-center justify-center gap-y-2'>
                            <div className='items-center justify-center text-center text-[20px] text-[#4D4D4D] font-bold'>National Associations</div>
                            <div className='text-[11px] text-light items-center justify-center text-center text-[#717171]'>Our membership management software provides full automation of membership renewals and payments</div>
                        </div>
                    </div>
                    </div>

                    <div>
                    <div className='w-[240px] h-[182px] items-center justify-center'>
                        <Image src={afterafteruser} alt='user' className='items-center justify-center ml-[100px] mt-[5px]'></Image>
                        <div className='flex flex-col items-center justify-center gap-y-2'>
                            <div className='items-center justify-center text-center text-[20px] text-[#4D4D4D] font-bold'>Clubs And Groups</div>
                            <div className='text-[11px] text-light items-center justify-center text-center text-[#717171]'>Our membership management software provides full automation of membership renewals and payments</div>
                        </div>
                    </div>
                    </div>

                </div>
            </div>


        </div>
    )
}

export default Navbar