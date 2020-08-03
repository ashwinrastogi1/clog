import React from 'react';
import style from '../static/text.module.css';
import cx from 'classnames';

interface TextProps {
    variant?: 'small' | 'standard' | 'large';
}

export class Text extends React.PureComponent<TextProps>{
    constructor(props: TextProps) {
        super(props);
    }

    render() {
        let {variant} = this.props;
        variant = variant !== undefined ? variant: 'standard';
        const textClasses = cx({
            [style.small_text]: variant === 'small',
            [style.standard_text]: variant === 'standard',
            [style.large_text]: variant === 'large',
        })

        return <div className={textClasses}>
            {this.props.children}
        </div>
    }
}

interface TitleProps {
    variant?: 'standard' | 'large';
}

export class Title extends React.PureComponent<TitleProps> {
    constructor(props: TitleProps) {
        super(props);
    }

    render() {
        let {variant} = this.props;
        variant = variant !== undefined ? variant : 'standard';

        const titleClasses = cx({
            [style.standard_title]: variant === 'standard',
            [style.large_title]: variant === 'large',
        })
        return <div className={titleClasses}>
            {this.props.children}
        </div>
    }
}