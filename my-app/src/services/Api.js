import axios from "axios";

export class Api {
    axios;

    constructor(conf) {
        this.axios = axios.create(conf);
        this.getUri = this.getUri.bind(this);
        this.request = this.request.bind(this);
        this.get = this.get.bind(this);
        this.options = this.options.bind(this);
        this.delete = this.delete.bind(this);
        this.head = this.head.bind(this);
        this.post = this.post.bind(this);
        this.put = this.put.bind(this);
        this.patch = this.patch.bind(this);
        this.success = this.success.bind(this);
        this.error = this.error.bind(this);
    }

    getUri(config) {
        return this.axios.get(config);
    }

    request(config) {
        return this.axios.request(config);
    }

    get(url, config) {
        return this.axios.get(url, config);
    }

    options(url, config){
        return this.axios.options(url, config);
    }

    delete(url, config){
        return this.axios.delete(url, config);
    }

    head(url, config){
        return this.axios.head(url, config);
    }

    post(url, data, config){
        return this.axios.post(url, data, config);
    }

    put(url, data, config){
        return this.axios.put(url, data, config);
    }

    patch(url, data, config){
        return this.axios.patch(url, data, config);
    }

    success(response){
        return response.data;
    }

    error(error){
        return error.response || error.message
    }
}