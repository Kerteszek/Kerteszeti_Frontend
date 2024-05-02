import axios from "axios";
import { useState, useEffect } from "react";

const baseURL = "http://127.0.0.1:8000/api/";

export function useGet(endpoint) {
    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(baseURL + endpoint);
                setData(response.data);
            } catch (error) {
                console.error("HIBA adatlekérés közben:", error);
            }
        };
        fetchData();
    }, [endpoint]);
    return data;
}

export function usePost(endpoint, requestData) {
    const [data, setData] = useState(null);

    useEffect(() => {
        const postData = async () => {
            try {
                const response = await axios.post(baseURL + endpoint, requestData);
                setData(response.data);
            } catch (error) {
                console.error("HIBA új adat felvitele közben:", error);
            }
        };
        postData();
    }, [endpoint, requestData]);
    return data;
}

export function usePatch(endpoint, requestData) {
    const [data, setData] = useState(null);

    useEffect(() => {
        const patchData = async () => {
            try {
                const response = await axios.patch(baseURL + endpoint, requestData);
                setData(response.data);
            } catch (error) {
                console.error("HIBA adat áltoztatás közben:", error);
            }
        };
        patchData();
    }, [endpoint, requestData]);
    return data;
}

export function useDelete(endpoint) {
    const [data, setData] = useState(null);

    useEffect(() => {
        const deleteData = async () => {
            try {
                const response = await axios.delete(baseURL + endpoint);
                setData(response.data);
            } catch (error) {
                console.error("HIBA törlés közben:", error);
            }
        };
        deleteData();
    }, [endpoint]);
    return data;
}
/**Hogyan kell hívni őket! Példák
 *
 import { usePost } from "../../model/Axios";
 const termekData = usePost('create_product', requestData);
 
 import { useGet } from "../../model/Axios";
 const termekData = useGet(`konkret_product/${state.termek_id}`);

import { usePatch } from "../../model/Axios";
const termekData = usePatch(`update_product/${productId}`, updateData);

import { useDelete } from "../../model/Axios";
const termekData = useDelete(`delete_product/${productId}`);
 */