import {
  Avatar,
  Box,
  HStack,
  Heading,
  Icon,
  LinkBox,
  LinkOverlay,
  Stack,
  Tag,
  Text,
} from '@chakra-ui/react';
import NextLink from 'next/link';
// @ts-ignore
import friendlyTime from 'friendly-time';

import {
  MdBusiness,
  MdLocationPin,
  MdOutlineAttachMoney,
} from 'react-icons/md';

type JobCardProps = {
  id: number;
  title: string;

  company: string;
  location: string;
  datePosted: string;
  logo: string;
  tags: string[];
  remote: boolean;
  salaryRange: string;
  fullTime: boolean;
};

export function JobCard(props: JobCardProps) {
  const {
    id,
    title,
    company,
    location,
    datePosted,
    logo,
    tags,
    remote,
    salaryRange,
    fullTime,
    ...rest
  } = props;

  return (
    <Box bg='gray.100' p='4' {...rest}>
      <LinkBox as='article'>
        <Stack direction={{ base: 'column', lg: 'row' }} spacing='8'>
          <Avatar size='lg' name={title} src={logo} />

          <Box>
            <LinkOverlay as={NextLink} href={`/${id}`}>
              <Heading size='md'>{title}</Heading>
            </LinkOverlay>
            <Text>{company}</Text>
            <Stack mt='2' spacing={1}>
              <HStack spacing={1}>
                <Icon as={MdLocationPin} boxSize={4} />
                <Text>{location}</Text>
              </HStack>
              <HStack spacing={1}>
                <Icon as={MdBusiness} boxSize={4} />
                {remote ? <Text>Remote</Text> : <Text>Onsite</Text>}
              </HStack>
              <HStack spacing={1}>
                <Icon as={MdOutlineAttachMoney} boxSize={4} />
                <Text>{salaryRange}</Text>
              </HStack>
            </Stack>
          </Box>
          <HStack spacing={2}>
            {tags.map((tag, index) => (
              <Tag key={index} variant='outline' colorScheme='orange'>
                {tag}
              </Tag>
            ))}
          </HStack>
          <Text alignSelf={{ base: 'left', lg: 'center' }}>
            Posted {friendlyTime(new Date(datePosted))}
          </Text>
        </Stack>
      </LinkBox>
    </Box>
  );
}
