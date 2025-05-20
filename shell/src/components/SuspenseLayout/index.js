import React, { Suspense } from "react"
import PropTypes from "prop-types"

const SuspenseLayout = ({ children, fallback = null }) => {
    return <Suspense fallback={fallback}>{children}</Suspense>
}

export default SuspenseLayout

SuspenseLayout.propTypes = {
    children: PropTypes.node,
    fallback: PropTypes.oneOfType([PropTypes.string, PropTypes.element, PropTypes.node]),
}
