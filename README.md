# This is my personel portfolio website [Live Link](https://portfolio-aniket.vercel.app/)
Tech Stack : Next Js, Javascript, Tailwind CSS, Google Sheets as CMS.

Initially, I was using Strapi as a Content Management System (CMS). However, I encountered limitations as no cloud provider offers free long-term hosting for the Strapi backend. To address this, I transitioned to using Google Sheets as a CMS. This approach eliminates the need for server and database maintenance, allows easy access and modification of content, and ensures real-time updates on the website. However, it is important to note that Google Sheets is not a database.

### Pros of Using Google Sheets as a CMS

1.  **Cost-Effective**: Google Sheets is free and doesn’t require any hosting costs, which is beneficial for long-term projects.
2.  **Ease of Use**: It’s easy to use and doesn’t require specialized knowledge to set up or maintain.
3.  **Real-Time Updates**: Changes made in Google Sheets are reflected in real-time, which is convenient for content updates.
4.  **Accessibility**: Being a cloud-based tool, Google Sheets can be accessed from anywhere with an internet connection.
5.  **No Server Maintenance**: Eliminates the need to maintain a server and database, reducing technical overhead.

### Cons of Using Google Sheets as a CMS

1.  **Not a Database**: Google Sheets is not designed to handle large volumes of data or complex queries efficiently, which could be a limitation for more data-intensive applications.
2.  **Scalability**: Limited scalability compared to traditional databases or CMS platforms like Strapi.
3.  **Data Security**: Potential security concerns, as Google Sheets may not offer the same level of data protection and access control as a dedicated CMS or database.
4.  **Limited Functionality**: Lacks the advanced features and customization options that a full-fledged CMS like Strapi offers.
5.  **API Limits**: Google Sheets API has usage limits, which could be a constraint if your application requires frequent or extensive data operations.

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
