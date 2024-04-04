//**https://www.freecodecamp.org/news/how-to-use-axios-with-react/#how-to-set-up-axios-with-react */
/**https://www.knowledgehut.com/blog/web-development/axios-in-react */
/**https://www.geeksforgeeks.org/axios-in-react-a-guide-for-beginners/#get-request-with-axios */

import axios from "axios";
import React, { useState, useEffect } from "react";

const baseURL = "http://127.0.0.1:8000/api/";
//http://127.0.0.1:8000
//-|Docker
//http://localhost:8000

export default function Axios({ endpoint }) {
    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(baseURL + endpoint);
                setData(response.data);

            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, [endpoint]);
    return data;
}

export function useGet(endpoint){
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try{
                const response = await axios.get(baseURL + endpoint);
                setData(response.data);
            } catch(error){
                console.error("HIBA adatlekérés közben:", error);
            }
        };
        fetchData();
    }, [endpoint]);
    return data;
}
