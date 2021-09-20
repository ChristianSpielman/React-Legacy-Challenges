import React from 'react';
 
const CatList = (props) => {
	return (
	<div>
		{props.cat.map((breed) => {
			return <h3 key={breed}>{breed} </h3>
		})}
		</div>
	)
}
 
export default CatList;