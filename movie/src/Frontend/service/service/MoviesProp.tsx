
 
  export type MovieType = {
    id: number,
    Title: string
    ["Release Date"]: string
  }
  
  const Moviesprop = (props: MovieType) => {
    return (
        <>
        <div>{props.id}</div>
        <div>{props.Title}</div>
        <div>{props["Release Date"]}</div>
      </>
    )
  }
  
  export default Moviesprop