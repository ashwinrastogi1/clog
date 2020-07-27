import React from 'react';
import { RecipeSection } from '../react/recipe_section';

export default class BlogPost extends React.PureComponent {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <RecipeSection title={'Section'} onSectionComplete={() => {}} steps={['step1', 'step2']}/>
        );
    }
}