import PropTypes from 'prop-types';

import { getFromNowTime } from 'helpers/helpers';
import { IconName } from 'common/enums/enums';
import { postType } from 'common/prop-types/prop-types';
import { IconButton, Image, Modal } from 'components/common/common';

// import { AddComment } from 'components/thread/components/components';
import { useState } from 'react';
import { EditPost } from 'components/thread/components/edit-post/edit-post';
import styles from './styles.module.scss';

const Post = ({
  post,
  onPostLike,
  onPostDislike,
  onExpandedPostToggle,
  onSharePost
}) => {
  const {
    id,
    image,
    body,
    user,
    likeCount,
    dislikeCount,
    commentCount,
    createdAt
  } = post;
  const date = getFromNowTime(createdAt);

  const [isPostEdit, setIsPostEdit] = useState(false);

  const handlePostLike = () => onPostLike(id);
  const handlePostDislike = () => onPostDislike(id);
  const handleExpandedPostToggle = () => onExpandedPostToggle(id);
  const handleSharePost = () => onSharePost(id);
  const handlePostEdit = () => setIsPostEdit(prev => !prev);

  return (
    <>
      <div className={styles.card}>
        {image && <Image src={image.link} alt="post image" />}
        <div className={styles.content}>
          <div className={styles.meta}>
            <span>{`posted by ${user.username} - ${date}`}</span>
          </div>
          <p className={styles.description}>{body}</p>
        </div>
        <div className={styles.extra}>
          <IconButton
            iconName={IconName.THUMBS_UP}
            label={likeCount}
            onClick={handlePostLike}
          />
          <IconButton
            iconName={IconName.THUMBS_DOWN}
            label={dislikeCount}
            onClick={handlePostDislike}
          />
          <IconButton
            iconName={IconName.COMMENT}
            label={commentCount}
            onClick={handleExpandedPostToggle}
          />
          <IconButton
            iconName={IconName.SHARE_ALTERNATE}
            onClick={handleSharePost}
          />
          {/* <IconButton iconName={IconName.EDIT_POST} onClick={handlePostEdit} /> */}
        </div>
      </div>
      <Modal isOpen={isPostEdit} isCentered onClose={handlePostEdit}>
        <EditPost />
      </Modal>
    </>
  );
};

Post.propTypes = {
  post: postType.isRequired,
  onPostLike: PropTypes.func.isRequired,
  onPostDislike: PropTypes.func.isRequired,
  onExpandedPostToggle: PropTypes.func.isRequired,
  onSharePost: PropTypes.func.isRequired
  // onEditPost: PropTypes.func.isRequired
};

export { Post };
