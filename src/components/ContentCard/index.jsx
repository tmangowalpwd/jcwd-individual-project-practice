import { Box, Image, Avatar, Text, Icon } from "@chakra-ui/react";
import { FaRegHeart, FaHeart, FaRegComment } from "react-icons/fa";
import Comment from "../Comment";

const ContentCard = () => {
  return (
    <Box borderWidth="1px" borderRadius="lg" maxW="lg" paddingY="2">
      {/* Card Header */}
      <Box paddingX="3" paddingBottom="2" display="flex" alignItems="center">
        <Avatar src="https://bit.ly/dan-abramov" size="md" />
        <Box marginLeft="2">
          <Text fontSize="md" fontWeight="bold">
            username
          </Text>
          <Text fontSize="sm" color="GrayText">
            location
          </Text>
        </Box>
      </Box>

      {/* Card Media/Content */}
      <Image src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" />

      {/* Action Buttons */}
      <Box paddingX="3" paddingY="2" display="flex" alignItems="center">
        <Icon boxSize={6} as={FaRegHeart} />
        <Icon marginLeft="4" boxSize={6} as={FaRegComment} />
      </Box>

      {/* Like Count */}
      <Box paddingX="3">
        <Text fontWeight="bold">{(13424289).toLocaleString()} likes</Text>
      </Box>

      {/* Caption */}
      <Box paddingX="3">
        <Text display="inline" fontWeight="bold" marginRight="2">
          username
        </Text>
        <Text display="inline">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero dolore
          enim praesentium inventore asperiores sunt corporis unde dicta ipsa
          dolorum voluptatibus dolor, odio nobis est consequuntur labore!
        </Text>
      </Box>

      {/* Comment Section */}
      <Box paddingX="3" marginTop="4">
        <Text fontWeight="bold" decoration="underline">
          Comments
        </Text>

        {/* Comment */}
        <Comment />
      </Box>
    </Box>
  );
};

export default ContentCard;
