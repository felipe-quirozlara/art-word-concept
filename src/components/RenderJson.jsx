import React from 'react'
import { words } from "../assets/words.json";
import randomSelectWords from '../utils/randomSelectWords';
import SlideForWord from './SlideForWord';

const numberWords = import.meta.env.VITE_NUMBERS_WORD_SLIDERS;

const RenderJson = () => {

    const randomWords = randomSelectWords(words, numberWords);

    return (
        <>
            {randomWords && randomWords.map((word, index) => {
                return (
                    <section key={index}>
                        <SlideForWord wordConcept={word} />
                    </section>
                )
            })}
        </>
    )
}

export default RenderJson