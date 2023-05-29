import React from 'react';
import UploadImageForm from './UploadImageForm';
import ImageAnnotator from './ImageAnnotator';
import useGetAnno from '../../functions/useGetAnno';
import TextAnnotator from './TextAnnotator';
import Style from "./anoo.module.css";

const BabelCanvas = () => {

    const {versionArray} = useGetAnno();
    
    return (
        <div className={Style.babelCanvas}>
            {
             Object.keys(versionArray).length === 0 ? 
            <UploadImageForm />
            :
            <div className={Style.annotator}>
                <ImageAnnotator />
                <TextAnnotator />
            </div>
            }
        </div>

    )
};
export default BabelCanvas;