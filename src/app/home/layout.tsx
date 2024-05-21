import React from 'react'

const HomeLayout = ({ children }: {
    children: React.ReactNode
}) => {
    return (
        <div>
            <h2>Home layout</h2>
            {children}
        </div>
    )
}

export default HomeLayout