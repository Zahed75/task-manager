import React, {Fragment, lazy, Suspense} from 'react';
import MasterLayout from "../components/masterLayout/Master-Layout";
import LazyLoader from "../components/masterLayout/LazyLoader";

const Login = lazy(() => import('../components/Login/Login'))
const LoginPage = () => {
    return (

        <Fragment>
            <MasterLayout>
                <Suspense fallback={<LazyLoader/>}>
                    <Login/>
                </Suspense>
            </MasterLayout>
        </Fragment>

    );
};

export default LoginPage;