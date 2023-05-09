import { Stack } from '@chakra-ui/react';
import { JobCard } from './job-card';

type JobPostData = {
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

type JobListProps = {
  data: JobPostData[];
};

export function JobList(props: JobListProps) {
  const { data } = props;

  return (
    <Stack spacing='4'>
      {data.map((job, index) => (
        <JobCard
          key={index}
          id={job.id}
          title={job.title}
          company={job.company}
          location={job.location}
          datePosted={job.datePosted}
          logo={job.logo}
          tags={job.tags}
          remote={job.remote}
          salaryRange={job.salaryRange}
          fullTime={job.fullTime}
        />
      ))}
    </Stack>
  );
}
