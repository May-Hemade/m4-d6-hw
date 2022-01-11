import { Component } from "react"
import CommentList from "./CommentList"
import AddComment from "./AddComment"
import Loading from "./Loading"
import Error from "./Error"
import { useState } from "react"
import { useEffect } from "react"

const CommentArea = ({ asin }) => {
  const [comments, setComments] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(false)

  useEffect(() => {
    loadComments()
  }, [asin])

  const loadComments = async () => {
    setIsLoading(true)

    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/comments/" + asin,
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWRjM2ZlM2YyNjM3ODAwMTVlNTBkMjMiLCJpYXQiOjE2NDE5MDg0NTMsImV4cCI6MTY0MzExODA1M30.EdzYJUXtXimORoGl8bgWRQ3JSeQPmTemWyvDbJWi9Aw",
          },
        }
      )
      console.log(response)
      if (response.ok) {
        let comments = await response.json()

        setComments(comments)
        setIsLoading(false)
        setIsError(false)
      } else {
        console.log("error")
        setIsLoading(false)
        setIsError(true)
      }
    } catch (error) {
      console.log(error)
      setIsLoading(false)
      setIsError(true)
    }
  }

  return (
    <div>
      {isLoading && <Loading />}
      {isError && <Error />}
      <AddComment asin={asin} />
      <CommentList commentsToShow={comments} />
    </div>
  )
}

export default CommentArea
