import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import useAuthContext from "../context/AuthContext";
import axios from '../api/axios';

function Adatlap() {
    const { user, getUser, errors, setErrors, changePassword } = useAuthContext();

    useEffect(() => {

        if (!user) {
            getUser();
        }
    }, [user, getUser]);

    //console.log(user?.id)

    const [deliveryInfo, setDeliveryInfo] = useState({
        name: user?.name || '',
        address: ''
    });

    const [billingInfo, setBillingInfo] = useState({
        name: user?.name || '',
        address: ''
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
            name: user?.name || '',
            address: ''
        });
        setBillingInfo({
            name: user?.name || '',
            address: ''
        });
    };

    const handlePasswordSubmit = async (e) => {
        e.preventDefault();

        try {
            if (passwordInfo.newPassword !== passwordInfo.confirmPassword) {
                setErrors({ password_confirmation: ["A jelszavak nem egyeznek"] });
                return;
            }

            if (passwordInfo.newPassword.length < 8) {
                setErrors({ password: ["A jelszónak legalább 8 karakter hosszúnak kell lennie"] });
                return;
            }
            console.log(passwordInfo.currentPassword);
            const response = await axios.post("/api/verify_password", { current_password: passwordInfo.currentPassword });
            //console.log(response);

            if (response.data === 0) {
                console.log("Nem jó jelszó");
                setErrors({ current_password: ["Nem jó jelszó"] });
            } else {
                await changePassword({
                    password: passwordInfo.newPassword,
                    password_confirmation: passwordInfo.confirmPassword,
                });

                setPasswordInfo({
                    currentPassword: '',
                    newPassword: '',
                    confirmPassword: ''
                });
                console.log("A jelszó megváltoztatása sikerült!");
            }
            setErrors({});

        } catch (error) {
            console.error("Hiba: a jelszó megváltoztatása nem sikerült: ", error);
            if (error.response && error.response.status === 422) {
                setErrors(error.response.data.errors);
            }
        }
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
                    <label htmlFor="currentPassword" className="form-label">
                        Jelenlegi jelszó:
                    </label>
                    <input
                        type="password"
                        value={passwordInfo.currentPassword}
                        onChange={handlePasswordChange}
                        className="form-control"
                        id="currentPassword"
                        placeholder="Jelenlegi jelszó"
                        name="currentPassword"
                    />
                    {errors.password && !errors.password_confirmation && (
                        <div>
                            <span className="text-danger">{errors.password[0]}</span>
                        </div>
                    )}
                    {errors.current_password && (
                        <div>
                            <span className="text-danger">{errors.current_password[0]}</span>
                        </div>
                    )}
                </div>

                <div className="mb-3">
                    <label htmlFor="newPassword" className="form-label">
                        Új jelszó:
                    </label>
                    <input
                        type="password"
                        value={passwordInfo.newPassword}
                        onChange={handlePasswordChange}
                        className="form-control"
                        id="newPassword"
                        placeholder="Új jelszó"
                        name="newPassword"
                    />
                    {errors.password && (
                        <div>
                            <span className="text-danger">{errors.password[0]}</span>
                        </div>
                    )}
                </div>

                <div className="mb-3">
                    <label htmlFor="confirmPassword" className="form-label">
                        Jelszó újra:
                    </label>
                    <input
                        type="password"
                        value={passwordInfo.confirmPassword}
                        onChange={handlePasswordChange}
                        className="form-control"
                        id="confirmPassword"
                        placeholder="Jelszó újra"
                        name="confirmPassword"
                    />
                    {passwordInfo.newPassword !== passwordInfo.confirmPassword && (
                        <div>
                            <span className="text-danger">A jelszavak nem egyeznek</span>
                        </div>
                    )}
                </div>
                <div className="d-flex justify-content-end">
                    <button type="submit" className="btn btn-primary">
                        Jelszó változtatása
                    </button>
                </div>
            </form>
        </div>
    );
}

export default Adatlap;
