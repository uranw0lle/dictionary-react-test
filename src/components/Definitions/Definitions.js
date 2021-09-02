import React from 'react'
import './Definitions.css'

export const Definitions = ({ word, meanings, category, LightMode}) => {
    return (
        <div className='meanings'>

            {meanings[0] && word && category ==='en' && (
                    <audio  
                        src={meanings[0].phonetics[0] && meanings[0].phonetics[0].audio} 
                        style={{ 
                            backgroundColor: "#fff", 
                            borderRadius: "10px", 
                            width: "100%",
                        }} 
                        controls
                        >
                        <span>Your browser does not support audio :( </span>
                    </audio>
                )}
            {word === "" ? (
                <span className='subTitle'>Start by typing a word in Search </span>
            ) : ( 
                meanings.map((mean) => 
                    mean.meanings.map((item) => 
                        item.definitions.map((def) => (
                            <div 
                                className="singleMean" 
                                style={{ 
                                    backgroundColor: LightMode ? "#3b5360" : "rgb(144,144,144)", 
                                    color: LightMode ? "white" : "black" ,
                                }}   
                            >  
                            
                                <b>{def.definition}</b>
                                <hr style={{ 
                                    backgroundColor: LightMode ? "#fff" : "#000", 
                                    width: "100%", 
                                    }} />
                                {
                                    def.example && (
                                        <span>
                                            <b>Example: </b>
                                            {def.example}
                                        </span>

                                    )}
                                {
                                
                                    def.synonyms && (
                                        <span>
                                            <b>Synonyms: </b>
                                            {def.synonyms.map((s) => `${s}, `)}
                                        </span>

                                )}
                            </div>
                        ))
                    )
                )
            )}
        </div>
    );
};
