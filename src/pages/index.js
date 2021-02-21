import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
// This ensures that the icon CSS is loaded immediately before attempting to render icons
import '@fortawesome/fontawesome-svg-core/styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { config } from '@fortawesome/fontawesome-svg-core';
import '../Styles/style.scss';
// Prevent fontawesome from dynamically adding its css since we did it manually above
config.autoAddCss = false;
library.add(fab, faArrowRight);

const CoverPage = () => {
    return (
        <main className="coverpage-main">
            <div className="coverpage-wrapper">
                <h1>George Simpson</h1>
                <h2>Camera Operator / Steadicam Operator</h2>
                <h3>New website coming soon!</h3>
                <div className="coverpage-links">
                    <a href="tel:+44 (0)7767398693">+44 (0)7767398693</a>
                    <a href="mailto:georgesimpsonwork@gmail.com">
                        georgesimpsonwork@gmail.com
                    </a>
                    <div className="coverpage-socials">
                        <a
                            href="https://www.instagram.com/george___simpson/"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Follow on Instagram"
                            className="coverpage-socials-icon"
                        >
                            <FontAwesomeIcon
                                icon={['fab', 'instagram']}
                                size="2x"
                            />
                        </a>

                        <a
                            href="https://www.linkedin.com/in/george-simpson-82843541/"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Connect on LinkedIn"
                            className="coverpage-socials-icon"
                        >
                            <FontAwesomeIcon
                                icon={['fab', 'linkedin']}
                                size="2x"
                            />
                        </a>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default CoverPage;
