import { useState } from "react";
import {
  Box,
  Image,
  Avatar,
  Text,
  Icon,
  Button,
  Input,
} from "@chakra-ui/react";
import { FaRegHeart, FaRegComment } from "react-icons/fa";
import Comment from "../Comment";
import axios from "axios";
import { API_URL } from "../../configs/api";

const ContentCard = (props) => {
  const { username, location, caption, numberOfLikes, imageUrl, id } = props;

  const [comments, setComments] = useState([]);
  const [commentInput, setCommentInput] = useState("");

  const [displayCommentInput, setDisplayCommentInput] = useState(false);

  const fetchComments = () => {
    axios
      .get(`${API_URL}/comments`, {
        params: {
          postId: id,
        },
      })
      .then((res) => {
        setComments(res.data);
      });
  };

  const renderComments = () => {
    return comments.map((val) => {
      return (
        <Comment {...props} content={val.content} username={val.username} />
      );
    });
  };

  const handleCommentInput = (event) => {
    const { value } = event.target;

    setCommentInput(value);
  };

  const postNewComment = () => {
    const newData = {
      username: "doraemon",
      content: commentInput,
      postId: id,
    };

    axios.post(`${API_URL}/comments`, newData).then(() => {
      fetchComments();
      setDisplayCommentInput(false);
    });
  };

  return (
    <Box borderWidth="1px" borderRadius="lg" maxW="lg" paddingY="2" marginY="4">
      {/* Card Header */}
      <Box paddingX="3" paddingBottom="2" display="flex" alignItems="center">
        <Avatar src="https://bit.ly/dan-abramov" size="md" />
        <Box marginLeft="2">
          <Text fontSize="md" fontWeight="bold">
            {username}
          </Text>
          <Text fontSize="sm" color="GrayText">
            {location}
          </Text>
        </Box>
      </Box>

      {/* Card Media/Content */}
      <Image src={imageUrl} />

      {/* Action Buttons */}
      <Box paddingX="3" paddingY="2" display="flex" alignItems="center">
        <Icon boxSize={6} as={FaRegHeart} />
        <Icon
          onClick={() => setDisplayCommentInput(true)}
          marginLeft="4"
          boxSize={6}
          as={FaRegComment}
          sx={{
            _hover: {
              cursor: "pointer",
            },
          }}
        />
      </Box>

      {/* Like Count */}
      <Box paddingX="3">
        <Text fontWeight="bold">{numberOfLikes.toLocaleString()} likes</Text>
      </Box>

      {/* Caption */}
      <Box paddingX="3">
        <Text display="inline" fontWeight="bold" marginRight="2">
          {username}
        </Text>
        <Text display="inline">{caption}</Text>
      </Box>

      {/* Comment Section */}
      <Box paddingX="3" marginTop="4">
        <Text fontWeight="bold" decoration="underline" marginBottom="2">
          Comments
        </Text>

        {/* Comment Input */}
        {displayCommentInput ? (
          <Box display="flex">
            <Input
              onChange={handleCommentInput}
              marginBottom="2"
              type="text"
              placeholder="Insert a new comment"
              marginRight="4"
            />
            <Button onClick={postNewComment} colorScheme="green">
              Post
            </Button>
          </Box>
        ) : null}

        {/* Comment */}
        {comments.length === 0 ? (
          <Button onClick={fetchComments} size="xs">
            Fetch Comments
          </Button>
        ) : null}

        {renderComments()}
      </Box>
    </Box>
  );
};

export default ContentCard;
