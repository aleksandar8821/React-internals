import { useState } from "react";

const useFetch = () => {
    const [data, setdata] = useState(null);
    const [loading, setloading] = useState(true);
    const [error, seterror] = useState("");

    console.log("hook call");

    const makeRequest = (url) => {
        fetch(url)
        .then((res) => res.json())
        .then((data) => {
            seterror(data.error)
            setdata(data)
            setloading(false)
        })
    }

    return { makeRequest, data, loading, error };
};

export default useFetch;