/* import React from 'react';
import { usePost } from '../../model/Axios';

const MegvasarolButton = (props) => {
    const purchaseData = {
        user_id: "",
        shopping_date: "",
    }

    // const termekData = usePost('purchases', purchaseData);


    const handleClick = async () => {
        try {

            const response = await usePost('purchases', vasarlasiAdatok);


            console.log('Purchase successful:', response);


            if (props.onClick) {
                props.onClick();
            }
        } catch (error) {

            console.error('Error purchasing:', error);
        }
    };

    return (
        <button className="btn btn-primary" onClick={handleClick}>
            Megvásárol
        </button>
    );
};

export default MegvasarolButton; */