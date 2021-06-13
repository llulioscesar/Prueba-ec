import {connect} from "react-redux";
import {routerDelete, routerGet} from "../../store/routes/actions";
import {HomePage} from './HomePage';

const mapStateToProps = (state) => {
    const {home} = state;
    return Object.assign({}, home);
}

const mapDispatchToProps = (dispatch) => {
    return {
        loadData: () => dispatch(routerGet()),
        deleteRoute: (id) => dispatch(routerDelete(id)),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);