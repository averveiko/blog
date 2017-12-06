import React, { Component } from 'react';

class Article extends Component {
    constructor(props) {
        super(props);

        this.state = {
            bodyVisible: false
        };

        this.readmoreClick = this.readmoreClick.bind(this);
        this.minimizeClick = this.minimizeClick.bind(this);
    }

    readmoreClick() {
        this.setState({bodyVisible: true});
    }

    minimizeClick() {
        this.setState({bodyVisible: false});
    }

    render() {

        var title = this.props.data.title,
            preview =  this.props.data.preview,
            body = this.props.data.body;
        
        var bodyVisible = this.state.bodyVisible;

    return (
        <div className="row">
            <div className="col s12">
                <div className="container">
                    <h4>{title}</h4>
                    {/* <div class="divider"></div> */}

                    <p className="light">
                        {preview}
                    </p>
                    
                    <p className={'light ' + (bodyVisible ? '' : 'hide')}>
                        {body}
                    </p>
                    <a
                        className={'waves-effect waves-light btn ' + (bodyVisible ? 'hide' : '')}
                        onClick={this.readmoreClick}>
                        <i className="material-icons left">visibility</i>Читать
                    </a>
                    <a
                        className={'waves-effect waves-light btn ' + (bodyVisible ? '' : 'hide')}
                        onClick={this.minimizeClick}>
                        <i className="material-icons left">visibility_off</i>
                        Скрыть
                    </a>                    
                </div>
            </div>
        </div>       
    );
    }
}

export default Article;