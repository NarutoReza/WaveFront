import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import './Preview.css'
import { Link } from 'react-router-dom';
import useDownloader from 'react-use-downloader';

function Preview() {
    const params = useParams()

    const { size, elapsed, percentage, download, cancel, error, isInProgress } =
    useDownloader();
    
    const [ data, setData ] = useState(null)
    console.log(data);
    
    
    useEffect(() => {
        axios
            .get(`${process.env.REACT_APP_BACKEND_URL}/single-data/${params.postId}`)
            .then(res => setData(res.data))
            .catch(err => console.log(err))
    }, [params])
  return (
    <>
        {
            data && data ? <React.Fragment>
                <div className='data-head'>
                    <h4>This is a Preview Page</h4>
                    {/* <Link to={`${process.env.REACT_APP_BACKEND_URL}/files/${data.name}.html`} target='_blank' download>Download the Page</Link> */}
                    <button onClick={e => { e.preventDefault(); download(`${process.env.REACT_APP_BACKEND_URL}/files/${data.name}.html`, `${data.name}.html`) }}>Download the Page</button>
                </div>

                <iframe src={`${process.env.REACT_APP_BACKEND_URL}/files/${data.name}.html`} width={'100%'} height={'1000px'}></iframe>
            </React.Fragment> : <h4>Data Error</h4>
        }
    </>
  )
}

export default Preview