import React, {useEffect} from 'react';
import {RouterTable} from '../../containers'

export const HomePage = (props) => {

    const {loadData, routes, deleteRoute} = props;

    useEffect(() => {
        loadData();
    }, []);

    return (
        <>
            <RouterTable data={routes} erase={deleteRoute}/>
        </>
    )
}