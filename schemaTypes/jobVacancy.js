import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'jobVacancy',
  title: 'Job Vacancy',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Job Title',
      type: 'string',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'department',
      title: 'Department',
      type: 'string',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'location',
      title: 'Location',
      type: 'string',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'jobType',
      title: 'Job Type',
      type: 'string',
      options: {
        list: [
          {title: 'Full-time', value: 'full-time'},
          {title: 'Part-time', value: 'part-time'},
          {title: 'Contract', value: 'contract'}
        ]
      },
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'experienceRequired',
      title: 'Experience Required',
      type: 'string',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'description',
      title: 'Job Description',
      type: 'text',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'requirements',
      title: 'Requirements',
      type: 'text',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'salaryRange',
      title: 'Salary Range',
      type: 'string'
    }),
    defineField({
      name: 'isActive',
      title: 'Is Active',
      type: 'boolean',
      initialValue: true
    }),
    defineField({
      name: 'postedDate',
      title: 'Posted Date',
      type: 'date',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'applicationDeadline',
      title: 'Application Deadline',
      type: 'date',
      validation: Rule => Rule.required()
    })
  ],
  preview: {
    select: {
      title: 'title',
      department: 'department',
      location: 'location'
    },
    prepare(selection) {
      const {title, department, location} = selection
      return {
        title: title,
        subtitle: `${department} • ${location}`
      }
    }
  }
})