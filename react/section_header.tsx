import React from 'react';
import Button from 'react-bootstrap/Button';
import style from '../static/recipe-section.module.css'

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
            <div className={style.section_header}>
                {this.props.children}
                <Button onClick={(event) => this.props.onButtonClick()} className={style.section_hide}>
                    <span>{this.props.isHiddenByUser ? 'Show' : 'Hide'}</span>
                </Button>
            </div>
        );
    }
}