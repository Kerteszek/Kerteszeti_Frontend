import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import useAuthContext from "../context/AuthContext";

function Adatlap() {
    const { user, getUser } = useAuthContext();
    useEffect(() => {
        //console.log(user)
        if (!user) {
            getUser();
        }
    });

    //console.log(user?.name)
    let mintacim = '';
    let userName = '';

    const [deliveryInfo, setDeliveryInfo] = useState({
        name: userName,
        address: mintacim
    });

    const [billingInfo, setBillingInfo] = useState({
        name: userName,
        address: mintacim
    });

    const [passwordInfo, setPasswordInfo] = useState({
        currentPassword: '',
        newPassword: '',
        confirmPassword: ''
    });

    const handleDeliveryChange = (e) => {
        const { name, value } = e.target;
        setDeliveryInfo({
            ...deliveryInfo,
            [name]: value
        });
    };

    const handleBillingChange = (e) => {
        const { name, value } = e.target;
        setBillingInfo({
            ...billingInfo,
            [name]: value
        });
    };

    const handlePasswordChange = (e) => {
        const { name, value } = e.target;
        setPasswordInfo({
            ...passwordInfo,
            [name]: value
        });
    };

    const handleRefresh = () => {
        getUser();
        setDeliveryInfo({
            name: user?.name,
            address: mintacim
        });
        setBillingInfo({
            name: user?.name,
            address: mintacim
        });
    };

    const handlePasswordSubmit = (e) => {
        e.preventDefault();
        console.log("Jelszóváltoztatás leadva:", passwordInfo);
        setPasswordInfo({
            currentPassword: '',
            newPassword: '',
            confirmPassword: ''
        });
    };

    return (
        <div className="container">
            <h2>Szállítási információ</h2>
            <form>
                <div className="mb-3">
                    <label className="form-label">Név:</label>
                    <input type="text" className="form-control" name="name" value={deliveryInfo.name} onChange={handleDeliveryChange} placeholder={user?.name} />
                </div>
                <div className="mb-3">
                    <label className="form-label">Cím:</label>
                    <input type="text" className="form-control" name="address" value={deliveryInfo.address} onChange={handleDeliveryChange} placeholder={'Minta utca 45'} />
                </div>
            </form>

            <h2>Számlázási információ</h2>
            <form>
                <div className="mb-3">
                    <label className="form-label">Név:</label>
                    <input type="text" className="form-control" name="name" value={billingInfo.name} onChange={handleBillingChange} placeholder={user?.name} />
                </div>

                <div className="mb-3">
                    <label className="form-label">Cím:</label>
                    <input type="text" className="form-control" name="address" value={billingInfo.address} onChange={handleBillingChange} placeholder={'Minta utca 45'} />
                </div>
            </form>

            <div className="d-flex justify-content-end">
                <button className="btn btn-primary" onClick={handleRefresh}>Frissítés</button>
            </div>

            <hr />

            <h2>Jelszó változtatás</h2>
            <form onSubmit={handlePasswordSubmit}>
                <div className="mb-3">
                    <label className="form-label">Jelenlegi jelszó:</label>
                    <input type="password" className="form-control" name="currentPassword" value={passwordInfo.currentPassword} onChange={handlePasswordChange} />
                </div>
                <div className="mb-3">
                    <label className="form-label">Új jelszó:</label>
                    <input type="password" className="form-control" name="newPassword" value={passwordInfo.newPassword} onChange={handlePasswordChange} />
                </div>
                <div className="mb-3">
                    <label className="form-label">Új jelszó megerősítése:</label>
                    <input type="password" className="form-control" name="confirmPassword" value={passwordInfo.confirmPassword} onChange={handlePasswordChange} />
                </div>
                <div className="d-flex justify-content-end">
                    <button type="submit" className="btn btn-primary">Jelszó megváltoztatása</button>
                </div>
            </form>
        </div>
    );
}

export default Adatlap;
