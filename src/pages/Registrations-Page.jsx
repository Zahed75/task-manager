import React, {Fragment, lazy, Suspense} from 'react';
import MasterLayout from "../components/masterLayout/Master-Layout";
import LazyLoader from "../components/masterLayout/LazyLoader";

const Registrations = lazy(() => import('../components/Registrations/Registrations'))


const RegistrationsPage = () => {
    return (

        <Fragment>
            <MasterLayout>
                <Suspense fallback={<LazyLoader/>}>
                    <Registrations/>
                </Suspense>
            </MasterLayout>
        </Fragment>

    );
};

export default RegistrationsPage;