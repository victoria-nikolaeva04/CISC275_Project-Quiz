import './Loading.css'
const Loading=()=>{
  return(
    <><h1 className="intro"> Loading...</h1><div className="box">
      {/*Cat loading and associated CSS is taken from https://codepen.io/Rplus/pen/PWZYRM*/}
      <div className="cat">
        <div className="cat__body"></div>
        <div className="cat__body"></div>
        <div className="cat__tail"></div>
        <div className="cat__head"></div>
      </div>
    </div><blockquote className="info">
      </blockquote></>
  )
}
export default Loading;