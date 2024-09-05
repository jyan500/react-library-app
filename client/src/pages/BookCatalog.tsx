import React, { useState, useEffect } from "react"
import { SearchBar } from "../components/SearchBar" 
import { useForm, FormProvider } from "react-hook-form"
import { Link, useNavigate, useSearchParams } from "react-router-dom"
import { useLazyGetBooksQuery } from "../services/private/book"
import { Book } from "../types/common"
import { LoadingSpinner } from "../components/LoadingSpinner"
import { BOOKS_SEARCH } from "../helpers/routes"
import { IconContext } from "react-icons" 
import { v4 as uuidv4 } from "uuid"
import { GrNext as Next, GrPrevious as Previous } from "react-icons/gr";

type FormValues = {
	query: string
	searchBy: string
	page: number
}

export const BookCatalog = () => {
	let [searchParams, setSearchParams] = useSearchParams();
	let navigate = useNavigate()
	const defaultForm: FormValues = {
		query: "",
		searchBy: "title" ,
		page: 1 
	}
	const [preloadedValues, setPreloadedValues] = useState<FormValues>(defaultForm)
	const methods = useForm<FormValues>({defaultValues: preloadedValues})
	const { register, handleSubmit, reset, watch, setValue, formState: {errors} } = methods
	const registerOptions = {
		query: { required: "Please enter a search query"},
		searchBy: { required: "Please choose a value to search by"}
	}

	useEffect(() => {
		if (searchParams){
			const query = searchParams.get("query")
			const searchBy = searchParams.get("searchBy")
			const page = searchParams.get("page")
			if (query && searchBy && page){
				const form = {
					query, searchBy, page: parseInt(page)
				}
				reset(form)	
				trigger(form)
			}
		}
	}, [searchParams])

	const [trigger, {data, error, isFetching, isLoading}] = useLazyGetBooksQuery()

	const handlePrev = async (prev: number) => {
		setValue("page", prev)
		await handleSubmit(onSubmit)()
	}

	const handleNext = async (next: number) => {
		setValue("page", next)
		await handleSubmit(onSubmit)()
	}

	const onSubmit = (values: FormValues) => {
	    // Call the query with the current genreId when the form is submitted
	    // Update the URL with query parameters without reloading the page
	    trigger(values);
	    navigate(`${BOOKS_SEARCH}?query=${encodeURIComponent(values.query)}&searchBy=${values.searchBy}&page=${values.page}`, { replace: true });
	}

	const paginationRow = ({showPageNums, shouldScrollToTop}: {showPageNums: boolean, shouldScrollToTop: boolean}) => {
		return (
			<div className = "tw-flex tw-items-center lg:tw-gap-x-4">
				{
					data?.pagination ? (
						<>
							<p>Showing {data.pagination.from} - {data.pagination.to} out of {data.pagination.total} results</p>
							<div className = "tw-flex tw-flex-row tw-items-center">
								{
									data.pagination?.prevPage ? (
										<button
			                                className="hover:tw-opacity-60 tw-bg-white tw-text-gray-800 tw-px-2 tw-py-2 tw-rounded-full tw-cursor-pointer"
			                                onClick={(e) => {
			                                	e.preventDefault()
			                                	if (data.pagination.prevPage){
				                                	handlePrev(data.pagination.prevPage)
			                                	}
			                                	if (shouldScrollToTop){
													window.scrollTo({
													    top: 0, 
													    behavior: 'smooth',
												    })
												}
			                                }}
			                            >
			                                <IconContext.Provider value = {{className: "tw-w-4 tw-h-4"}}>
			                                    <Previous/> 
			                                </IconContext.Provider> 
			                            </button>		
									) : null	
								}
								{
									showPageNums ? (
										<div className = "tw-flex tw-flex-row tw-gap-x-1">
											{
												Array.from(Array(data?.pagination?.lastPage), (_, i) => {
												return (
												<Link 
													className = {`tw-px-0.5 ${i+1 === watch("page") ? "tw-font-bold tw-border-b tw-border-gray-800" : ""}`}
													onClick = {() => { 
														if (shouldScrollToTop){
															window.scrollTo({
															    top: 0, 
															    behavior: 'smooth',
														    })
														}
													}}
													key={uuidv4()} 
													to={`${BOOKS_SEARCH}?searchBy=${watch("searchBy")}&query=${encodeURIComponent(watch("query"))}&page=${i+1}`}>
													{i+1}
												</Link>	)
											})
										}	
										</div>
									) : null
								}
								{
									data.pagination?.nextPage ? (
										<button
			                                className="hover:tw-opacity-60 tw-bg-white tw-text-gray-800 tw-px-2 tw-py-2 tw-rounded-full tw-cursor-pointer"
			                                onClick={(e) => {
			                                	e.preventDefault()
			                                	if (data.pagination.nextPage){
				                                	handleNext(data.pagination.nextPage)
			                                	}
			                                	if (shouldScrollToTop){
													window.scrollTo({
													    top: 0, 
													    behavior: 'smooth',
												    })
												}
			                                }}
			                            >
			                                <IconContext.Provider value = {{className: "tw-w-4 tw-h-4"}}>
			                                    <Next/>
			                                </IconContext.Provider> 
			                            </button>		
									) : null 
								}
	                        </div>
	                    </>
	                ) : (null)
				}  
			</div>
		)
	}

	return (
		<div className = "tw-w-full sm:tw-px-36 md:tw-w-full 2xl:tw-w-3/4 tw-flex tw-flex-col tw-gap-y-4">
			<div>
				<FormProvider {...methods}>
					<form>
						<div className = "xl:tw-flex-row xl:tw-items-center xl:tw-justify-between tw-w-full tw-p-4 tw-border tw-border-gray-300 tw-shadow-md tw-rounded-lg tw-flex tw-flex-col">
							<div className = "tw-flex tw-flex-col xl:tw-flex-row tw-gap-y-4 sm:tw-gap-x-4">
								<div className = "tw-flex tw-flex-col xl:tw-flex-row xl:tw-items-center tw-gap-x-2">
									<label className = "tw-w-full tw-font-bold tw-mb-2" htmlFor={"search-by"}>Search By</label>
									<select className = "tw-w-full" id = "search-by" {...register("searchBy", registerOptions.searchBy)}>
										<option key = {"title"} value = "title">Title</option>
										<option key = {"author"} value = "author">Author</option>
										<option key = {"genre"} value = "genre">Genre</option>
									</select>
								</div>
								<SearchBar 
									registerOptions = {registerOptions.query} 
									registerField = {"query"} 
									placeholder = "Search..." 
								/>
								<button onClick={handleSubmit(onSubmit)} className = "button tw-bg-primary">Search</button>
							</div>
							<div className = "tw-flex tw-items-center lg:tw-gap-x-4">
								{paginationRow({showPageNums: false, shouldScrollToTop: false})} 
							</div>
						</div>
						<div className = "tw-mt-2 tw-ml-6 sm:tw-ml-0">
						{Object.keys(registerOptions).map((key) => {
							if (key in errors){
								return (<p key = {key} className = "tw-text-red-500">{errors[key as keyof typeof errors]?.message}</p>)
							}
						}
						)}
						</div>
					</form>
				</FormProvider>
			</div>
			<div className = "tw-flex tw-flex-col">
				{isFetching ? (<LoadingSpinner/>) : (
					<>
					{
						data?.data?.map((row: Book) => {
							return (
								<div key = {row.id} className = "tw-flex tw-flex-row tw-items-center">
									<div className = "tw-w-1/4">
										<img src = {row.imageURL}/>	
									</div>
									<div className = "tw-w-3/4">
										<p>{row.title}</p>	
									</div>
								</div>
							)	
						})
					}
					</>
				)}
			</div>
			<div className = "tw-py-4 tw-border tw-border-gray-300">
				{!isFetching && data?.pagination ? (
					paginationRow({showPageNums: true, shouldScrollToTop: true})	
				) : null}
			</div>
		</div>
	)	
}
