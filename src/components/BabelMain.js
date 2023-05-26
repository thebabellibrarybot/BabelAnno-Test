import React from 'react';
import UploadImageForm from './UploadImageForm';
import Annotator from './Annotator';
import useGetAnno from '../functions/useGetAnno';

const BabelCanvas = () => {

    const {imgArray} = useGetAnno();
    
    return (
        <div>
            {
             imgArray.length < 1 ? 
             <div className='babel-start'>
                <UploadImageForm />
            </div>
            :
            <div className='babel-main'>
                <Annotator />
            </div>   
            }
        </div>

    )
};
export default BabelCanvas;