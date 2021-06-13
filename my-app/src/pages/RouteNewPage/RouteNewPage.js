import {RouterForm} from '../../containers'

export const RouteNewPage = (props) => {
    const {createRoute} = props;

    return (
        <>
            <RouterForm save={createRoute}/>
        </>
    )
}