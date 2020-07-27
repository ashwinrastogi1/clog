import React from 'react';
import Button from 'react-bootstrap/Button'
import styles from './styles/recipe-section.modules.css'

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
                    <span>{this.props.isHiddenByUser ? 'Show' : 'Hide'}</span>
                </Button>
            </div>
        );
    }
}