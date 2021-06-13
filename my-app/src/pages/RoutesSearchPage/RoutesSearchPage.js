import React from 'react';
import {RouterSearch, RouterTable} from '../../containers'

export const RoutesSearchPage = (props) => {

    const {term, loading, routes, setTerm, findParent, setFindParents, deleteRoute} = props;

    return (
        <>
            <RouterSearch term={term} search={setTerm} loading={loading} padres={findParent}
                          setFindParents={setFindParents}/>
            <RouterTable data={routes} erase={deleteRoute}/>
        </>
    )
}