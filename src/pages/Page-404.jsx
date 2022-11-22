import React, {Fragment, lazy, Suspense} from 'react';
import MasterLayout from "../components/masterLayout/Master-Layout";
import LazyLoader from "../components/masterLayout/LazyLoader";

const Page = lazy(() => import('../components/NotFound/NotFound'))

const Page404 = () => {
    return (

        <Fragment>
            <MasterLayout>
                <Suspense fallback={<LazyLoader/>}>
                    <Page/>
                </Suspense>
            </MasterLayout>
        </Fragment>

    );
};

export default Page404;