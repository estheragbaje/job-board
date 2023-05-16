export type JobPost = {
  id: number;
  title: string;
  company: string;
  content: string;
  location: string;
  datePosted: string;
  logo: string;
  tags: string[];
  remote: 'true' | 'false';
  salaryRange: string;
  fullTime: boolean;
};

export type MyCollections = {
  jobs: JobPost;
};
