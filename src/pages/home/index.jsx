import { useState, useEffect } from "react";
import ContentCard from "../../components/ContentCard";
import axios from "axios";
import { Box, Button } from "@chakra-ui/react";
import { API_URL } from "../../configs/api";

const HomePage = () => {
  const [contentList, setContentList] = useState([]);
  const [username, setUsername] = useState("");
  const [fullName, setFullName] = useState("");

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

  // componentDidMount
  useEffect(() => {
    fetchContentList();
  }, []);

  // componentWillUnmount
  useEffect(() => {
    return () => {
      alert("Goodbye");
    };
  }, []);

  // componentDidUpdate
  useEffect(() => {
    if (username !== "" || fullName !== "") {
      alert("terjadi perubahan state");
    }
  }, [username, fullName]);

  return (
    <Box paddingY="8">
      <Button marginBottom="4" onClick={() => setUsername("seto")}>
        change username
      </Button>
      <Button marginBottom="4" onClick={() => setFullName("mark")}>
        change full name
      </Button>

      <Button marginBottom="4" onClick={fetchContentList}>
        Fetch Posts
      </Button>
      {renderContentList()}
    </Box>
  );
};

export default HomePage;
