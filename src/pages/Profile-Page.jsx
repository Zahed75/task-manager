import React, {Fragment, lazy, Suspense} from 'react';
import MasterLayout from "../components/masterLayout/Master-Layout";
import LazyLoader from "../components/masterLayout/LazyLoader";

const Profile = lazy(() => import('../components/Profile/Profile'))
const ProfilePage = () => {
    return (

        <Fragment>
            <MasterLayout>
                <Suspense fallback={<LazyLoader/>}>
                    <h1>Dashboard</h1>
                </Suspense>
            </MasterLayout>
        </Fragment>

    );
};

export default ProfilePage;