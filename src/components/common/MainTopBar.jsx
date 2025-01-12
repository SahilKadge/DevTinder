import React from 'react';
import { useDispatch } from 'react-redux';
import { clearUser } from '../../redux/slices/authSlice';
import { useNavigate } from 'react-router-dom';

export const MainTopBar = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogout = () => {
    
        dispatch(clearUser());

        
        navigate('/');
    };

    return (
        <div className="absolute w-full bg-transparent">
            <button
                onClick={handleLogout}
                className="absolute px-[20px] py-[10px] bg-gradient-to-right text-customWhite text-[16px] rounded-full right-4 top-4"
            >
                Log Out
            </button>
        </div>
    );
};
