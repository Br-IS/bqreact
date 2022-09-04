import React, {createContext, useEffect, useState} from 'react';
import {ProductService} from "../services/ProductService";

export const ProductContext = createContext();

const ProductContextProvider = (props) => {

    const productService = new ProductService();

    const [products, setProducts] = useState([]);

    const [editProduct, setEditProduct] = useState(null);

    useEffect(() => {
        productService.readAll().then((data) => setProducts(data));
    }, []);


    const createProduct = (producto) => {
        productService.createProduct(producto).then((data) => setProducts([...products, data]));
    };


    const deleteProduct = (_id) => {
        productService.deleteProduct(_id).then((data) => setProducts(products.filter((p) => p.id !== _id)));
    }

    const updateProduct = (producto) => {
        productService.updateProduct(producto).then((data) => {
                setProducts(products.map((p) => (p.id === producto.id ? data : p)));
            }
        );
    }


    const findProduct = (_id) => {
        const product = products.find((p) => p.id === _id);
        setEditProduct(product);
    }

    const findProductById = (_id) => {
            productService.findProductById(_id).then((data) => setEditProduct(data));
        }


    return (<ProductContext.Provider

        value={{
            createProduct,
            deleteProduct,
           // findProduct,
            findProductById,
            updateProduct,
            editProduct,
            products

        }}

    >
        {props.children}
    </ProductContext.Provider>);
}

export default ProductContextProvider;


/*
    /*
    const deleteProduct = (id) => {
        productService.deleteProduct(id).then(() => setProducts(products.filter((p) => p.id !== id)));
    };

    const findProduct = (_id) => {
        const producto = products.find((p) => p._id === id);
        console.log(id);
        setEditProduct(producto);
    };

    const updateProduct = (producto) => {
        productService.updateProduct(producto).then(
            (data) => setProducts(products.map((p) => (p.id === producto.id ? data : producto))
            )
        );

        setEditProduct(null);
    }


    */
