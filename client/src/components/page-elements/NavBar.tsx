import React, {useState} from "react"
import { Link, useLocation } from 'react-router-dom';
import { HOME, BOOKS_BROWSE, BOOKS_SEARCH, LOCATIONS, ACCOUNT } from "../../helpers/routes"

type Link = {
	pathname: string	
	text: string
	secondary?: Array<Link>
}

type DropdownProps = {
	links: Array<Link>
}

const NavBarDropdown = ({links}: DropdownProps) => {
	return (
		 <ul className="tw-top-16 tw-absolute tw-invisible group-hover:tw-visible tw-opacity-0 group-hover:tw-opacity-100 tw-transition-opacity tw-duration-300 tw-bg-white tw-text-white tw-py-2 tw-rounded-b-lg tw-shadow-lg tw-w-48">
			{links.map((link) => {
				return (
				<li>
	            	<Link to={link.pathname} className="tw-block tw-px-4 tw-py-2 tw-text-sm tw-text-black">
	            	{link.text}
	            	</Link>
	            </li>	
				)	
			})}				            
		</ul>
	)
}

export const NavBar = () => {
	const { pathname } = useLocation()
	const links: Array<Link> = [
	{
		pathname: HOME, text: "Home", secondary: []
},
	{
		pathname: "#", text: "Books", secondary: [
			{
				pathname: BOOKS_BROWSE, text: "Browse"
			}, 
			{
				pathname: BOOKS_SEARCH, text: "Search"
			}]
		},
	{
		pathname: LOCATIONS, text: "Locations", secondary: [],
	},
	{
		pathname: ACCOUNT, text: "Account", secondary: []
	},
	]
	return (
		<nav className="tw-px-14 sm:tw-px-36 tw-h-16 tw-bg-primary">
	    	<ul className="tw-h-full tw-flex tw-items-center tw-space-x-4">
	        	{
	        		links.map((link) => {
	        			if (link.secondary?.length){
	        				return (
						        <li className="tw-h-full tw-flex tw-items-center tw-relative tw-group">
						        	<Link to={link.pathname} className = "tw-text-white">{link.text}</Link>
						        	<NavBarDropdown links={link.secondary ?? []}/>
						        </li>
	    					)
	        			}
	        			else {
		        			return (
		        				<li className = "tw-h-full tw-flex tw-items-center">
							        <Link to={link.pathname} className="tw-text-white">
								        {link.text}
							        </Link>
						    	</li>
		        			)
	        			}
	        		})
	        	}
	    	</ul>
	    </nav>
	)	
}