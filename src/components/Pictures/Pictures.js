import React from 'react';
import PropTypes from 'prop-types';

import './Pictures.css';

const Picture = ({photo}) => (
    <div className="gallery__item" >
      <img src={photo} alt=""/>
    </div>
)

Picture.propTypes = {
    photo: PropTypes.string.isRequired
}

const renderItems = items => items.map(item => (
    <Picture key={item.id} photo={item.photo_130}/>
))

const Pictures = props => (
    <div className="gallery">
        {renderItems(props.items)}
    </div>
)

Pictures.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        photo_130: PropTypes.string.isRequired
    })).isRequired
}

export default Pictures;