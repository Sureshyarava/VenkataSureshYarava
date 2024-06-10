import React from 'react';

const Publication = ({ title, authors, journalConference, doi, description, keywords, youtubeUrl }) => {
    return (
        <div className="publication padding">
            <h3>{title}</h3>
            <p><strong>Authors:</strong> {authors.join(', ')}</p>
            <p><strong>Journal/Conference:</strong> {journalConference}</p>
            {doi && <p><strong>DOI:</strong> <a href={doi} style={{color:"#268bd2"}}>{doi}</a></p>}
            <p className='justify'><strong>Description:</strong> {description}</p>
            {keywords && <p><strong>Keywords:</strong> {keywords.join(', ')}</p>}
            {youtubeUrl && 
                <div className="video-container">
                    <iframe
                        width="100%"
                        height="auto"
                        src={`https://www.youtube.com/embed/${youtubeUrl}`}
                        title={title}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </div>
            }
        </div>
    );
}

export default Publication;