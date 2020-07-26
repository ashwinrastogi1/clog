import React from 'react';

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
        if (this.state.isHiddenByUser) {
            return null;
        }
    }
}