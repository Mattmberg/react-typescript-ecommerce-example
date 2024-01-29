import { Key, useEffect, useState } from "react";

interface Product {
    id: Key;
    title: String;
    description: String;
    price: Number;
}

export default function StorePage() {
    const [data, setData] = useState<Product[] | any>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
    fetch('https://dummyjson.com/products')
    .then(response => {
        if (response.ok) {
        return response.json()
        }
        throw response;
    })
    .then(data => {
        setData(data);
    })
    .catch(error => {
        console.error("Error fecthing data: ", error);
        setError(error);
    })
    .finally(() => {
        setLoading(false);
    })
    }, [])

    if (loading) return <div><p>"Loading..."</p></div>;
    if (error) return <div><p>"Error!"</p></div>;

    return (
        <div className='container'>
            {data.products.map((product: Product) => {
            return (
                <div key={product.id}>
                <h3>{product.title}</h3>
                <p>{product.description}</p>
                <p>${product.price.toString()}</p>
                </div>
            )
            })}
        </div>
    );
}
