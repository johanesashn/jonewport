import { Audio } from  'react-loader-spinner'

export default function Loader(){
    return (
        <div className="loader">
            <div className="loader-animation">
                <Audio
                    color="#222222;"
                    ariaLabel="audio"
                    visible={true}
                />
            </div>
            <h3>LOADING</h3>
        </div>
    )
}