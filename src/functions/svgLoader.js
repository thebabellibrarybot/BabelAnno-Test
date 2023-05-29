import { BsDatabaseFillAdd, BsFileTextFill, BsInfoSquareFill } from 'react-icons/bs';
import {GiNotebook} from 'react-icons/gi';
import { MdOutlineCompare, MdFitScreen } from 'react-icons/md';
import { GrHide, GrFormViewHide } from 'react-icons/gr';
import { RiContactsBook2Fill } from 'react-icons/ri';
const SvgLoader = (props) => {

    const ability = props.ability;

    if (ability === 'newVersion' ) {
        return (
            <BsDatabaseFillAdd className= {props.classNA || 'icon'}></BsDatabaseFillAdd>
        )
    }
    if (ability === 'textLine' ) {
        return (
            <BsFileTextFill className= {props.classNA || 'icon'}></BsFileTextFill>
        )
    }
    if (ability === 'notepad') {
        return (
            <GiNotebook className= {props.classNA || 'icon'}></GiNotebook>
        )
    }
    if (ability === 'compare') {
        return (
            <MdOutlineCompare className= {props.classNA || 'icon'}></MdOutlineCompare>
        )
    }
    if (ability === 'fitScreen') {
        return (
            <MdFitScreen className= {props.classNA || 'icon'}></MdFitScreen>
        )
    }
    if (ability === 'hideText') {
        return (
            <GrFormViewHide className= {props.classNA || 'icon'}></GrFormViewHide>
        )
    }
    if (ability === 'hideLineNums') {
        return (
            <GrHide className= {props.classNA || 'icon'}></GrHide>
        )
    }
    if (ability === 'about') {
        return (
            <BsInfoSquareFill className= {props.classNA || 'icon'}></BsInfoSquareFill>
        )
    }
    if (ability === 'contact') {
        return (
            <RiContactsBook2Fill className= {props.classNA || 'icon'}></RiContactsBook2Fill>
        )
    }


}
export default SvgLoader;