import {connect} from 'react-redux'
import {RouteNewPage} from './RouteNewPage';
import {routerNew} from "../../store/routes/actions";

const mapStateToProps = () => null

const mapDispatchToProps = (dispatch) => {
    return {
        createRoute: (router) => dispatch(routerNew(router)),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(RouteNewPage)