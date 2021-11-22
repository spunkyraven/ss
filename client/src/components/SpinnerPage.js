import React from 'react'
import { Spinner } from "react-bootstrap";

function SpinnerPage() {
    return (
        <Spinner
                  as="span"
                  animation="border"
                  variant="danger"
                  size="sm"
                  role="status"
                  aria-hidden="true"
        />
    )
}

export default SpinnerPage
