import React from 'react';

interface RecipeCardProps {
    hasImage: boolean;
    imageUrl: string;
}

export class RecipeCard extends React.PureComponent<RecipeCardProps> {
    constructor(props: RecipeCardProps) {
        super(props);
    }

    render() {
        return <div></div>
    }
}