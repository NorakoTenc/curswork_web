import React from "react"

export const PageLoader = ({
  isLoading,
  pastDelay,
  error,
  retry,
  timedOut
}) => {
  const retryButton = <button onClick={retry}>retry</button>

  if (error) {
    return (
      <div className="page-loader">
        Something went awry... do you wish to {retryButton}?
      </div>
    )
  } else if (timedOut) {
    return <div className="page-loader">Taking some time... {retryButton}?</div>
  } else if (pastDelay) {
    return <div className="page-loader">Loading...</div>
  } else {
    return null
  }
}
