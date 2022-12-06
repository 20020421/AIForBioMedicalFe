import { faCircleXmark, faCloudArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import { useRef, useState } from "react";
import style from './FormUpLoadImage.module.scss';
import axios from "axios";




const cx = classNames.bind(style);

function FormUpLoadImage({predict}) {

    const [imagePreview, setImagePreview] = useState('');

    const [selectedFile, setSelectedFile] = useState();

    const [predImage, setPredImage] = useState(null);

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
        const data = await predict(selectedFile);
        // console.log(data);
        setPredImage(data)
    }



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
            <FontAwesomeIcon onClick={() => {setImagePreview('')}} icon={faCircleXmark} className={cx('icon-close')}/>
        </div>

        <button onClick={handleOnSubmit} disabled={imagePreview === ''} className={cx('btn-pred')}>Predict</button>

        {/* <img src={`data:image/jpeg;base64,${predImage}`} alt='pred' /> */}

        <div className={cx('pred-value')}>
            { 
                predImage !== null && (<img src={`data:image/jpeg;base64,${predImage}`} alt='pred' />)
            }
        </div>
    
    </div> );
}

export default FormUpLoadImage;