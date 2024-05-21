import React from 'react'

const ProductLayout = ({ children }: {
    children: React.ReactNode
}) => {
    return (
        <div>
            <h2>ProductLayout</h2>
            {children}
        </div>
    )
}

export default ProductLayout