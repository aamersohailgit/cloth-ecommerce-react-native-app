import axios from "axios";
import { useEffect, useState } from "react";

const useFetch = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchData = async () => {
        setLoading(true);
        try {
            const response = await axios.get('http://localhost:8000/products/');
            setData(response.data);
            setLoading(false);
        } catch (error) {
            setError(error);
            setLoading(false);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchData();
    }, []);

    const refresh = () => {
        setLoading(true);
        fetchData();
    }

    return {data, loading, error, refresh};

}

export default useFetch;