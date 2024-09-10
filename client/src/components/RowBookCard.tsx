import React from "react"
import { Book } from "../types/common"

interface Props {
	book: Book | null
	highlightBorder?: string
}

export const RowBookCard = ({book, highlightBorder, children}: React.PropsWithChildren<Props>) => {
	return (
		<div className = {`tw-border ${highlightBorder && highlightBorder !== "" ? "tw-border-red-500" : "tw-border-gray-300"} tw-flex tw-flex-col tw-gap-y-4 tw-p-2 lg:tw-flex-row lg:tw-gap-x-4 tw-rounded-lg tw-shadow-sm`}> 
			<img className = "tw-w-full tw-h-auto lg:tw-w-1/4 lg:tw-h-1/4" src = {book?.imageURL} alt={book?.title}/>
			<div className = "tw-p-4 tw-flex tw-flex-col tw-gap-y-2">
				<div className = "tw-flex tw-flex-col tw-gap-y-2 tw-pb-2">
					<span className = "tw-font-bold tw-text-xl">{book?.title}</span>
					<span className = "tw-text-lg">{book?.author}</span>
				</div>
				{children}
			</div>
		</div>
	)
}