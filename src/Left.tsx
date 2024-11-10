import { Box, Flex, Image } from "@chakra-ui/react";
import One from './assets/1..png'
import Two from './assets/2..png'
import Three from './assets/3..png'
import Four from './assets/4..png'
import Five from './assets/5..png'
import Six from './assets/6..png'
import Seven from './assets/7..png'





export default function Left() {
  return (
    <Flex height="100%" direction="row">
      {/* Sidebar */}
      <Box width="150px" bg="white" p="4">
      <Image src={One} alt="one" p="4" pb="12" />
  <Image src={Two} alt="two" p="2" />
  <Image src={Three} alt="three" p="2" />
  <Image src={Four} alt="four" p="2" />
  <Image src={Five} alt="five" p="2" />
  <Image src={Six} alt="six" p="2" />
  <Image src={Seven} alt="seven" p="2" />
        
      </Box>

      {/* Random content beside the sidebar */}
      <Box flex="1" bg="gray.600" p="4">
        {/* Random text/content */}
        <h3>Main Content Area</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <p>Vivamus lacinia odio vitae vestibulum.</p>
        <p>Fusce dapibus, tellus ac cursus commodo.</p>
        <p>Maecenas sed diam eget risus varius blandit sit amet non magna.</p>
      </Box>
    </Flex>
  );
}
