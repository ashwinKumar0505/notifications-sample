import { Flex, Icon, Text, Box } from "@chakra-ui/react";
import {
  AiFillCheckCircle,
  AiFillInfoCircle,
  AiFillWarning,
  AiOutlineClose,
} from "react-icons/ai";
import { RiErrorWarningFill } from "react-icons/ri";
import { TStatus } from "./ToastProvider";

const Toast = ({
  id,
  status,
  description,
  removeById,
}: {
  id: number;
  status: TStatus;
  description: string;
  removeById: (id: number) => void;
}) => {
  const getColor = () => {
    switch (status) {
      case "success":
        return "green.100";
      case "error":
        return "red.100";
      case "warning":
        return "yellow.100";
      default:
        return "blue.100";
    }
  };

  const getIcon = () => {
    switch (status) {
      case "success":
        return <Icon as={AiFillCheckCircle} color="green.500" fontSize="xl" />;
      case "warning":
        return <Icon as={AiFillWarning} color="yellow.500" fontSize="xl" />;
      case "error":
        return <Icon color="red.500" as={RiErrorWarningFill} fontSize="xl" />;
      default:
        return <Icon as={AiFillInfoCircle} color="blue.500" fontSize="xl" />;
    }
  };
  return (
    <Flex
      p={5}
      m={5}
      bg={getColor()}
      alignItems="center"
      borderRadius="md"
      boxShadow="md"
      position="relative"
      minW="300px"
    >
      {getIcon()}
      <Text fontSize="md" fontWeight="medium" ml={2}>
        {description}
      </Text>
      <Box
        position="absolute"
        top="5px"
        right="5px"
        cursor="pointer"
        onClick={() => removeById(id)}
      >
        <Icon as={AiOutlineClose} />
      </Box>
    </Flex>
  );
};

export default Toast;
