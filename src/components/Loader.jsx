import { Audio } from  'react-loader-spinner'
import { useState, useEffect } from 'react';

export default function Loader(){
    const [loading, setLoading] = useState(true)

    useEffect(() => {
      setTimeout(() => {
        setLoading(false)
      }, 1000);
      setTimeout(() => {
        window.scrollTo(0,0)
      }, 500);

  }, [])

    return (
        <>
            {
                loading
                &&
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
            }
        </>
    )
}