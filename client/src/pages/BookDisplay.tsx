import React, { useEffect } from "react"
import { Link, Outlet, useLocation } from "react-router-dom" 
import { PageHeader } from "../components/page-elements/PageHeader" 
import { BOOKS, BOOKS_BROWSE, BOOKS_SEARCH } from "../helpers/routes"
import { Container } from "../components/page-elements/Container"

export const BookDisplay = () => {
	const { pathname } = useLocation() 

	const subText = () => {
		if (pathname === BOOKS_BROWSE){
			return (
				<p className = "tw-text-white"><Link className = "tw-text-white" to = {BOOKS_BROWSE}>{"Browse "}</Link>{"from our collection!"}</p>
			)
		}
		else if (pathname === BOOKS_SEARCH){
			return (
				<p className = "tw-text-white"><Link className = "tw-text-white" to = {BOOKS_SEARCH}>{"Search "}</Link>{"our collection!"}</p>
			)
		}
		return (
			<p className = "tw-text-white">
				<span><Link className = "tw-text-white" to = {BOOKS_BROWSE}>Browse</Link>{" or "}<Link className = "tw-text-white" to = {BOOKS_SEARCH}>{" Search "}</Link></span>
				{"from our collection!"}
			</p>
		)
	}

	return (
		<div className = "tw-w-full tw-flex tw-flex-col tw-mt-4 tw-gap-y-4">
			<PageHeader>
				<p className = "tw-my-1 tw-text-4xl tw-font-bold tw-text-white">Books</p>	
				{subText()}
			</PageHeader>
			<Container>
				<Outlet/>
			</Container>
		</div>
	)
}