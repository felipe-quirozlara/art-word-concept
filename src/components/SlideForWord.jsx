import React, { useEffect, useState } from 'react'
import useFetchByKeyWord from '../hooks/useFetchByKeyWord ';
import CardImage from './CardImage';
import SliderCards from './SliderCards';

const SlideForWord = ( props ) => {
    const { wordConcept } = props;
    const [word, setWord] = useState();
    const { collection, loading, error } = useFetchByKeyWord(word);

    useEffect(() => {
        setWord( wordConcept );
    }, [])


    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <>
            {word &&
                <span className="whitespace-nowrap rounded-full bg-green-500 px-2.5 py-0.5 text-md text-green-200 text-xl">
                    {word}
                </span>
            }
            <SliderCards>
                {collection && collection.map((info, index) => {
                    return (
                        <div key={index}>
                            <CardImage props={info} />
                        </div>
                    )
                })}
            </SliderCards>
        </>
    )
}

export default SlideForWord