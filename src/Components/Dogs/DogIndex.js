import React from 'react';

const styles = {
    img: {
      height: "30em"
    },
  };
  
export default class DogIndex extends React.Component {
    constructor() {
        super();
        this.state = {
            imgURL: "",
        };
		this.getRandomImage = this.getRandomImage.bind(this);
    };
    getRandomImage() {
		fetch('https://dog.ceo/api/breeds/image/random')
			.then(res => res.json())
			.then(json => this.setState({imgURL: json.message}))
			.catch(e => console.error(e))
	}
    componentDidMount () {
		this.getRandomImage();
    }

    render() {
        const { imgURL } = this.state;
        return (
          <div style={styles}>
            <h3>Random Dog Picture:</h3>
				<div>
					<img style={styles.img} alt="Dogs" src={imgURL}/>
				</div>
            <br/>
				<p>
					<button onClick={this.getRandomImage}>Random Picture</button> 
				</p>
          </div>
        );
      }
}
