import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Home() {
	return (
		<div>
			Will not redirect to other baseroutes... <br />
			<NavLink to={"/contactApp"} >contactApp</NavLink> | <NavLink to={"/baseApp2"} >baseApp2</NavLink>
		</div>
	)
}
