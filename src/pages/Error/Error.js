import React from "react";
import { Link } from "react-router-dom";
import {
    ErrorPage,
    ErrorContainer
} from './Error.styles';

const Error = () => {
    return (
        <section className="error-page section">
            <ErrorContainer>
                <h1>oops! it's a dead end</h1>
                <Link to="/" className="btn btn-primary">
                    back home
                </Link>
            </ErrorContainer>
        </section>
    );
}

export default Error;