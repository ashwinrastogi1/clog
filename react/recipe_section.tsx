import React from 'react';
import { SectionHeader } from './section_header';
import style from '../static/recipe-section.module.css'

export interface RecipeSectionProps {
    title: string;
    steps: string[];
    onSectionComplete: (sectioName: string) => void;
}

export interface RecipeSectionState {
    isHiddenByUser: boolean;
    sectionCompleted: boolean;
}

export class RecipeSection extends React.PureComponent<RecipeSectionProps, RecipeSectionState> {
    constructor(props: RecipeSectionProps) {
        super(props);
        this.state = {
            isHiddenByUser: false,
            sectionCompleted: false,
        };
    }

    render() {
        return (
            <div className={style.recipe_section}>
                <SectionHeader
                    isHiddenByUser={this.state.isHiddenByUser}
                    onButtonClick={() => {this.setState({isHiddenByUser: !this.state.isHiddenByUser})}}
                >
                    {this.props.title}
                </SectionHeader>
                <ul>
                    {this.state.isHiddenByUser ? null : this.props.steps.map((step: string) => <li>step</li>)}
                </ul>
            </div>
        );
    }
}