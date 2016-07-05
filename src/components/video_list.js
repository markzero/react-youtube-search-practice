import React from 'react';
import VideoListItem from './video_list_item';


//const VideoList = () => {
const VideoList = function(props) {
    const videoItems = props.videos.map((video) => {
        return <VideoListItem
            onVideoSelect={props.onVideoSelect}
            key={video.etag} video={video} />
    });

    return(
        // use className jer je class kljucna rec i moze biti konflikta
        <ul className="col-md-4 list-group">
            {videoItems}
        </ul>
    );
}


export default VideoList;
