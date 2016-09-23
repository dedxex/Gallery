import React from 'react';
const Score = ({image}) => {
    const total = image.ups+image.downs;
    const upVote = (image.ups/total)*100;
    const downVote = (image.downs/total)*100;
    const commentcount = (image.comment_count/1000)*100;
    return (
        <div>
           <div>Comments <progress className="progress progress" value={commentcount} max="100"></progress></div>
            <progress className="progress progress progress-success " value={upVote} max="100"></progress>
            <progress className="progress progress progress-danger" value={downVote} max="100"></progress>
        </div>
    );
}
export default Score;