import { Text, Link as ChakraLink } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import CustomContainer from "../../components/CustomContainer";

const ProfilePage = () => {
  return (
    <div>
      <Text fontSize="2xl">My Profile</Text>
      <Link to="/">
        <Text>Go back to home page</Text>
      </Link>
      <CustomContainer>
        <Text>Hello there</Text>
      </CustomContainer>
    </div>
  );
};

export default ProfilePage;
