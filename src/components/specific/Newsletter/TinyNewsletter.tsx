import React from 'react'

const TinyNewsletter = () => {
    return (
        <div className="single-widget newsletter">
            <h3 className="title">Newslatter</h3>
            <div className="letter-inner">
                <h4>
                    Subscribe & get news <br />
                    latest updates.
                </h4>
                <form method="POST" action="#" className="form-inner">
                    <input
                        type="email"
                        name="email"
                        placeholder="Enter your email"
                    />
                    <button type="submit" className="btn btn-wide">
                        Submit
                    </button>
                </form>
            </div>
        </div>
    )
}

export default TinyNewsletter