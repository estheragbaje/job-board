import { Avatar, Box, Button, HStack, Heading } from '@chakra-ui/react';
import Link from 'next/link';

type JobContentProps = {
  content: string;
  logo: string;
  title: string;
  company: string;
};

export function JobContent(props: JobContentProps) {
  const { content, logo, title, company } = props;

  return (
    <Box px={{ base: '12', lg: '24' }}>
      <Button as={Link} href='/'>
        Back to jobs
      </Button>
      <Box py='16'>
        <HStack spacing='4'>
          <Avatar size='lg' name={title} src={logo} />
          <Heading size='lg'>{company}</Heading>
        </HStack>
        <Box maxW='3xl' dangerouslySetInnerHTML={{ __html: content }} />
      </Box>
    </Box>
  );
}
