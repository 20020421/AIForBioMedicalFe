import { faCircleXmark, faCloudArrowUp, faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import { useEffect, useRef, useState } from "react";
import style from './FormUpLoadImage.module.scss';



const cx = classNames.bind(style);

function FormUpLoadImage({predict}) {

    const [imagePreview, setImagePreview] = useState(null);

    const [selectedFile, setSelectedFile] = useState();

    const [predImage, setPredImage] = useState(null);

    const [explain, setExplain] = useState(null);

    const [isLoading, setIsLoading] = useState(false);

    const [message, setMessage] = useState('')

    const resultRef = useRef(null)

    // console.log(imagePreview)

    const inputRef = useRef(null);

    const handleOnChange = (e) => {
        let fReader = new FileReader();
        fReader.readAsDataURL(e.target.files[0]);
        fReader.onloadend = (event) => {
            setImagePreview(event.target.result);
        } 

        setSelectedFile(e.target.files[0])
    }
    
    const handleOnSubmit = async(event) => {
        event.preventDefault()
        
        setMessage('')
        setPredImage(null)
        setExplain(null)
        setIsLoading(true)


        const data = await predict(selectedFile);
        // console.log(data)

        setIsLoading(false)


        if (data.code === '1') {
            
           setPredImage(data.image_base64.slice(2, data.image_base64.length - 1))
           if (data.explain) {
               let explainString = data.explain.slice(1, data.explain.length - 1).replace(/'/g, '')
               setExplain(explainString.split(','))
           }
        } else {
            setMessage(data.message);
        }
        // resultRef.current.scrollIntoView();
        console.log(resultRef.current.getBoundingClientRect().top);
        window.scroll({
            top: resultRef.current.getBoundingClientRect().top + window.scrollY + 300,
            behavior: 'smooth'
          });

    }

    useEffect(() => {
        console.log(window.scrollY)
    })

    const handleReset = () => {
        setPredImage(null)
        setImagePreview(null)
        setSelectedFile(null)
        setMessage('')
        inputRef.current.value = null
    }
    // console.log(predImage


    return ( <div className={cx('wrapper')}>
        <form className={cx([imagePreview !== null ? 'hidden' : ''])}>
            <input ref={inputRef} id={cx("file-upload")}  style={{display: 'none'}} type='file' accept="image/*" onChange={handleOnChange}/>
            <label htmlFor='file-upload'>
                <div className={cx("start", [imagePreview !== null ? 'hidden' : ''])}>
                    <FontAwesomeIcon icon={faCloudArrowUp} className={cx('icon-upload')} />
                    <span>Select a file or drag here</span>
                    <div className={cx('btn-select')}><span>Select a file</span></div>
                </div>
            </label>

            {/* <input type="submit" value="Predict" /> */}
        </form>
        <div id={cx('file-image')} className={cx([imagePreview === null ? 'hidden' : ''])} >
            <img  src={imagePreview} alt="Preview"  />
            <FontAwesomeIcon onClick={handleReset} icon={faCircleXmark} className={cx('icon-close')}/>
        </div>

        <button onClick={handleOnSubmit} disabled={imagePreview === null || isLoading} className={cx('btn-pred')}>Predict</button>

        <div ref={resultRef}>
        {/* <img src={`data:image/jpeg;base64,${predImage}`} alt='pred' /> */}
        {
            predImage !== null && !isLoading && (<div className={cx('pred-value')}>
                <img src={`data:image/jpeg;base64,${predImage}`} alt='pred' />

                {
                    explain !== null && (
                        <div className={cx('explain')}>
                            <p className={cx('title')}>Explain</p>
                            <div className={cx('detail')}>
                                {
                                    explain.map(( explainDetail, index) => (
                                        <p key={index}>{explainDetail}</p>
                                    ))
                                }
                            </div>
                        </div>
                    )
                }

            </div>)
        }
        {
            message !== '' && (
                <div className={cx('message')}>
                    <p>{message}</p>
                </div>
            )
        }

        {
            isLoading && (
                <div className={cx('loading')}>
                    <FontAwesomeIcon className={cx('icon-loading')} icon={faSpinner} />
                </div>
            )
        }
        </div>
        
    
    </div> );
}

export default FormUpLoadImage;