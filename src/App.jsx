import {
  Card,
  CardBody,
  CardFooter,
  Stack,
  Heading,
  Text,
  Button,
  Image,
  Container,
  CardHeader,
} from "@chakra-ui/react";
import axios from "axios";
import { useState } from "react";

const baseURL = "https://plain-colt-bikini.cyclic.app";

function App() {
  const data = {
    title: "Living room Sofa",
    description:
      "This sofa is perfect for modern tropical spaces, baroque inspired spaces, earthy toned spaces and for people who love a chic design with a sprinkle of vintage design.",
    imageUrl:
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
    price: "INR 65000",
    location: "New Delhi",
  };

  const [title, setTitle] = useState("Kitchen Decor");
  const [imageUrl, setImageUrl] = useState(
    "https://cdn.pixabay.com/photo/2017/03/22/17/39/kitchen-2165756_1280.jpg"
  );
  const [description, setDescription] = useState(`
   When you think of interior design for kitchen, there are certain aspects that immediately come to your mind. The layout of the kitchen — if it should be an open or a closed kitchen.
  `);
  const [price, setPrice] = useState("INR 45000");
  const [location, setLocation] = useState("Mumbai");

  const fetchData = async () => {
    const result = await axios
      .post(`${baseURL}/api/data`, data)
      .then(({ data }) => {
        // console.log(response.data);
        setTitle(data.title);
        setImageUrl(data.imageUrl);
        setDescription(data.description);
        setPrice(data.price);
        setLocation(data.location);
      })
      .catch((error) => console.error(error.message));
  };

  return (
    <>
      <Container
        width="100vw"
        height="100vh"
        display="flex"
        justifyContent="center"
        alignItems="center"
        backgroundColor="blackAlpha.100"
        color="white"
      >
        <Card
          color="white"
          backgroundColor="#252429"
          padding={4}
          width="25rem"
          height="35rem"
        >
          <CardHeader>
            <Text fontSize="lg">API Response</Text>
          </CardHeader>
          <CardBody display="flex" justifyContent="center" alignItems="center">
            <Stack mt="1" spacing={2}>
              <Image src={imageUrl} alt="Kitchen Decor" borderRadius="lg" />
              <Heading size="md">{title}</Heading>
              <Text>{description}</Text>
              <Text color="blue.600" fontSize="2xl">
                {price}
              </Text>
              <Text color="teal">{location}</Text>
            </Stack>
          </CardBody>

          <CardFooter marginTop={2}>
            <Button onClick={fetchData} variant="solid" colorScheme="blue">
              Request
            </Button>
          </CardFooter>
        </Card>
      </Container>
    </>
  );
}

export default App;
