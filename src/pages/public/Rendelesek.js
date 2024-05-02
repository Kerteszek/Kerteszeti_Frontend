import React, { useEffect, useState } from 'react';
import axios from '../../api/axios';
import useAuthContext from '../../context/AuthContext';
import './Rendelesek.css';

export default function Rendelesek() {
    const [rendelesek, setRendelesek] = useState([]);
    const [loading, setLoading] = useState(true);
    const { user, getUser } = useAuthContext();
    const user_id = user ? user.id : null;

    useEffect(() => {
        if (!user) {
            getUser();
        }
    }, [user, getUser]);

    useEffect(() => {
        if (user_id) {
            fetchRendelesek();
        }
    }, [user_id]);

    const fetchRendelesek = async () => {
        try {
            const response = await axios.get(`/api/rendelesek/${user_id}`);
            const groupedRendelesek = groupByPurchaseNumber(response.data);
            setRendelesek(groupedRendelesek);
            setLoading(false);
        } catch (error) {
            console.error('Error fetching rendelesek:', error);
        }
    };

    const groupByPurchaseNumber = (data) => {
        const groupedData = {};
        data.forEach(item => {
            if (groupedData[item.purchase_number]) {
                groupedData[item.purchase_number].push(item);
            } else {
                groupedData[item.purchase_number] = [item];
            }
        });
        return groupedData;
    };

    const calculateGrandTotal = (items) => {
        return items.reduce((total, item) => total + item.price * item.quantity, 0);
    };

    if (loading) {
        return <h4>Rendelések betöltése folyamatban!</h4>;
    }

    return (
        <div className='rendelesek'>
            {Object.entries(rendelesek).map(([purchase_number, items]) => (
                <div key={purchase_number} className="rendelesek-table">
                    <h3>Rendelés száma: {purchase_number}</h3>
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Termék neve</th>
                                <th>Mennyiség</th>
                                <th>Ár</th>
                            </tr>
                        </thead>
                        <tbody>
                            {items.map((item, index) => (
                                <tr key={index}>
                                    <td>{item.name}</td>
                                    <td>{item.quantity}</td>
                                    <td>{item.price}</td>
                                </tr>
                            ))}
                        </tbody>
                        <tfoot>
                            <tr>
                                <td colSpan="2">Összesen</td>
                                <td>{calculateGrandTotal(items)}</td>
                            </tr>
                        </tfoot>
                    </table>
                </div>
            ))}
        </div>
    );
}
