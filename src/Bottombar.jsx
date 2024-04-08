import PropTypes from 'prop-types';
import React from "react";


/**
 * Minimal Bottombar React Component.
 *
 * @author [Amol Meshram](https://github.com/j4jinx)
 */
const Bottombar = (props) => {
    const {
        opened = true,
        color = '#ffffff',
        height = 56,
        children,
        ...rest
    } = props;


    return (
        <div title="bottombar"
            style={{
                display: `block`,
                position: `fixed`,
                bottom: 0,
                left: 0,
                right: 0,
                width: `100%`,
                boxShadow: `0px -1px 4px -1px rgba(0, 0, 0, 0.2), 0px -1px 5px 0px rgba(0, 0, 0, 0.14), 0px 0px 5px 0px rgba(5, 5, 5, 0.12)`,
                willChange: `transform`,
                transition: `transform 200ms linear`,
                zIndex: 1002,
                height: `${Number(height)}px`,
                transform: (opened ? `translateY(0%)` : `translateY(110%)`),
            }}
            {...rest}
        >
            <div title="bottombar-container"
                style={{
                    WebkitUserSelect: `none`,
                    userSelect: `none`,
                    width: `100%`,
                    height: `${Number(height)}px`,
                    display: `flex`,
                    flexFlow: `row nowrap`,
                    alignItems: `center`,
                    backgroundColor: `${color}`
                }}
            >
                {children}
            </div>
        </div>
    );
};

Bottombar.propTypes = {
    /**
    * If true, the Bottombar is open   
    */
    opened: PropTypes.bool,
    /**
    * Bottombar Color   
    */
    color: PropTypes.string,
    /**
   * Bottombar Height   
   */
    height: PropTypes.number,
    /**
     * Bottombar children, usually icons and buttons
     * @ignore
     */
    children: PropTypes.node
};

Bottombar.defaultProps = {
    opened: true,
    color: '#ffffff',
    height: 56,
};

export default Bottombar;