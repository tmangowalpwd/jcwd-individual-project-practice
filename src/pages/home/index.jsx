import { useState } from "react";
import ContentCard from "../../components/ContentCard";
import axios from "axios";
import { Box, Button } from "@chakra-ui/react";
import { API_URL } from "../../configs/api";

const HomePage = () => {
  const [contentList, setContentList] = useState([]);

  const fetchContentList = () => {
    axios.get(`${API_URL}/posts`).then((res) => {
      setContentList(res.data);
    });
  };

  const renderContentList = () => {
    return contentList.map((val) => {
      return (
        <ContentCard
          username={val.username}
          caption={val.caption}
          imageUrl={val.image_url}
          location={val.location}
          numberOfLikes={val.number_of_likes}
          id={val.id}
        />
      );
    });
  };
  return (
    <Box paddingY="8">
      <Button marginBottom="4" onClick={fetchContentList}>
        Fetch Posts
      </Button>
      {renderContentList()}
    </Box>
  );
};

export default HomePage;
