import React,{ Component } from 'react';
import ImageList from './components/imagelist';
import axios from 'axios';
import ReactDom from 'react-dom';
class App extends Component {
    constructor(props) {
        super(props);
        this.state = { images : [] ,text : "" };
    }
    componentWillMount() {
        axios.get("https://api.imgur.com/3/gallery/hot/viral/0")
        .then((images) => {
             this.setState({ images : images.data.data });
            console.log(this.state.images); });
        axios.get("http://www.randomtext.me/api")
        .then((text) => {
            this.setState({text : text.text_out})
        });
    }
    render() {
        return (
        <div>
        <h2 className="centered">Gallery</h2>
        <ImageList images={this.state.images} text={this.state.text} />
        </div>
    );
    }
    
}
Meteor.startup(() => {
    ReactDom.render(<App />,document.querySelector('.container'));
    axios.get("https")
});