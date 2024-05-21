import React from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

interface Breadcrumb {
    label: string;
    href: string;
    active?: boolean;
}

const Breadcrumbs = ({ breadcrumbs, ...props }: {
    breadcrumbs: Breadcrumb[];
}) => {
    const count = breadcrumbs.length;
    return (
        <div className="breadcrumbs">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="bread-inner">
                            <ul className="bread-list">
                                {breadcrumbs.map((breadcrumb, index) => (
                                    <li className={breadcrumb.active ? 'active' : ''}>
                                        <Link href={breadcrumb.href}>{breadcrumb.label} {index < count - 1 ? (
                                            <FontAwesomeIcon icon={faChevronRight} />
                                        ) : null}</Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Breadcrumbs;