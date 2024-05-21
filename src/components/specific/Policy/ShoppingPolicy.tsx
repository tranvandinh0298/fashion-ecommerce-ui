import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock, faRocket, faSync, faTag } from '@fortawesome/free-solid-svg-icons';

const ShoppingPolicy = () => {
  return (
    <section className="shop-services section">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-6 col-12">
            <div className="single-service">
              <FontAwesomeIcon icon={faRocket} />
              <h4>Free shiping</h4>
              <p>Orders over $100</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-12">
            <div className="single-service">
              <FontAwesomeIcon icon={faSync} />
              <h4>Free Return</h4>
              <p>Within 30 days returns</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-12">
            <div className="single-service">
              <FontAwesomeIcon icon={faLock} />
              <h4>Sucure Payment</h4>
              <p>100% secure payment</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-12">
            <div className="single-service">
              <FontAwesomeIcon icon={faTag} />
              <h4>Best Peice</h4>
              <p>Guaranteed price</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ShoppingPolicy;