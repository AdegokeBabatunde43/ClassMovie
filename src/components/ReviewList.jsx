import React, {useContext, useEffect} from 'react'
import { ReviewContext }from '../ReviewContext'
import ReviewItem from './ReviewItem'

const url= 'https://api.themoviedb.org/3/'
// const key= 'bf5595cb127233997340c64248b9a09a'
// const number ='//https://api.themoviedb.org/3/search/movie?api_key=bf5595cb127233997340c64248b9a09a&query=lost'


const ReviewList = () => {
    const {review, setReview,searchKey,setSelectMovie} = useContext(ReviewContext)

    useEffect(()=>{
      const getReview = async ( ) => {
        const type = searchKey ? 'search' : 'discover'
        const response = await fetch (`${url}${type}/movie?api_key=bf5595cb127233997340c64248b9a09a&query=${searchKey}`)
        const review = await response.json()
        setReview(review.results)
        setSelectMovie(review.results[0])
        console.log(review.results)
      }
      getReview()
    },[setReview, setSelectMovie, searchKey])

    if (!review || review.length === 0){
      return 'Loading...'
    }


  return (
    <div className='film'>

      {review.map((film)=>(
        <ReviewItem key={film.id} film={film} />
      ))}
      
    </div>
  )
}

export default ReviewList
