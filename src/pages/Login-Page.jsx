import React, {lazy, Suspense} from 'react';
import MasterLayout from "../components/masterLayout/Master-Layout";
import LazyLoader from "../components/masterLayout/LazyLoader";

const Login = lazy(() => import('../components/Login/Login'))
const LoginPage = () => {
    return (
        <div>
            <MasterLayout>
                <Suspense fallback={<LazyLoader/>}>
                    <Login/>
                </Suspense>
            </MasterLayout>
        </div>
    );
};

export default LoginPage;