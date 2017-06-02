//React.render(<img src='http://tinyurl.com.lkevsb9'/>, document.body);

/*
var Photo = React.createClass({
    render: function() {
        return (
            <div className='photo'>
                <img src={this.props.src}/>
                <span>{this.props.caption}</span>        
            </div>
        );
    }
})
*/

var Photo = React.createClass({

    toggleLiked: function(){
        this.setState({
            liked: !this.state.liked
        });
    },

    getInitialState: function(){
        return{
            liked: false
        };
    },

    render: function(){
        var buttonClass = this.state.liked ? 'active' : '';

        return(
            <div className='photo'>
                <img src={this.props.src}/>

                <div className='bar'>
                    <button onClick={this.toggleLiked} className={buttonClass}>
                        ♥
                    </button>
                    <span>{this.props.caption}</span>
                </div>
            </div>
        );
    }
});

var PhotoGallery = React.createClass({
    render: function(){
        var photos = this.props.photos.map(function(photo){
            return <Photo src={photo.url} caption={photo.caption}/>
        });
        return (
            <div className='photo-gallery'>
                {photos}
            </div>
        );
    }
});

var data = [
    {
        url:'http://i63.tinypic.com/70zyfc.jpg',
        caption: 'USS Saratoga'
    },
    {
        url: 'http://i63.tinypic.com/ftpord.jpg',
        caption: 'HIJMS Nagato'
    },
    {
        url: 'http://i68.tinypic.com/2wmfa6o.jpg',
        caption: 'SMS König Albert'
    }
];

React.render(<PhotoGallery photos={data} />, document.body);