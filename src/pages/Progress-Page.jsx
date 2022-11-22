import React, {Suspense} from 'react';
import MasterLayout from "../components/masterLayout/Master-Layout";
import LazyLoader from "../components/masterLayout/LazyLoader";

const ProgressPage = () => {
    return (
        <div>
            <MasterLayout>
                <Suspense fallback={<LazyLoader/>}>
                    <h1>Dashboard</h1>
                </Suspense>
            </MasterLayout>
        </div>
    );
};

export default ProgressPage;