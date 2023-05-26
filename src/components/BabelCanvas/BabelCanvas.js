import React from 'react';
import UploadImageForm from './UploadImageForm';
import Annotator from './Annotator';
import useGetAnno from '../../functions/useGetAnno';

const BabelCanvas = () => {

    const {versionArray} = useGetAnno();
    
    return (
        <div>
            {
             Object.keys(versionArray).length === 0 ? 
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