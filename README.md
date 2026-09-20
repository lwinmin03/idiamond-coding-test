# MyJewel

A responsive diamond and custom jewelry website built with **Next.js, TypeScript, and Tailwind CSS**.

## Tech Stack

* Next.js
* React
* TypeScript
* Tailwind CSS
* TanStack Query
* Axios
* Framer Motion
* Lucide React

## Features

* Responsive jewelry landing page
* Custom Jewelry process section
* Responsive testimonial carousel
* Public API integration using DummyJSON
* TanStack Query for API caching
* Newsletter subscription with email validation
* Next.js API route for newsletter notifications
* Responsive footer and navigation
* Next.js Image optimization
* Smooth UI animations

## API & Caching

Testimonials are fetched from:

`https://dummyjson.com/users?limit=6`

TanStack Query handles fetching and caching with a **5-minute stale time** and **30-minute garbage-collection time**.

## Newsletter

The newsletter form sends a `POST` request to:

`/api/subscribe`

The API validates the email and sends a simulated notification to:

`process.env.EMAIL_ADDRESS`

For this assignment, the notification is logged server-side instead of using an external email provider.

## Setup

```bash
pnpm install
pnpm dev
```

Create `.env`:

```env
EMAIL_ADDRESS=your-email@example.com
```

Then open:

`http://localhost:3000`

## Notes

The testimonial API uses sample user data from DummyJSON and is transformed for demonstration purposes. The newsletter notification is simulated as required by the assignment.
