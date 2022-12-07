import axios from "axios";
import classNames from "classnames/bind";
import FormUpLoadImage from "../FormUpLoadImage";
import style from './LungXRay.module.scss';

const cx = classNames.bind(style);

function LungXRay() {

    const url = 'http://localhost:3001/'

    const handleOnSubmit = async(selectedFile) => {
        const formData = new FormData()
        formData.append("file", selectedFile);
        try {

            const response = await axios({
                method: "post",
                url: url,
                data: formData,
                headers: {
                    "Content-Type": "multipart/form-data"
                },
            });
            return response.data;
        } catch(error) {
            console.log(error)
        }
    }

    return ( <div className={cx('wrapper')}>
    <h1 className={cx('title')}>
        Lung Diagnostic
    </h1>


    <FormUpLoadImage predict={handleOnSubmit} />
</div> )
}

export default LungXRay;