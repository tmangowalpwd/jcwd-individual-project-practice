import { Box, Text } from "@chakra-ui/react";

const Comment = () => {
  return (
    <Box>
      <Text display="inline" fontWeight="bold" marginRight="2">
        username
      </Text>
      <Text display="inline">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero dolore
        enim praesentium inventore asperiores sunt corporis unde dicta ipsa
        dolorum voluptatibus dolor, odio nobis est consequuntur labore!
      </Text>
    </Box>
  );
};

export default Comment;
