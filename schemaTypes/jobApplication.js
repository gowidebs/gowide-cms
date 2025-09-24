export default {
  name: 'jobApplication',
  title: 'Job Application',
  type: 'document',
  fields: [
    {
      name: 'jobId',
      title: 'Job ID',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'applicantName',
      title: 'Applicant Name',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'email',
      title: 'Email',
      type: 'string',
      validation: Rule => Rule.required().email()
    },
    {
      name: 'phone',
      title: 'Phone',
      type: 'string'
    },
    {
      name: 'coverLetter',
      title: 'Cover Letter',
      type: 'text'
    },
    {
      name: 'resumeUrl',
      title: 'Resume URL',
      type: 'string'
    },
    {
      name: 'status',
      title: 'Status',
      type: 'string',
      options: {
        list: [
          {title: 'New', value: 'new'},
          {title: 'Under Review', value: 'reviewing'},
          {title: 'Shortlisted', value: 'shortlisted'},
          {title: 'Rejected', value: 'rejected'}
        ]
      },
      initialValue: 'new'
    }
  ]
}