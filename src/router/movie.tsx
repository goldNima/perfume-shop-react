import '../App.css'


export const Movie = ()=>{
    return(
        <div className='movie'>
            <video width="100%" height="740px" controls>
                <source className='movie-site' src='../movie/d402b93ca0d556e0ad41d3a9bddd807d55483015-720p.mp4' type='video/mp4' />
            </video>
        </div>
    )
}