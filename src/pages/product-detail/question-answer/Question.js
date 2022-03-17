import React from 'react';
import { BsFillBookmarksFill, BsBookmarks } from "react-icons/bs";
import './ques-ans.css';

const Question = () => {
    return (
        <>
        <div className="question_ans">
        <div className="main-title"><h2>Questions / Answer</h2></div>
            <p><a href="">Login</a> or <a href="">Register</a> to ask questions to seller</p>
            <p>Other questions answered by onedollershop(rawalpindi) (1)</p>
            <div className="no-ques">
                <div className="ask-question clearfix">
                    <i><BsFillBookmarksFill /></i>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </div>
                <div className="ans-tel clearfix">
                    <i><BsBookmarks /></i>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </div>
            </div>
            <div className="no-ques">
                <div className="ask-question clearfix">
                    <i><BsFillBookmarksFill /></i>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </div>
                <div className="ans-tel clearfix">
                    <i><BsBookmarks /></i>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </div>
            </div>
        </div>
        </>
    );
}

export default Question;
