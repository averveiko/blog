import React from 'react';

const Article = (props) => {
    console.log('props:', props);
    return (
        <div className="row">
            <div className="col s12">
                <div className="container">
                    <h4>{props.data.title}</h4>
                    {/* <div class="divider"></div> */}
                    
                    <div class="chip">
                        Tag One
                        <i class="close material-icons">close</i>
                    </div>
                    <div class="chip">
                        Tag Two
                        <i class="close material-icons">close</i>
                    </div>

                    <p className="light">
                        {props.data.preview}
                    </p>
                    
                    <p className="light hide">
                        {props.data.body}
                    </p>
                    <a className="waves-effect waves-light btn">
                        <i className="material-icons left">visibility</i>
                            Читать
                    </a>

                    
    
                    
                </div>
            </div>
        </div>       
    );
}

export default Article;

/* <div className="row">
            <div className="col s12">
                <div className="container">
                    <div className="section">
                        <h4>{props.data.title}</h4>
                        <p className="light">
                            {props.data.preview}
                        </p>
                        <p className="light hide">
                        {props.data.body}
                        </p>
                        <a className="waves-effect waves-light btn">
                            <i className="material-icons left">visibility</i>
                            Читать
                        </a>
                    </div>
                </div>
            </div>
        </div> */