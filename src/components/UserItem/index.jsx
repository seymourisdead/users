import React from 'react';
import PropTypes from 'prop-types';

function UserItem (props) {
    return (
      <div className="user">
        {Object.keys(props).map(key => {
          return <div className={`user__${key}`} key={key}>{props[key]}</div>
        })}

      </div>
    );
}

UserItem.propTypes = {
  fio: PropTypes.string.isRequired,
  birthDate: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired
};

export default UserItem;
