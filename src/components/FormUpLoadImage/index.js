import { faCircleXmark, faCloudArrowUp, faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import { useEffect, useRef, useState } from "react";
import style from './FormUpLoadImage.module.scss';



const cx = classNames.bind(style);

function FormUpLoadImage({predict}) {

    const [imagePreview, setImagePreview] = useState('');

    const [selectedFile, setSelectedFile] = useState();

    const [predImage, setPredImage] = useState(null);

    const [explain, setExplain] = useState(null);

    const [isLoading, setIsLoading] = useState(false);

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

        setIsLoading(true)


        const data = await predict(selectedFile);
        // console.log(data)

        setIsLoading(false)
        
        setPredImage(data.image_base64.slice(2, data.image_base64.length - 1))
        if (data.explain) {
            let explainString = data.explain.slice(1, data.explain.length - 1).replace(/'/g, '')
            setExplain(explainString.split(','))
        }

    }

    // console.log(predImage)

    useEffect(() => {
        console.log(isLoading)
    }, [isLoading])



    return ( <div className={cx('wrapper')}>
        <form className={cx([imagePreview !== '' ? 'hidden' : ''])}>
            <input ref={inputRef} id={cx("file-upload")}  style={{display: 'none'}} type='file' accept="image/*" onChange={handleOnChange}/>
            <label htmlFor='file-upload'>
                <div className={cx("start", [imagePreview !== '' ? 'hidden' : ''])}>
                    <FontAwesomeIcon icon={faCloudArrowUp} className={cx('icon-upload')} />
                    <span>Select a file or drag here</span>
                    <div className={cx('btn-select')}><span>Select a file</span></div>
                </div>
            </label>

            {/* <input type="submit" value="Predict" /> */}
        </form>
        <div id={cx('file-image')} className={cx([imagePreview === '' ? 'hidden' : ''])} >
            <img  src={imagePreview} alt="Preview"  />
            <FontAwesomeIcon onClick={() => {setImagePreview(''); setPredImage(null)}} icon={faCircleXmark} className={cx('icon-close')}/>
        </div>

        <button onClick={handleOnSubmit} disabled={imagePreview === '' || isLoading} className={cx('btn-pred')}>Predict</button>

        {/* <img src={`data:image/jpeg;base64,${predImage}`} alt='pred' /> */}
        {
            predImage !== null && !isLoading && (<div className={cx('pred-value')}>
                <img src={`data:image/jpeg;base64,${predImage}`} alt='pred' />

                {
                    explain !== null && (
                        <div className={cx('explain')}>
                                    <p>Explain</p>
                        {
                            explain.map(( explainDetail, index) => (
                                <p key={index}>{explainDetail}</p>
                            ))
                        }
                        </div>
                    )
                }

            </div>)
        }

        {
            isLoading && (
                <div className={cx('loading')}>
                    <FontAwesomeIcon className={cx('icon-loading')} icon={faSpinner} />
                </div>
            )
        }
        
    
    </div> );
}

export default FormUpLoadImage;