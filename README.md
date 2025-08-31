# Kaloji Convention Centre Website

A modern, bilingual website for Kaloji Narayana Rao Convention Centre in Warangal, Telangana.

## Features

- **Bilingual Support**: English and Telugu
- **Booking System**: Real-time event booking with database integration
- **Admin Dashboard**: Complete booking management system
- **Responsive Design**: Works on all devices
- **Cultural Focus**: Designed for arts and cultural events

## Database Setup

This project uses Neon PostgreSQL database. To set up:

1. Create a Neon database account
2. Create a new database
3. Run the schema from `database/schema.sql`
4. Set your database URL in environment variables

## Environment Variables

For Netlify deployment, set these environment variables:

```
NETLIFY_DATABASE_URL_UNPOOLED=your_neon_unpooled_connection_string
```

## Admin Credentials

- **Username**: `admin`
- **Password**: `admin123`

## Local Development

1. Install dependencies: `npm install`
2. Set up environment variables in `.env`
3. Run development server: `npm run dev`

## Deployment

This project is configured for Netlify deployment with:
- Automatic builds from main branch
- Environment variable support
- SPA routing support

## Tech Stack

- React + TypeScript
- Tailwind CSS
- Neon PostgreSQL
- Lucide React Icons
- Vite

## Company

Developed by **JollyBuoy Technology Services Pvt. Ltd.**