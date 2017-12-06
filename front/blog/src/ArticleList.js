import React from 'react';
import Article from './Article';

const ArticleList = (props) => {
    console.log('props:', props);
    return (
        <div>
        {props.items.map((item, index) => 
            <Article data={item} key={index} />
        )}
        </div>
    );
}

export default ArticleList;