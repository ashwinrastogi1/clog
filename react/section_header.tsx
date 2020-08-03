import React from 'react';
import Button from 'react-bootstrap/Button';
import {Title} from './typography';
import classNames from 'classnames'
import style from '../static/recipe-section.module.css';

export interface SectionHeaderProps {
    isHiddenByUser: boolean;
    onButtonClick: () => void;
}

export class SectionHeader extends React.PureComponent<SectionHeaderProps> {
    constructor(props) {
        super(props);
    }

    render() {
        const headerClasses = classNames({
            [style.section_header]: true,
            [style.section_open]: !this.props.isHiddenByUser,
            [style.section_hidden]: this.props.isHiddenByUser,
        });
        return (
            <div className={headerClasses}>
                <Title variant={'large'}>{this.props.children}</Title>
                <Button onClick={(event) => this.props.onButtonClick()} className={style.section_hide}>
                    <span>{this.props.isHiddenByUser ? 'Show' : 'Hide'}</span>
                </Button>
            </div>
        );
    }
}