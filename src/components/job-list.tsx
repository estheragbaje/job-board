import { Stack } from '@chakra-ui/react';
import { JobCard } from './job-card';
import { JobPost } from '@/types';

type JobListProps = {
  data: JobPost[];
};

export function JobList(props: JobListProps) {
  const { data } = props;

  return (
    <Stack spacing='4'>
      {data.map((job, index) => (
        <JobCard key={index} data={job} />
      ))}
    </Stack>
  );
}
