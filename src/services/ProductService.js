import axios from 'axios';

export class ProductService {

    //baseUrl = "http://localhost:8080/api/producto";

    baseUrl = "https://bqmongo.herokuapp.com/api/producto";

    createProduct(producto) {
        return axios.post(this.baseUrl, producto).then(res => res.data);
    }

    //READ
    readAll() {
        return axios.get(this.baseUrl).then(res => res.data);
    }

    //UPDATE
    updateProduct(producto) {
        return axios.put(this.baseUrl + "/" + producto.id, producto).then(res => res.data);
    }

    //DELETE
    deleteProduct(_id) {
        return axios.delete(this.baseUrl + "/" + _id).then(res => res.data);
    }

    findProductById(_id) {
        return axios.get(this.baseUrl + "/" + _id).then(res => res.data);
    }

}



//return axios.put(this.baseUrl+"/"+producto.id, producto).then(res => res.data);
//        return axios.delete(this.baseUrl+"/"+id).then(res => res.data);