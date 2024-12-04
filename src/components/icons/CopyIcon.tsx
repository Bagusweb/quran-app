const CopyIcon = ({className, onClick}) => {
  return (
    <svg onClick={onClick} className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M5.503 4.627L5.5 6.75V17.254C5.5 18.116 5.84241 18.9426 6.4519 19.5521C7.0614 20.1616 7.88805 20.504 8.75 20.504H17.366C17.2107 20.9427 16.9233 21.3225 16.5433 21.5911C16.1633 21.8598 15.7094 22.004 15.244 22.004H8.75C7.49022 22.004 6.28204 21.5036 5.39124 20.6128C4.50045 19.722 4 18.5138 4 17.254V6.75C4 5.77 4.627 4.935 5.503 4.627ZM17.75 2C18.0455 2 18.3381 2.0582 18.611 2.17127C18.884 2.28434 19.1321 2.45008 19.341 2.65901C19.5499 2.86794 19.7157 3.11598 19.8287 3.38896C19.9418 3.66194 20 3.95453 20 4.25V17.25C20 17.5455 19.9418 17.8381 19.8287 18.111C19.7157 18.384 19.5499 18.6321 19.341 18.841C19.1321 19.0499 18.884 19.2157 18.611 19.3287C18.3381 19.4418 18.0455 19.5 17.75 19.5H8.75C8.15326 19.5 7.58097 19.2629 7.15901 18.841C6.73705 18.419 6.5 17.8467 6.5 17.25V4.25C6.5 3.65326 6.73705 3.08097 7.15901 2.65901C7.58097 2.23705 8.15326 2 8.75 2H17.75ZM17.75 3.5H8.75C8.55109 3.5 8.36032 3.57902 8.21967 3.71967C8.07902 3.86032 8 4.05109 8 4.25V17.25C8 17.664 8.336 18 8.75 18H17.75C17.9489 18 18.1397 17.921 18.2803 17.7803C18.421 17.6397 18.5 17.4489 18.5 17.25V4.25C18.5 4.05109 18.421 3.86032 18.2803 3.71967C18.1397 3.57902 17.9489 3.5 17.75 3.5Z" fill="currentColor"/>
    </svg>

  )
}

export default CopyIcon