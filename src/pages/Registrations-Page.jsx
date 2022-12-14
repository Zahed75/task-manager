import React, {Fragment, lazy, Suspense} from 'react';

import LazyLoader from "../components/masterLayout/LazyLoader";

const Registrations = lazy(() => import('../components/Registrations/Registrations'))


const RegistrationsPage = () => {
    return (

        <Fragment>

            <Suspense fallback={<LazyLoader/>}>
                <Registrations/>
            </Suspense>

        </Fragment>

    );
};

export default RegistrationsPage;