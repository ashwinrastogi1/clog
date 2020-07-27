import React from 'react';
import Button from 'react-bootstrap/Button'

export interface SectionHeaderProps {
    isHiddenByUser: boolean;
    onButtonClick: () => void;
}

export class SectionHeader extends React.PureComponent<SectionHeaderProps> {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                {this.props.children}
                <Button onClick={(event) => this.props.onButtonClick()}>
                    {this.props.isHiddenByUser ? 'Show' : 'Hide'}
                </Button>
            </div>
        );
    }
}