import { useState, useEffect } from "react";
import ContentCard from "../../components/ContentCard";
import axios from "axios";
import {
  Alert,
  AlertTitle,
  Box,
  Button,
  Center,
  Spinner,
  useToast,
} from "@chakra-ui/react";
import { API_URL } from "../../configs/api";
import { Link } from "react-router-dom";

const HomePage = () => {
  const [contentList, setContentList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const toast = useToast();

  // const [username, setUsername] = useState("");
  // const [fullName, setFullName] = useState("");

  const fetchContentList = () => {
    setIsLoading(true);

    setTimeout(() => {
      axios
        .get(`${API_URL}/posts`, {
          params: {
            _expand: "user",
          },
        })
        .then((res) => {
          setContentList(res.data);
        })
        .catch((err) => {
          // setErrorMessage("")
          toast({
            title: "Fetch data failed",
            description: "There is an error at the server",
            status: "error",
            duration: 4000,
            isClosable: true,
            position: "top",
          });
        })
        .finally(() => {
          setIsLoading(false);
        });
    }, 2000);
  };

  const renderContentList = () => {
    return contentList.map((val) => {
      return (
        <ContentCard
          username={val.user.username}
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
  // useEffect(() => {
  //   if (username !== "" || fullName !== "") {
  //     alert("terjadi perubahan state");
  //   }
  // }, [username, fullName]);

  return (
    <>
      {isLoading ? <Spinner size="lg" /> : null}
      {/* {errorMessage ? (
        <Alert status="error">
          <AlertTitle>{errorMessage}</AlertTitle>
        </Alert>
      ) : null} */}
      <Link to="/profile">
        <Button>Go To Profile</Button>
      </Link>
      <Button onClick={fetchContentList}>Refresh Page</Button>
      <Center>
        <Box paddingY="8">{renderContentList()}</Box>
      </Center>
    </>
  );
};

export default HomePage;
