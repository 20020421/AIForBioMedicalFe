import { faCloudArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import { useRef, useState } from "react";
import style from './FormUpLoadImage.module.scss';

const cx = classNames.bind(style);

function FormUpLoadImage() {

    const [imagePreview, setImagePreview] = useState('');

    console.log(imagePreview)

    const inputRef = useRef(null);

    const handleOnChange = (e) => {
        let fReader = new FileReader();
        fReader.readAsDataURL(e.target.files[0]);
        fReader.onloadend = (event) => {
            setImagePreview(event.target.result);
        } 
    }

    return ( <div className={cx('wrapper')}>
        <form>
            <input ref={inputRef} id={cx("file-upload")}  style={{display: 'none'}} type='file' accept="image/*" onChange={handleOnChange}/>
            <label htmlFor='file-upload'>
                <img id={cx('file-image')} src={imagePreview} alt="Preview"  className={cx([imagePreview === '' ? 'hidden' : ''])} />
                <div className={cx("start", [imagePreview !== '' ? 'hidden' : ''])}>
                    <FontAwesomeIcon icon={faCloudArrowUp} className={cx('icon-upload')} />
                    <span>Select a file or drag here</span>
                    <div className={cx('btn-select')}><span>Select a file</span></div>
                </div>
            </label>
        </form>
    </div> );
}

export default FormUpLoadImage;