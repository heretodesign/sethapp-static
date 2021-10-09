import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

export interface ILoadingToRedirectProps {
    initial: number;
}
const LoadingToRedirect: React.FC = () => {
    const [count, setCount] = useState(4);
    const history = useHistory();

    useEffect(() => {
        const interval = setInterval(() => {
            setCount((currentCount) => --currentCount);
        }, 1000);
        count === 0 && history.push('/');

        return () => clearInterval(interval);
    }, [count, history]);

    return (
        <div className="container p-5 text-center">
            <h1 data-testid="redirect">Redirecting you in {count} seconds</h1>
        </div>
    );
};

export default LoadingToRedirect;
