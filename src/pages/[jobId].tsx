import { Box } from '@chakra-ui/react';
import { Directus } from '@directus/sdk';
import { JobPost, MyCollections } from '@/types';
import { JobContent } from '@/components/job-content';
import { GetStaticPaths, GetStaticProps } from 'next';

export default function JobDetails({ job }: { job: JobPost }) {
  return (
    <Box p={{ base: '12', lg: '24' }}>
      <JobContent
        content={job.content}
        title={job.title}
        logo={job.logo}
        company={job.company}
      />
    </Box>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const directus = new Directus<MyCollections>(
    'https://esther-dev.directus.app/'
  );

  // give me all the ids
  const jobs = await directus.items('jobs').readByQuery({
    limit: -1,
    fields: ['id'],
  });

  // wrap it in params: { jobId }
  const paths = jobs.data?.map((job) => {
    return {
      params: { jobId: job.id.toString() },
    };
  });

  return {
    paths: paths || [],
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const jobId = context.params?.jobId as string;

  const directus = new Directus<MyCollections>(
    'https://esther-dev.directus.app/'
  );

  const job = await directus.items('jobs').readOne(jobId);

  // reformat the image field to have the full url
  if (job) {
    job.logo = `https://esther-dev.directus.app/assets/${job.logo}`;
  }

  return {
    props: {
      job,
    },
  };
};
