import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'caseStudy',
  title: 'Case Study',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Project Title',
      type: 'string',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96
      },
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'clientName',
      title: 'Client Name',
      type: 'string',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'featuredImage',
      title: 'Featured Image',
      type: 'image',
      options: {
        hotspot: true
      },
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'gallery',
      title: 'Project Gallery',
      type: 'array',
      of: [{type: 'image'}]
    }),
    defineField({
      name: 'projectOverview',
      title: 'Project Overview',
      type: 'text',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'challenge',
      title: 'Challenge',
      type: 'text',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'solution',
      title: 'Solution',
      type: 'text',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'results',
      title: 'Results',
      type: 'text',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'technologiesUsed',
      title: 'Technologies Used',
      type: 'string'
    }),
    defineField({
      name: 'projectDuration',
      title: 'Project Duration',
      type: 'string'
    }),
    defineField({
      name: 'isPublished',
      title: 'Is Published',
      type: 'boolean',
      initialValue: false
    })
  ],
  preview: {
    select: {
      title: 'title',
      client: 'clientName',
      media: 'featuredImage'
    },
    prepare(selection) {
      const {title, client} = selection
      return {
        title: title,
        subtitle: `Client: ${client}`
      }
    }
  }
})