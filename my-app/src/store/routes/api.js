import {Api} from "../../services/Api";

export class RoutesApi extends Api {
    constructor(config) {
        super(config);

        this.getAll = this.getAll.bind(this);
        this.getParentsForChildrenID = this.getParentsForChildrenID.bind(this);
        this.getChildrensForChildrenID = this.getChildrensForChildrenID.bind(this);
        this.newRoute = this.newRoute.bind(this);
    }

    getAll() {
        return this
            .get(`/`)
            .then(result => this.success(result));
    }

    deleteRoute(id) {
        return this
            .delete(`/${id}`)
            .then(result => this.success(result));
    }

    newRoute(route) {
        return this
            .post(`/`, route)
            .then(result => this.success(result));
    }

    getParentsForChildrenID(id) {
        return this
            .get(`/padres/${id}`)
            .then(result => this.success(result));
    }

    getChildrensForChildrenID(id) {
        return this
            .get(`/hijos/${id}`)
            .then(result => this.success(result));
    }

}