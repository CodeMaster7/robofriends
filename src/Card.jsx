import React from 'react'

// props never change, are always just inputs we get and we never modified them
const Card = ({ name, email, id }) => {
	return (
		<div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
			<img src={`https://robohash.org/${id}?200x200`} alt='robots' style={{ width: 200, height: 200 }} />
			<div>
				<h2>{name}</h2>
				<p>{email}</p>
			</div>
		</div>
	)
}

export default Card
