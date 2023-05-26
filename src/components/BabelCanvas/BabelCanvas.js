import React from 'react';
import UploadImageForm from './UploadImageForm';
import ImageAnnotator from './ImageAnnotator';
import useGetAnno from '../../functions/useGetAnno';
import AnnoState from './AnnoState';
import TextAnnotator from './TextAnnotator';
import './anno.css';

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
                <AnnoState />
                <div className='babel-anno'>
                    <ImageAnnotator />
                    <TextAnnotator />
                </div>
            </div>   
            }
        </div>

    )
};
export default BabelCanvas;