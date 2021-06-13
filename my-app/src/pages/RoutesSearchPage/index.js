import {RoutesSearchPage} from './RoutesSearchPage';
import {connect} from 'react-redux';
import {routesSetTermAction, routesSetFindParent, routerDelete} from '../../store/routes/actions';

const mapStateToProps = (state) => {
    const {routesSearch} = state;
    return Object.assign({}, routesSearch);
}

const mapDispatchToProps = (dispatch) => {
    return {
        setTerm: (term) => dispatch(routesSetTermAction(term)),
        setFindParents: (find) => dispatch(routesSetFindParent(find)),
        deleteRoute: (id) => dispatch(routerDelete(id)),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(RoutesSearchPage);