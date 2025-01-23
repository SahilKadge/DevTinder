import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { AiFillFire } from 'react-icons/ai';
import { Checkbox } from '../components/common/checkbox';
import { ImageUpload } from '../components/common/ImageUpload';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import axios from "axios"
import { baseURL } from '../axios/instance';
const genderData = [
    {
        gender: "male",
    },
    {
        gender: "female",
    },
    {
        gender: "other",
    }
]
export const RegistrationPage = () => {
    const [isCheck, setIsCheck] = useState(false)
    const [imageToUpload, setImageToUpload] = useState(null);
    const [selectGender, setSelectGender] = useState("");
    const [selectInterest, setSelectInterset] = useState("");
    const navigate = useNavigate()

    const handleSelectGender = (gender) => {
        setSelectGender(gender)
        
    }
    const handleSelectInterest = (gender) => {
        setSelectInterset(gender);
    }
    const user = useSelector((state) => state.auth.user);
    // console.log('user', user);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = async(data) => {
        try{
            data = {...data,
                gender: selectGender,
                interestedIn: selectInterest,
                userProfile: imageToUpload.data_url,
                showMyGender: isCheck,
            }
            const response = await axios.patch(`${baseURL}/register`, data, { withCredentials: true } );
            console.log("response data is ", response.data)
            if(response?.data?.data){
                navigate('/main')
            }else{
                navigate('/registration')
            }
            
            console.log('Form Submitted:', data);
        }catch(error){
            console.log("error accour will sending registration req", error)
        }
    };
    useEffect(() => {
        
        if (!user) {
          navigate("/");
        }else{
            if(user.isRegistrationCompleted){
                navigate("/main")
            }
        }
      }, [user, navigate]);


    // console.log("selected gender", selectGender)
    // console.log("image to upload ", imageToUpload.data_url)
    // console.log("is checked ", isCheck)
    console.log("userrrrrr frommmmmmmmm registrationnnnnnnnnnn", user)

    return (
        <div className="bg-customBlack relative">
            <div className="fixed top-0 w-full flex justify-between bg-customBlack py-[20px] px-[20px] border-b-[1px] border-slate-600 z-50">
                <div className="flex items-center text-transparent bg-clip-text bg-gradient-to-right from-[#FD267A] to-[#FF6036]">
                    <AiFillFire className="lg:text-[60px] md:text-[40px] text-[30px] text-gradientStart " />{' '}
                    <span className="lg:text-[40px] md:text-[30px] text-[22px] text-customWhite font-bold">DEV</span>
                </div>
            </div>

            <div>
                <div className="font-semibold text-customWhite text-[32px] text-center pt-[150px]">
                    Create Account
                </div>

                <div className="mt-[100px] lg:px-[240px] px-[10px]">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="flex lg:flex-row flex-col lg:mx-0 mx-[5%]">
                            <div >
                                {/* First Name */}
                                <div className="flex flex-col">
                                    <label className="text-customWhite text-[18px] font-semibold ">First Name</label>
                                    <input
                                        type="text"
                                        {...register('firstName', { required: 'First Name is required' })}
                                        placeholder="First Name"
                                        className="text-gray-300 bg-darkblack placeholder:text-slate-400 border-[1px] border-slate-400 lg:w-[500px] md:w-[400px] w-[100%]  h-[45px] rounded-[8px] mt-[15px] p-2 placeholder:text-[16px]"
                                    />
                                    {errors.firstName && (
                                        <p className="text-red-500 text-sm mt-1">{errors.firstName.message}</p>
                                    )}
                                </div>

                                {/* Last Name */}
                                <div className="mt-[15px] flex flex-col">
                                    <label className="text-customWhite text-[18px] font-semibold ">Last Name</label>
                                    <input
                                        type="text"
                                        {...register('lastName', { required: 'Last Name is required' })}
                                        placeholder="Last Name"
                                        className="text-gray-300 bg-darkblack placeholder:text-slate-400 border-[1px] border-slate-400 lg:w-[500px] md:w-[400px] w-[100%]  h-[45px] rounded-[8px] mt-[15px] p-2 placeholder:text-[16px]"
                                    />
                                    {errors.lastName && (
                                        <p className="text-red-500 text-sm mt-1">{errors.lastName.message}</p>
                                    )}
                                </div>

                                {/* Email */}
                                {/* <div className="mt-[15px] flex flex-col">
                                    <label className="text-customWhite text-[18px] font-semibold">Email</label>
                                    <input
                                        type="email"
                                        {...register('email', {
                                            required: 'Email is required',
                                            pattern: {
                                                value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                                                message: 'Invalid email address',
                                            },
                                        })}
                                        placeholder="Email"
                                        className="text-gray-300 bg-darkblack placeholder:text-slate-400 border-[1px] border-slate-400 w-[500px] h-[45px] rounded-[8px] mt-[15px] p-2 placeholder:text-[16px]"
                                    />
                                    {errors.email && (
                                        <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                                    )}
                                </div> */}

                                {/* Age */}
                                <div className="mt-[15px] flex flex-col">
                                    <label className="text-customWhite text-[18px] font-semibold ">Age</label>
                                    <input
                                        type="text"
                                        {...register('age', {
                                            required: 'Age is required',
                                            pattern: {
                                                value: /^[0-9]+$/,
                                                message: 'Age must be a number',
                                            },
                                        })}
                                        placeholder="Age"
                                        className="text-gray-300  bg-darkblack placeholder:text-slate-400 border-[1px] border-slate-400 w-[60px] h-[45px] rounded-[8px] mt-[15px] p-2 placeholder:text-center placeholder:text-[16px]"
                                    />
                                    {errors.age && (
                                        <p className="text-red-500 text-sm mt-1">{errors.age.message}</p>
                                    )}
                                </div>

                                {/* Gender */}
                                <div className="mt-[15px] flex flex-col">
                                    <label className="text-customWhite text-[18px] font-semibold">Gender</label>
                                    <div className="flex gap-[20px]">
                                        {
                                            genderData.map((item, index) => {
                                                return (
                                                    <button
                                                        onClick={() => handleSelectGender(item.gender)}
                                                        index={index}
                                                        type="button"
                                                        className={`text-gray-300  w-[150px] h-[40px] rounded-full mt-[15px] p-2 text-center hover:text-customWhite hover:bg-gray-500 text-[16px] ${selectGender == item.gender ? "bg-gradient-to-right border-0": "bg-darkblack border-slate-500 border-[1px]"}`}
                                                    >
                                                        {item.gender}
                                                    </button>
                                                )
                                            })
                                        }

                                    </div>
                                </div>

                                {/* Show Gender Checkbox */}
                                <div className="flex gap-[10px] text-slate-400 text-[18px] font-medium mt-[20px]">
                                    <Checkbox setIsCheck={setIsCheck} isCheck={isCheck} /> <div>Show my gender on my profile</div>
                                </div>
                                <div className="mt-[15px] flex flex-col">
                                    <label className="text-customWhite text-[18px] font-semibold">Interested In</label>
                                    <div className="flex gap-[20px]">
                                    {
                                            genderData.map((item, index) => {
                                                return (
                                                    <button
                                                        onClick={() => handleSelectInterest(item.gender)}
                                                        index={index}
                                                        type="button"
                                                        className={`text-gray-300 w-[150px] h-[40px] rounded-full mt-[15px] p-2 text-center hover:text-customWhite hover:bg-gray-500 text-[16px] ${selectInterest == item.gender ? "bg-gradient-to-right border-0": "bg-darkblack border-[1px] border-slate-500"}`}
                                                    >
                                                        {item.gender}
                                                    </button>
                                                )
                                            })
                                        }
                                    </div>
                                </div>
                            </div>

                            {/* Image Upload Section */}
                            <div className="lg:w-[50%] xxmd:ml-[50px] w-full h-full">
                                <ImageUpload  image={imageToUpload} setImage={setImageToUpload}/>
                            </div>
                        </div>

                        {/* Submit Button */}
                        <div className="w-full flex justify-center items-center my-[50px]">
                            <button
                                type="submit"
                                className="rounded-full py-[15px] px-[50px] bg-gradient-to-right text-[18px] font-medium text-customWhite"
                            >
                                Continue
                            </button>
                        </div>

                        <div className="text-center text-[18px] text-blue-500 font-medium mt-[50px] pb-[50px]">
                            Already Have An Account?{' '}
                            <span className="hover:underline hover:text-blue-400">Log In</span>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};
