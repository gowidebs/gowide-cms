import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'contactEnquiry',
  title: 'Contact Enquiry',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'email',
      title: 'Email',
      type: 'string',
      validation: Rule => Rule.required().email()
    }),
    defineField({
      name: 'phone',
      title: 'Phone',
      type: 'string'
    }),
    defineField({
      name: 'company',
      title: 'Company',
      type: 'string'
    }),
    defineField({
      name: 'serviceInterested',
      title: 'Service Interested',
      type: 'string'
    }),
    defineField({
      name: 'message',
      title: 'Message',
      type: 'text',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'enquiryDate',
      title: 'Enquiry Date',
      type: 'datetime',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'status',
      title: 'Status',
      type: 'string',
      options: {
        list: [
          {title: 'New', value: 'new'},
          {title: 'In Progress', value: 'in-progress'},
          {title: 'Completed', value: 'completed'}
        ]
      },
      initialValue: 'new'
    }),
    defineField({
      name: 'source',
      title: 'Source',
      type: 'string'
    })
  ],
  preview: {
    select: {
      name: 'name',
      email: 'email',
      status: 'status'
    },
    prepare(selection) {
      const {name, email, status} = selection
      return {
        title: name,
        subtitle: `${email} • ${status}`
      }
    }
  }
})