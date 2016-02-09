import React from 'react';

// stateless function - only has a render method or no methods at all
// instead of doing 'this.props.bio' we can pass them in as arguments
const UserProfile = ({ bio }) => {
  // making sure things are truthy, another way of doing if/else to not show an elment that doesn't exist ex: blogs
  return (
    <div>
      {bio.avatar_url && <li className="list-group-item"> <img src={bio.avatar_url} className="img-rounded img-responsive"/></li>}
      {bio.name && <li className="list-group-item">Name: {bio.name}</li>}
      {bio.login && <li className="list-group-item">Username: {bio.login}</li>}
      {bio.email && <li className="list-group-item">Email: {bio.email}</li>}
      {bio.location && <li className="list-group-item">Location: {bio.location}</li>}
      {bio.company && <li className="list-group-item">Company: {bio.company}</li>}
      {bio.followers && <li className="list-group-item">Followers: {bio.followers}</li>}
      {bio.following && <li className="list-group-item">Following: {bio.following}</li>}
      {bio.following && <li className="list-group-item">Public Repos: {bio.public_repos}</li>}
      {bio.blog && <li className="list-group-item">Blog: <a href={bio.blog}> {bio.blog}</a></li>}
    </div>
  );
};

UserProfile.propTypes = {
  username: React.PropTypes.string.isRequired,
  bio: React.PropTypes.object.isRequired,
};

export default UserProfile;
