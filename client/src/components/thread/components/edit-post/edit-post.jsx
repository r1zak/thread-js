// import PropTypes from 'prop-types';
// import { useAppForm, useCallback } from 'hooks/hooks.js';

import { Button, Input } from 'components/common/common';
import { ButtonType } from 'common/enums/enums';

const EditPost = () => {
  // const { control, handleSubmit, reset } = useAppForm({
  //   // defaultValues: DEFAULT_ADD_COMMENT_PAYLOAD
  // });

  // const handleEditPost = useCallback(
  //   values => {
  //     if (!values.body) {
  //       return;
  //     }
  //     onEditPost({ postId, body: values.body }).then(() => reset());
  //   },
  //   [postId, reset, onEditPost]
  // );

  return (
    <form name="comment">
      <Input
        // name={CommentPayloadKey.BODY}
        placeholder="Edit a post..."
        rows={10}
        // control={control}
      />
      <Button type={ButtonType.SUBMIT} isPrimary>
        Post comment
      </Button>
    </form>
  );
};

// EditPost.PropTypes = {
//   onEditPost: PropTypes.func.isRequired,
//   postId: PropTypes.number.isRequired
// };

export { EditPost };
