import React from 'react';

class EmptyLayout extends React.Component {
    render() {
        return (
            <div className="container">
                {this.props.children}
            </div>
        );
    }
}
export default EmptyLayout;